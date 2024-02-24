import { ChangeEvent, FC, memo, useMemo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

export interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readOnly?: boolean
}

const Select: FC<SelectProps> = memo((props) => {
  const { className, label, options, value, onChange, readOnly } = props

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} className={cls.option} value={opt.value}>
        {opt.content}
      </option>
    ))
  }, [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {}

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <label className={cls.label}>{`${label} >`}</label>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readOnly}
      >
        {optionsList}
      </select>
    </div>
  )
})

export default Select
