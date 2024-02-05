import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAftrerUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        ProfilePage
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
