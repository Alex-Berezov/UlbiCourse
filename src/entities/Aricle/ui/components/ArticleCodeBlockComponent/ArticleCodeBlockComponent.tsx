import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleCodeBlock } from 'entities/Aricle/model/types/article'
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
      <Code>{block.code}</Code>
    </div>
  )
}

export default memo(ArticleCodeBlockComponent)
