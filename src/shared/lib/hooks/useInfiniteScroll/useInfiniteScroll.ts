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

    if (callBack) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callBack()
        }
      }, options)

      observer.observe(triggerRef.current as HTMLElement)

      return () => {
        if (observer) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(triggerRef.current as HTMLElement)
        }
      }
    }
  }, [wrapperRef, triggerRef, callBack])
}
