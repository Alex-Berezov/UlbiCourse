import { FC, SVGProps } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { ProfileIcon } from 'shared/assets/icons/ProfileIcon'
import { MainPageIcon } from 'shared/assets/icons/MainPageIcon'
import { AboutPageIcon } from 'shared/assets/icons/AboutPageIcon'
import { ArticleIcon } from 'shared/assets/icons/ArticleIcon'

export interface SidebarItemType {
  path: string
  text: string
  Icon: FC<SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'mainPage',
    Icon: MainPageIcon,
  },
  {
    path: RoutePath.about,
    text: 'aboutPage',
    Icon: AboutPageIcon,
  },
  {
    path: RoutePath.profile,
    text: 'profilePage',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'articlesPage',
    Icon: ArticleIcon,
    authOnly: true,
  },
]
