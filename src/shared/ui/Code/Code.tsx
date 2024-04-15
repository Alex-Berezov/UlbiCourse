import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button } from '../Button'

interface CodeProps {
  className?: string
  children: ReactNode
}

const Code: FC<CodeProps> = ({ className, children }) => {
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn}>Copy</Button>
      <code>{children}</code>
    </pre>
  )
}

export default Code
