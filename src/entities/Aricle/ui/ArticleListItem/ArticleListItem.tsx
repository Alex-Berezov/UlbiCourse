import { FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article'
import Text from 'shared/ui/Text/Text'
import { EyeIcon } from 'shared/assets/icons/EyeIcon'
import Card from 'shared/ui/Card/Card'
import Avatar from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import ArticleTextBlockComponent from '../components/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { className, article, view = ArticleView.GRID } = props
  const { t } = useTranslation('article')
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [article.id, navigate])

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Avatar size="30px" alt="Avatar" src={article.user.avatar} />
            <Text className={cls.userName} text={article.user.userName} />
            <Text className={cls.createdAt} text={article.createdAt} />
          </div>
          <div className={cls.titleBlock}>
            <Text className={cls.title} title={article.title} />
            <Text className={cls.subTitle} text={article.subTitle} />
          </div>
          <Text className={cls.articleType} text={article.type.join(', ')} />
          <img className={cls.img} src={article.img} alt={article.title} />

          {textBlock && (
            <ArticleTextBlockComponent
              className={cls.textBlock}
              block={textBlock}
            />
          )}

          <div className={cls.footer}>
            <Button className={cls.button} onClick={onOpenArticle}>
              {t('readMore')}
            </Button>
            <div className={cls.views}>
              <Text text={String(article.views)} />
              <EyeIcon className={cls.eyeIcon} />
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      onClick={onOpenArticle}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <img className={cls.img} src={article.img} alt={article.title} />
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <div className={cls.infoWrapper}>
          <Text className={cls.articleType} text={article.type.join(', ')} />
          <Text className={cls.views} text={String(article.views)} />
          <EyeIcon className={cls.eyeIcon} />
        </div>
        <Text className={cls.title} text={article.title} />
      </Card>
    </div>
  )
}

export default ArticleListItem
