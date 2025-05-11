'use client';

import { LinkBase } from '@/app/[lng]/components/Link/LinkBase';
import { useT } from '@/app/i18n/client';

export function Link({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  const { i18n } = useT();
  return (
    <LinkBase lng={i18n.resolvedLanguage} href={href}>
      {children}
    </LinkBase>
  );
}
