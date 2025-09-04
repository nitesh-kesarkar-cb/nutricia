import { useTranslation } from 'react-i18next';

export default function ShopPage() {
   const { t } = useTranslation();

   return <h2>{t('shop.title')}</h2>;
}
