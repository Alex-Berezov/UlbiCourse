import { CSSProperties, FC, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: string
  alt?: string
}

const Avatar: FC<AvatarProps> = ({ className, src, size, alt }) => {
  const styles = useMemo<CSSProperties>(() => {
    return size ? { width: size || '100px', height: size || '100px' } : {}
  }, [size])

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  )
}

export default Avatar
