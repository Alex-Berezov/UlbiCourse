/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import ArticleListItem from '../ArticleListItem/ArticleListItem'

import cls from './ArticleList.module.scss'
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoaing?: boolean
  view?: ArticleView
}

const ArticleList: FC<ArticleListProps> = (props) => {
  const { className, articles, isLoaing, view = ArticleView.GRID } = props

  // if (isLoaing) {
  //   return (
  //     <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
  //       {new Array(view === ArticleView.LIST ? 3 : 12)
  //         .fill(0)
  //         .map((_, index) => (
  //           <ArticleListItemSkeleton key={index} view={view} />
  //         ))}
  //     </div>
  //   )
  // }

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} />
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map((article) => renderArticle(article))
        : null}

      {isLoaing && (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          {new Array(view === ArticleView.LIST ? 3 : 12)
            .fill(0)
            .map((_, index) => (
              <ArticleListItemSkeleton key={index} view={view} />
            ))}
        </div>
      )}
    </div>
  )
}

export default ArticleList
