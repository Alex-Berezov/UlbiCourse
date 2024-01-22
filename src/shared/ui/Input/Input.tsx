import React, { FC, InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  type?: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

const Input: FC<InputProps> = memo(function Input(props: InputProps) {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.inputBlockWrapper, {}, [className])}>
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
          {...otherProps}
        />
      </div>
    </div>
  )
})

export default Input
