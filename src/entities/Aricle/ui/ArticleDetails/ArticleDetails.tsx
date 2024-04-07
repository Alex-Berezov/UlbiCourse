import { FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import Text from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import Skeleton from 'shared/ui/Skeletons/Skeleton/Skeleton'
import Avatar from 'shared/ui/Avatar/Avatar'
import { CalendarIcon } from 'shared/assets/icons/CalendarIcon'
import { EyeIcon } from 'shared/assets/icons/EyeIcon'

import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

const ArticleDetails: FC<ArticleDetailsProps> = ({ className, id }) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <div className={classNames(cls.root, {}, [className])}>
        <Skeleton width="200px" height="200px" border="50%" />
        <Skeleton width="300px" height="32px" border="3px" />
        <Skeleton width="600px" height="24px" border="3px" />
        <Skeleton width="100%" height="200px" border="3px" />
        <Skeleton width="100%" height="200px" border="3px" />
      </div>
    )
  } else if (error) {
    content = <Text className={cls.error} title={t('articleDoesNotExist')} />
  } else {
    content = (
      <div className={classNames(cls.root, {}, [className])}>
        <div className={cls.avatarWrapper}>
          <Avatar size="200px" src={article?.img} className={cls.avatar} />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subTitle}
        />
        <div className={cls.views}>
          <EyeIcon className={cls.icon} />
          <Text text={article?.views} />
        </div>
        <div className={cls.createdAt}>
          <CalendarIcon className={cls.icon} />
          <Text text={article?.createdAt} />
        </div>
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAftrerUnmount={true}>
      {content}
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetails)
