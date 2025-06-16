import type { FC, ReactNode } from 'react'
import './Badge.css'

interface BadgeProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'coming-soon'
}

export const Badge: FC<BadgeProps> = ({ children, className = '', variant = 'default' }) => {
  return (
    <span className={`badge ${variant === 'coming-soon' ? 'coming-soon' : ''} ${className}`}>
      {children}
    </span>
  )
}
