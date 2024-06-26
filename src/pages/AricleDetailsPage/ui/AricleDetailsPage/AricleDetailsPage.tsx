import { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Aricle'
import { useNavigate, useParams } from 'react-router-dom'
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
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import cls from './AricleDetailsPage.module.scss'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'

interface AricleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: ArticleDetailsCommentsReducer,
}

const AricleDetailsPage: FC<AricleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const navigate = useNavigate()

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(fetchCommentsByArtileId(id))
  }, [dispatch, id])

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  if (!id) {
    return (
      <PageWrapper
        className={classNames(cls.AricleDetailsPage, {}, [className])}
      >
        {t('articleNotFound')}
      </PageWrapper>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAftrerUnmount>
      <PageWrapper
        className={classNames(cls.AricleDetailsPage, {}, [className])}
      >
        <Button theme={ButtonTheme.OUTLINED} onClick={onBackToList}>
          {t('back')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('comment')} />

        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </PageWrapper>
    </DynamicModuleLoader>
  )
}

export default memo(AricleDetailsPage)
