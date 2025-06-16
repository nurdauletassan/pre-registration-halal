import type { FC, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card: FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
} 