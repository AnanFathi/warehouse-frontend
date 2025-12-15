import type { NextConfig } from 'next';
import { i18nConfig } from './i18n';
const nextConfig: NextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: [...i18nConfig.locales],
    defaultLocale: i18nConfig.defaultLocale,
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // :white_check_mark: any Supabase project
        pathname: '/storage/v1/object/public/**', // :white_check_mark: any public file
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};
export default nextConfig;
