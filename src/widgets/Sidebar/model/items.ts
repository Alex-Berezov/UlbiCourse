import { FC, SVGProps } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'mainPage',
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'aboutPage',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'profilePage',
    Icon: ProfileIcon,
  },
]