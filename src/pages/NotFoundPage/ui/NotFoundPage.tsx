import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <PageWrapper className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('pageNotFound')}
    </PageWrapper>
  )
}

export default NotFoundPage
