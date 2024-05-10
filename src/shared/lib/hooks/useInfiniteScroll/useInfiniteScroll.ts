import { MutableRefObject, useEffect } from 'react'

export interface InfiniteScrollProps {
  callBack?: () => void
  triggerRef: MutableRefObject<HTMLElement | null>
  wrapperRef: MutableRefObject<HTMLElement | null>
}

export function useInfiniteScroll({
  callBack,
  triggerRef,
  wrapperRef,
}: InfiniteScrollProps) {
  useEffect(() => {
    let observer: IntersectionObserver
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    if (callBack) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callBack()
        }
      }, options)

      observer.observe(triggerElement as HTMLElement)

      return () => {
        if (observer) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(triggerElement as HTMLElement)
          observer.disconnect()
        }
      }
    }
  }, [wrapperRef, triggerRef, callBack])
}
