import { FC, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  Profile,
  ProfileCard,
  ValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadOnly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorsTranslate = {
    [ValidateProfileError.SERVER_ERROR]: t('ServerError'),
    [ValidateProfileError.NO_DATA]: t('NoData'),
    [ValidateProfileError.INCORRECT_FIRST_NAME]: t('IncorrectFirstName'),
    [ValidateProfileError.INCORRECT_LAST_NAME]: t('IncorrectLastName'),
    [ValidateProfileError.INCORRECT_USER_NAME]: t('IncorrectUserName'),
    [ValidateProfileError.INCORRECT_AGE]: t('IncorrectAge'),
    [ValidateProfileError.INCORRECT_CITY]: t('IncorrectCity'),
  }

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onProfileChange = useCallback(
    (field: keyof Profile, value: string) => {
      if (field === 'age') {
        dispatch(profileActions.updateProfile({ [field]: +value }))
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
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorsTranslate[err]}
            />
          ))}
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
