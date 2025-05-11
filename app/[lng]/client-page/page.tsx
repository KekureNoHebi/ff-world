'use client';

import * as React from 'react';
import { useT } from '@/app/i18n/client';
import { Link } from '@/app/[lng]/components/Link/client';

export default function Page() {
  const { t } = useT('client-page');
  return (
    <>
      <main>
        <Link href="/">
          <button type="button">{t('back-to-home')}</button>
        </Link>
      </main>
    </>
  );
}
