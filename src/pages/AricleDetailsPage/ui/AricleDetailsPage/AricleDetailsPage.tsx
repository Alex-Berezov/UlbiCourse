import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AricleDetailsPage.module.scss'

interface AricleDetailsPageProps {
  className?: string
}

const AricleDetailsPage: FC<AricleDetailsPageProps> = ({ className }) => {
  return (
    <div className={classNames(cls.AricleDetailsPage, {}, [className])}>
      AricleDetailsPage
    </div>
  )
}

export default memo(AricleDetailsPage)
