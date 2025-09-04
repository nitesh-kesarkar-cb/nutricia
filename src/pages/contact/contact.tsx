import { useTranslation } from 'react-i18next';

export default function ContactPage() {
   const { t } = useTranslation();

   return <h2>{t('contact.title')}</h2>;
}
