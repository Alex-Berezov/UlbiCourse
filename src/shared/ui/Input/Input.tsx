import React, { FC, InputHTMLAttributes, memo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  type?: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  readOnly?: boolean
}

const Input: FC<InputProps> = memo(function Input(props: InputProps) {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readOnly,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  }

  return (
    <div className={classNames(cls.inputBlockWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder} >`}</div>
      )}

      <div className={cls.inputWrapper}>
        <input
          type={type}
          className={cls.input}
          value={value}
          onChange={onChangeHandler}
          autoComplete="new-password"
          readOnly={readOnly}
          {...otherProps}
        />
      </div>
    </div>
  )
})

export default Input
