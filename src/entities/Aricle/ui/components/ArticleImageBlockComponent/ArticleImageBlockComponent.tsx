import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleImageBlock } from '../../../model/types/article'

import cls from './ArticleImageBlockComponent.module.scss'
import Text from 'shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div className={classNames(cls.root, {}, [className])}>
      <img src={block.src} alt={block.alt} className={cls.img} />
      {block.title && <Text text={block.title} className={cls.title} />}
    </div>
  )
}

export default memo(ArticleImageBlockComponent)
