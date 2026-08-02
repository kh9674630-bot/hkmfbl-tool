import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'HKMFBL - 免费在线开发工具集',
    template: '%s | HKMFBL 在线工具',
  },
  description: 'HKMFBL 提供免费的在线开发工具，包括 JSON 格式化、CSV 转 JSON、时间戳转换、Base64 编解码、UUID 生成、图片压缩、二维码生成等 12 款实用工具，全部在浏览器端运行，无需上传数据。',
  keywords: ['在线工具', 'JSON格式化', 'Base64', 'UUID生成', '时间戳转换', '图片压缩', '二维码生成', '开发工具', '免费工具', '在线编辑器'],
  authors: [{ name: 'HKMFBL' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://hkmfbl.top',
    siteName: 'HKMFBL 在线工具',
    title: 'HKMFBL - 免费在线开发工具集',
    description: '12款免费在线开发工具，全部在浏览器端运行，保护您的数据隐私。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HKMFBL - 免费在线开发工具集',
    description: '12款免费在线开发工具，全部在浏览器端运行。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
