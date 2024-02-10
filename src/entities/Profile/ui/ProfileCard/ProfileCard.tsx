import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { useTranslation } from 'react-i18next'
import Text from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input'

interface ProfileCardProps {
  className?: string
}

const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  // const isLoading = useSelector(getProfileIsLoading)
  // const error = useSelector(getProfileError)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.hader}>
        <Text title={t('profile')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINED}>
          {t('editProfile')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          placeholder={t('firstName')}
          value={data?.firstName}
        />
        <Input
          className={cls.input}
          placeholder={t('lastName')}
          value={data?.lastName}
        />
      </div>
    </div>
  )
}

export default ProfileCard
