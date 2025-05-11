import React from 'react';
import { getT } from '@/app/i18n';
import { LinkBase } from '@/app/[lng]/components/Link/LinkBase';

export const Link = async ({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) => {
  const { i18n } = await getT();
  return (
    <LinkBase lng={i18n.resolvedLanguage} href={href}>
      {children}
    </LinkBase>
  );
};
