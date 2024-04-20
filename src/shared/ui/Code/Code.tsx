import { FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button } from '../Button'
import { Copy } from 'shared/assets/icons/Copy'

interface CodeProps {
  className?: string
  text: string
}

const Code: FC<CodeProps> = ({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn} onClick={onCopy}>
        <Copy className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}

export default memo(Code)
