"use client";
import Link from "next/link";
import { useState } from "react";

const tools = [
  { href: "/tools/json-formatter", label: "JSON 格式化" },
  { href: "/tools/csv-to-json", label: "CSV 转 JSON" },
  { href: "/tools/timestamp-converter", label: "时间戳转换" },
  { href: "/tools/base64-encode", label: "Base64 编解码" },
  { href: "/tools/uuid-generator", label: "UUID 生成器" },
  { href: "/tools/url-encode", label: "URL 编解码" },
  { href: "/tools/image-compressor", label: "图片压缩" },
  { href: "/tools/qr-generator", label: "二维码生成" },
  { href: "/tools/word-counter", label: "字数统计" },
  { href: "/tools/md-preview", label: "Markdown 预览" },
  { href: "/tools/cron-generator", label: "Cron 生成器" },
  { href: "/tools/jwt-decode", label: "JWT 解码器" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-slate-900">HKMFBL</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {tools.slice(0, 6).map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                {t.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="切换菜单"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <Link
              href="/about"
              className="px-3 py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              关于
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                onClick={closeMenu}
                className="block px-3 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {t.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-slate-100 flex gap-3">
              <Link
                href="/about"
                onClick={closeMenu}
                className="px-3 py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                关于
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                联系我们
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
