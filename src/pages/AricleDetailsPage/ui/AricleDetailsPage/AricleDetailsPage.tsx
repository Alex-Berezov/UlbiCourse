import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AricleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Aricle'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface AricleDetailsPageProps {
  className?: string
}

const AricleDetailsPage: FC<AricleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(cls.AricleDetailsPage, {}, [className])}>
        {t('articleNotFound')}
      </div>
    )
  }

  return (
    <div className={classNames(cls.AricleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(AricleDetailsPage)
