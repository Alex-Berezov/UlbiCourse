import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleCodeBlock } from '../../../model/types/article'
import Code from 'shared/ui/Code/Code'

import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div className={classNames(cls.root, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
}

export default memo(ArticleCodeBlockComponent)
