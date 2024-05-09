import { FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList, ArticleView } from 'entities/Aricle'
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  articlePageReducer,
  articlesPageActions,
  getArticles,
} from '../../model/slices/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
  getArticlesPageError,
  getArticlesPageIsLoaidng,
  getArticlesPageView,
} from '../../model/selectors/ariclesPageSelectors'
import { ArticleViewSelector } from 'features/ArticleViewSelector'

import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoaidng)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  useEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  }, [dispatch])

  if (error) {
    return <div>{error}</div>
  }

  const onViewChange = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewChange={onViewChange} />
        <ArticleList articles={articles} view={view} isLoaing={isLoading} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
