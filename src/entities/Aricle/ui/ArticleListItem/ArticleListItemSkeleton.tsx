import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleView } from '../../model/types/article'
import Card from 'shared/ui/Card/Card'

import cls from './ArticleListItem.module.scss'
import Skeleton from 'shared/ui/Skeletons/Skeleton/Skeleton'

interface ArticleListItemSkeletontProps {
  className?: string
  view: ArticleView
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletontProps> = (props) => {
  const { className, view } = props

  if (view === ArticleView.LIST) {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Skeleton width="30px" height="30px" border="50px" />
            <Skeleton className={cls.userName} width="100px" height="15px" />
            <Skeleton className={cls.createdAt} width="150px" height="15px" />
          </div>
          <div className={cls.titleBlock}>
            <Skeleton className={cls.title} width="150px" height="15px" />
            <Skeleton className={cls.subTitle} width="250px" height="15px" />
          </div>

          <Skeleton className={cls.img} width="100%" height="200px" />

          <div className={cls.footer}>
            <Skeleton
              className={cls.button}
              width="150px"
              height="50px"
              border="15px"
            />
            <div className={cls.views}>
              <Skeleton width="30px" height="15px" />
              <Skeleton
                className={cls.eyeIcon}
                width="15px"
                height="15px"
                border="50px"
              />
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton
            className={cls.img}
            width="200px"
            height="200px"
            border="50%"
          />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton className={cls.articleType} width="150px" height="15px" />
          <Skeleton className={cls.views} width="15px" height="15px" />
          <Skeleton
            className={cls.eyeIcon}
            width="15px"
            height="15px"
            border="50%"
          />
        </div>
        <Skeleton className={cls.title} width="200px" height="15px" />
      </Card>
    </div>
  )
}

export default ArticleListItemSkeleton
