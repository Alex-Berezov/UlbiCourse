import { FC, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  Profile,
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadOnly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onProfileChange = useCallback(
    (field: keyof Profile, value: string) => {
      if (field === 'age') {
        const numericValue = Number(value)
        if (!isNaN(numericValue)) {
          dispatch(profileActions.updateProfile({ [field]: numericValue }))
        }
      } else {
        dispatch(profileActions.updateProfile({ [field]: value }))
      }
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers} removeAftrerUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readOnly={readOnly}
          onProfileChange={onProfileChange}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
