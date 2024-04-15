import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleTextBlock } from '../../../model/types/article'
import Text from 'shared/ui/Text/Text'

import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div className={classNames(cls.root, {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  )
}

export default memo(ArticleTextBlockComponent)
