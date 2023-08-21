import React, { ReactNode } from 'react'

interface ErrorBoundaryProps {
  fallback: ReactNode
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

function logErrorToMyService (error: Error, info: string) {
  console.error('Logging error to service:', error, info)
}

class ErrorBoundary extends React.Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_: any): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: React.ErrorInfo) {
    logErrorToMyService(error, info.componentStack)
  }

  render () {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

export default ErrorBoundary
