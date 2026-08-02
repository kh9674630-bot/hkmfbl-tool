import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '服务条款 - HKMFBL',
  description: 'HKMFBL 服务条款，使用我们网站前请阅读。',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">服务条款</h1>
      <p className="text-sm text-slate-500 mb-8">最后更新日期：2026年8月2日</p>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <p>
          欢迎使用 HKMFBL（以下简称"网站"）。访问和使用本网站即表示您同意遵守以下服务条款。
          如果您不同意这些条款，请勿使用本网站。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">一、服务内容</h2>
        <p>
          本网站提供免费的在线开发工具，包括但不限于 JSON 格式化、Base64 编解码、UUID 生成、时间戳转换等功能。
          所有工具均在用户浏览器本地运行，我们不对用户输入的数据进行任何存储或处理。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">二、知识产权</h2>
        <p>
          本网站的所有内容，包括文字、图形、标识、界面设计、代码等，均受著作权法和相关知识产权法律保护。
          未经书面许可，不得复制、转载、链接或以其他方式使用本网站内容。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">三、用户行为规范</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>不得利用本网站从事任何违法活动</li>
          <li>不得对网站进行反向工程、反编译或试图获取源代码</li>
          <li>不得干扰或破坏网站的正常运行</li>
          <li>不得上传或输入恶意代码或病毒</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">四、免责声明</h2>
        <p>
          本网站按"现状"提供，不提供任何明示或暗示的保证。我们对工具的准确性、完整性或适用性不作保证。
          用户使用工具产生的任何后果由用户自行承担。我们不因工具的使用或无法使用而承担任何责任。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">五、广告说明</h2>
        <p>
          本网站使用 Google AdSense 等服务投放广告。广告内容不影响工具的使用体验。
          我们不会对广告内容的准确性负责。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">六、条款变更</h2>
        <p>
          我们有权根据需要修改本服务条款。修改后的条款将在网站上公布后立即生效。
          如继续使用本网站，即视为接受修改后的条款。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">七、联系我们</h2>
        <p>
          如有疑问，请通过 <a href="mailto:contact@hkmfbl.top" className="text-blue-600 underline">contact@hkmfbl.top</a> 联系我们。
        </p>
      </div>
    </div>
  );
}
