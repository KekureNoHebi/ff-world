import { Trans } from 'react-i18next/TransWithoutContext';
import { getT } from '@/app/i18n';
import { Link } from '@/app/[lng]/components/Link';

export default async function Page() {
  const { t } = await getT('home');

  return (
    <>
      <main>
        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js <small>appDir</small> and i18next
          </Trans>
        </h2>
        <div>
          <Link href="/client-page">
            <button type="button">{t('to-client-page')}</button>
          </Link>
        </div>
      </main>
    </>
  );
}
