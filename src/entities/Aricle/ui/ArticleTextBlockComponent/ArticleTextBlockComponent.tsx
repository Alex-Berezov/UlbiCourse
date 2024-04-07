import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: string
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({
  className,
}) => {
  return <div className={classNames(cls.root, {}, [className])}></div>
}

export default ArticleTextBlockComponent
