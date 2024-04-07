import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: string
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({
  className,
}) => {
  return <div className={classNames(cls.root, {}, [className])}></div>
}

export default ArticleImageBlockComponent
