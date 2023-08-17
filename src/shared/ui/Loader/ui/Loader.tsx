import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.ldsEllipsis, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Loader
