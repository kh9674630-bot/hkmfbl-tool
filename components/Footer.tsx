import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-lg font-bold text-slate-900">HKMFBL</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              免费在线开发工具集，全部在浏览器端运行，保护您的数据隐私。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">格式转换</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/json-formatter" className="text-slate-500 hover:text-blue-600">JSON 格式化</Link></li>
              <li><Link href="/tools/csv-to-json" className="text-slate-500 hover:text-blue-600">CSV 转 JSON</Link></li>
              <li><Link href="/tools/base64-encode" className="text-slate-500 hover:text-blue-600">Base64 编解码</Link></li>
              <li><Link href="/tools/url-encode" className="text-slate-500 hover:text-blue-600">URL 编解码</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">开发工具</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/uuid-generator" className="text-slate-500 hover:text-blue-600">UUID 生成器</Link></li>
              <li><Link href="/tools/timestamp-converter" className="text-slate-500 hover:text-blue-600">时间戳转换</Link></li>
              <li><Link href="/tools/cron-generator" className="text-slate-500 hover:text-blue-600">Cron 生成器</Link></li>
              <li><Link href="/tools/jwt-decode" className="text-slate-500 hover:text-blue-600">JWT 解码器</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">其他工具</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/image-compressor" className="text-slate-500 hover:text-blue-600">图片压缩</Link></li>
              <li><Link href="/tools/qr-generator" className="text-slate-500 hover:text-blue-600">二维码生成</Link></li>
              <li><Link href="/tools/word-counter" className="text-slate-500 hover:text-blue-600">字数统计</Link></li>
              <li><Link href="/tools/md-preview" className="text-slate-500 hover:text-blue-600">Markdown 预览</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} HKMFBL. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-slate-500 hover:text-blue-600">隐私政策</Link>
            <Link href="/terms" className="text-slate-500 hover:text-blue-600">服务条款</Link>
            <Link href="/disclaimer" className="text-slate-500 hover:text-blue-600">免责声明</Link>
            <Link href="/contact" className="text-slate-500 hover:text-blue-600">联系我们</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
