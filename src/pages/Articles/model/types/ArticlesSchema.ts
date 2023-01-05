import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
}
