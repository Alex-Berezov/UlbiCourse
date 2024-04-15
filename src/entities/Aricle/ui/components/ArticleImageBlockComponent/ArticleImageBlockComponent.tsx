import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleImageBlock } from '../../../model/types/article'

import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({
  className,
  block,
}) => {
  return <div className={classNames(cls.root, {}, [className])}></div>
}

export default memo(ArticleImageBlockComponent)
