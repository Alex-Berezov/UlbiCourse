import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { SidebarItemType } from '../types/sidebar'
import { AboutPageIcon } from 'shared/assets/icons/AboutPageIcon'
import { ArticleIcon } from 'shared/assets/icons/ArticleIcon'
import { MainPageIcon } from 'shared/assets/icons/MainPageIcon'
import { ProfileIcon } from 'shared/assets/icons/ProfileIcon'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export const getSiderbarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
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
  ]

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        text: 'profile',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'articles',
        Icon: ArticleIcon,
        authOnly: true,
      }
    )
  }

  return sidebarItemsList
})
