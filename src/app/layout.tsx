import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// 1. Importamos o Sidebar (o componente que você criou com o Prisma)
import { Sidebar } from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Prompt Manager',
  description: 'Gerencie seus prompts',
};

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-gray-900 text-white`}>
        {/* A classe 'flex' faz o Sidebar e o Main ficarem lado a lado */}
        <section className="flex h-screen overflow-hidden">
          {/* 2. Chamamos o Sidebar aqui para ele aparecer na esquerda */}
          <Sidebar />

          <main className="relative flex-1 overflow-auto min-w-0">
            <div className="p-4 sm:p-6 md:p-8 max-w-full md:max-w-3xl mx-auto h-full">
              {children}
            </div>
          </main>
        </section>
      </body>
    </html>
  );
}
