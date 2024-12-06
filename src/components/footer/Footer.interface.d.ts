import { MultiLinkListProps } from '../multi-link-list';
import { LinkProps } from '@zepdev/design-system-component-library-react';

export interface FooterProps extends Omit<MultiLinkListProps, 'variant'> {
    socialMediaLinks: LinkProps[];
    socialMediaTitle: string;
    footerLinks: LinkProps[];
}
//# sourceMappingURL=Footer.interface.d.ts.map