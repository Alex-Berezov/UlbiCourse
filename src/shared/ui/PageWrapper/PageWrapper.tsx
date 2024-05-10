import { FC, MutableRefObject, ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageWrapper.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageWrapperProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

const PageWrapper: FC<PageWrapperProps> = ({
  className,
  children,
  onScrollEnd,
}) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callBack: onScrollEnd,
  })

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.PageWrapper, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
}

export default PageWrapper
