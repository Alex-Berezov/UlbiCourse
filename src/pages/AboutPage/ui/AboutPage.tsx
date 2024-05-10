import { useTranslation } from 'react-i18next'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'

const AboutPage = () => {
  const { t } = useTranslation('about')
  return <PageWrapper>{t('aboutPage')}</PageWrapper>
}

export default AboutPage
