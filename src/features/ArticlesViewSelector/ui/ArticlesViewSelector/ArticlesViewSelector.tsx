import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './ArticlesViewSelector.module.scss';

interface ArticlesViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.LIST, icon: ListIcon },
  { view: ArticleView.GALLERY, icon: TiledIcon },
];

export const ArticlesViewSelector = ({ className, view, onViewClick }: ArticlesViewSelectorProps) => (
  <div className={classNames(cl.ArticlesViewSelector, {}, [className])}>
    {viewTypes.map((viewType, index) => (
      <Button
        theme="clear"
        key={index}
        onClick={() => onViewClick(viewType.view)}
      >
        <Icon
          Svg={viewType.icon}
          className={classNames('', { [cl.selected]: viewType.view === view }, [])}
        />
      </Button>
    ))}
  </div>
);
