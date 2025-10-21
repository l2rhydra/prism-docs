import Link from 'next/link'
import './buttons.css'

export const Button = ({ href, children, icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="theme-button"
    >
      {icon && <span className="theme-button-icon">{icon}</span>}
      <span>{children}</span>
    </Link>
  )
}


export const DownloadButton = ({ href, children, icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="themedwn-button"
    >
      {icon && <span className="theme-button-icon">{icon}</span>}
      <span>{children}</span>
    </Link>
  )
}