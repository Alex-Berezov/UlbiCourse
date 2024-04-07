import { FC, memo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextSize {
  M = 'textSize_m',
  L = 'textSize_l',
}

interface TextProps {
  className?: string
  title?: string
  text?: string | number
  theme?: TextTheme
  size?: TextSize
}

const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    size = TextSize.M,
  } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[size]]: true,
  }

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})

export default Text
