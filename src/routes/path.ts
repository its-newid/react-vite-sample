import Category from '@/pages/Category';
import Deployment from '@/pages/Deployment';
import Feed from '@/pages/Feed';
import Home from '@/pages/Home';
import LegalInfo from '@/pages/LegalInfo';
import StaticInfo from '@/pages/StaticInfo';
import Tag from '@/pages/Tag';

export const RoutePath = {
    HOME: '/',
    STATIC_INFO: '/app-static-info',
    FEED: '/app-feed',
    CATEGORY: '/app-category',
    TAG: '/app-tag',
    LEGAL_INFO: '/app-legal-info',
    DEPLOYMENT: '/app-deployment',
} as const;
export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];

export const PAGE_COMPONENTS: Record<
    keyof typeof RoutePath,
    React.ComponentType
> = {
    HOME: Home,
    STATIC_INFO: StaticInfo,
    FEED: Feed,
    CATEGORY: Category,
    TAG: Tag,
    LEGAL_INFO: LegalInfo,
    DEPLOYMENT: Deployment,
};
