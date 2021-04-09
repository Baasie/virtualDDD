import { Link } from "gatsby"
import React, { FC } from "react"
import tw from "twin.macro"

interface ThreeDBlueButtonProps {
  to?: string
  href?: string
  css?: string
}

const ThreeDBlueButton: FC<ThreeDBlueButtonProps> = ({
  children,
  to,
  href,
  ...props
}) => {
  const style = [
    tw`text-center text-sm text-white py-2 px-2 w-auto h-auto 
    border-b-4 border-blue-900 bg-blue-500 hover:bg-blue-700 hover:border-blue-900 rounded break-words`,
  ]
  if (href) {
    return (
      <a
        role="button"
        css={style}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link css={style} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return null
}

export default ThreeDBlueButton
