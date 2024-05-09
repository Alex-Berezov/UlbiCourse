import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleView } from 'entities/Aricle/model/types/article'
import { GridIcon } from 'shared/assets/icons/GridIcon'
import { ListIcon } from 'shared/assets/icons/ListIcon'
import { Button } from 'shared/ui/Button'

import cls from './ArticleViewSelector.module.scss'
import { ButtonTheme } from 'shared/ui/Button/Button'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewChange: (view: ArticleView) => void
}

const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({
  className,
  view,
  onViewChange,
}) => {
  const viewTypes = [
    {
      view: ArticleView.GRID,
      icon: <GridIcon />,
    },
    {
      view: ArticleView.LIST,
      icon: <ListIcon />,
    },
  ]

  const onViewBtnClick = (view: ArticleView) => () => {
    onViewChange(view)
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((type, index) => (
        <Button
          key={index}
          theme={ButtonTheme.CLEAR}
          onClick={onViewBtnClick(type.view)}
          className={classNames('', { [cls.selected]: view === type.view })}
        >
          {type.icon}
        </Button>
      ))}
    </div>
  )
}

export default ArticleViewSelector
