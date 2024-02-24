import { FC } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input'
import { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader'
import Avatar from 'shared/ui/Avatar/Avatar'
import { Country, Currency } from 'shared/const/common'
import Select from 'shared/ui/Select/Select'

type StringEnum = Record<string, string>

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readOnly?: boolean
  onProfileChange?: (field: keyof Profile, value: string) => void
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className, data, isLoading, error, readOnly, onProfileChange } = props
  const { t } = useTranslation('profile')

  console.log('====================================')
  console.log('data >>', data)
  console.log('====================================')

  const enumToSelectOptions = (enumObj: StringEnum) => {
    return Object.values(enumObj).map((value) => ({
      value,
      content: value,
    }))
  }

  const currencyOptions = enumToSelectOptions(Currency)
  const countryOptions = enumToSelectOptions(Country)

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('ProfileError')}
          text={t('shouldReloadPage')}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readOnly,
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        <div className={cls.avatarWrapper}>
          {data?.avatar && (
            <Avatar src={data.avatar} alt="Avatar" size="100px" />
          )}
        </div>
        {data &&
          Object.entries(data).map(([key, value]) => {
            // Проверяем, является ли текущее поле currency или country
            if (key === 'currency') {
              return (
                <Select
                  key={key}
                  className={cls.select}
                  label={t('currency')}
                  value={value}
                  options={currencyOptions}
                  onChange={(newValue) =>
                    onProfileChange?.(key as keyof Profile, newValue)
                  }
                  readOnly={readOnly}
                />
              )
            } else if (key === 'country') {
              return (
                <Select
                  key={key}
                  className={cls.select}
                  label={t('country')}
                  value={value}
                  options={countryOptions}
                  onChange={(newValue) =>
                    onProfileChange?.(key as keyof Profile, newValue)
                  }
                  readOnly={readOnly}
                />
              )
            } else {
              // Для остальных полей используем Input
              return (
                <Input
                  key={key}
                  className={cls.input}
                  placeholder={t(key)}
                  value={value}
                  onChange={(newValue: string) => {
                    onProfileChange?.(key as keyof Profile, newValue)
                  }}
                  readOnly={readOnly}
                />
              )
            }
          })}
      </div>
    </div>
  )
}

export default ProfileCard
