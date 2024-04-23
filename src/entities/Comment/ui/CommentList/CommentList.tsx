import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { useTranslation } from 'react-i18next'
import Text from 'shared/ui/Text/Text'
import CommentCard from '../CommentCard/CommentCard'
import { Comment } from 'entities/Comment/model/types/comment'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

const CommentList: FC<CommentListProps> = (props) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation('article')

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment?.id}
            className={cls.comment}
            comment={comment}
            isLoading={isLoading || false}
          />
        ))
      ) : (
        <Text title={t('noComments')} />
      )}
    </div>
  )
}

export default CommentList
