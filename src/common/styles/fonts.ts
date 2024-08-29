import { Fira_Code, Onest, Plus_Jakarta_Sans, Sora } from 'next/font/google';

export const jakartaSans = Plus_Jakarta_Sans({
  variable: '--jakartaSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['400', '500', '600', '700', '800'],
});

export const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  display: 'swap',
});

export const soraSans = Sora({
  variable: '--soraSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const onestSans = Onest({
  variable: '--onestSans-font',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  adjustFontFallback: false,
});
