import localFont from 'next/font/local';

export const stolzl = localFont({
  src: [
    { path: './assets/fonts/Stolzl-Light.ttf', weight: '300', style: 'normal' },
    { path: './assets/fonts/Stolzl-Book.ttf', weight: '400', style: 'normal' },
    {
      path: './assets/fonts/Stolzl-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/Stolzl-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    { path: './assets/fonts/Stolzl-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-stolzl',
});
