import { lazy } from 'react'

export const AricleDetailsPageAsync = lazy(
  async () => await import('./AricleDetailsPage')
)
