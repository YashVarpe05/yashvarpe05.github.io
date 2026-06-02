import localFont from "next/font/local";

export const silka = localFont({
  preload: true,
  variable: '--font-silka',
  src: [
    {
      path: './Silka Thin Webfont.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Silka Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Silka Light Webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Silka Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Silka Medium Webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Silka Semibold Webfont.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Silka Bold Webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Silka Black Webfont.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})