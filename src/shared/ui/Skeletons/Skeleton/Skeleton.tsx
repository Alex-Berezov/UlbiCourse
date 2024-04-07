import { CSSProperties, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  width?: string
  height?: string
  border?: string
}

const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, width, height, border } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return (
    <div
      className={classNames(cls.skeleton, {}, [className])}
      style={styles}
    ></div>
  )
}

export default Skeleton
