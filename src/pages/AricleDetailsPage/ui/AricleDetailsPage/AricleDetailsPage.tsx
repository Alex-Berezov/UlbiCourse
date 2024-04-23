import { FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Aricle'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Text from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  ArticleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/ArticleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArtileId } from '../../model/services/fetchCommentsByArtileId/fetchCommentsByArtileId'

import cls from './AricleDetailsPage.module.scss'

interface AricleDetailsPageProps {
  className?: string
}

const AricleDetailsPage: FC<AricleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const reducers: ReducersList = {
    articleDetailsComments: ArticleDetailsCommentsReducer,
  }

  useEffect(() => {
    dispatch(fetchCommentsByArtileId(id))
  }, [dispatch, id])

  if (!id) {
    return (
      <div className={classNames(cls.AricleDetailsPage, {}, [className])}>
        {t('articleNotFound')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAftrerUnmount>
      <div className={classNames(cls.AricleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('comment')} />

        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(AricleDetailsPage)
