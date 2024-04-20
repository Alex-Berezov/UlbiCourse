/* eslint-disable max-len */
import { FC, SVGProps } from 'react'

export const Copy: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.2 5V1H1V16.2H5L16.2 5ZM5.8 5.8V21H21V5.8H5.8Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
