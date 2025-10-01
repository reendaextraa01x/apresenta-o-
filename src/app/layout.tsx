import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { Poppins, PT_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-headline',
  display: 'swap',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SiteSpark | Seu Site Profissional em 3 Dias',
  description:
    'Transforme Seu Negócio com um Site Profissional e de Alta Conversão. Entregamos em até 3 dias por um preço que você pode pagar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${poppins.variable} ${ptSans.variable} font-body antialiased no-select`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={['dark', 'theme-moderno', 'theme-elegant', 'theme-minimalist', 'theme-friendly']}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

    