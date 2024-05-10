import { useTranslation } from 'react-i18next'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'

const MainPage = () => {
  const { t } = useTranslation('home')

  return <PageWrapper>{t('mainPage')}</PageWrapper>
}

export default MainPage
