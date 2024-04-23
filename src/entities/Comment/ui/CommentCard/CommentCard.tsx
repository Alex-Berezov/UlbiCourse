import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Comment } from 'entities/Comment/model/types/comment'
import Avatar from 'shared/ui/Avatar/Avatar'
import Text from 'shared/ui/Text/Text'

import cls from './CommentCard.module.scss'
import Skeleton from 'shared/ui/Skeletons/Skeleton/Skeleton'

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading: boolean
}

const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width="30px" height="30px" border="50%" />
          <Skeleton width="100px" height="16px" className={cls.userName} />
        </div>
        <Skeleton width="100%" height="50px" className={cls.text} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar && (
          <Avatar size="30px" src={comment?.user?.avatar} />
        )}

        <Text className={cls.userName} title={comment?.user?.userName} />
      </div>
      <Text className={cls.text} text={comment?.text} />
    </div>
  )
}

export default CommentCard
