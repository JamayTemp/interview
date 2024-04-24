/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_LOCALE, NODE_ENV} = process.env

const common = {
  i18n: {
    locales: [NEXT_PUBLIC_LOCALE ?? 'en-gb'],
    defaultLocale: NEXT_PUBLIC_LOCALE ?? 'en-gb'
  },
  images: {
    unoptimized: true
  }
}

let nextConfig

if (NODE_ENV === 'development') {
  nextConfig = {
    ...common
  }
} else {
  nextConfig = {
  // exciting production things here, like CSP headers..
    ...common
  }
}


module.exports = nextConfig
