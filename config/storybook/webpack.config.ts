// eslint-disable-next-line import/no-extraneous-dependencies
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve!.modules!.unshift(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');

  const rules = config.module!.rules as RuleSetRule[];
  config.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config!.module!.rules.push(buildSvgLoader());
  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
