import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AricleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'

interface AricleDetailsPageProps {
  className?: string
}

const AricleDetailsPage: FC<AricleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article')

  return (
    <div className={classNames(cls.AricleDetailsPage, {}, [className])}>
      AricleDetailsPage
    </div>
  )
}

export default memo(AricleDetailsPage)
