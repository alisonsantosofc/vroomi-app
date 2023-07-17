import { CaretRight } from '@phosphor-icons/react'
import { StyledAppLink } from './styles'

interface AppLinkProps {
  title: string;
  href: string;
}

export default function AppLink({ title, href }: AppLinkProps) {
  return (
    <StyledAppLink 
      href={href} 
      rel="noreferrer"
    >
      {title}
      <CaretRight weight="bold"/>
    </StyledAppLink>
  )
}
