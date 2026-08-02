# HKMFBL 在线工具

免费在线开发工具集，12款实用工具全部在浏览器端运行，保护您的数据隐私。

## 技术栈

- **框架**: Next.js 15 + TypeScript
- **样式**: Tailwind CSS v4
- **部署**: Cloudflare Pages / Vercel
- **工具**: 纯前端实现，无需后端

## 包含工具

1. JSON 在线格式化
2. CSV 转 JSON
3. 时间戳转换器
4. Base64 编解码
5. UUID 生成器
6. URL 编解码
7. 图片在线压缩
8. 二维码生成器
9. 字数统计工具
10. Markdown 预览编辑器
11. Cron 表达式生成器
12. JWT 解码器

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 部署到 Cloudflare Pages

1. 将项目推送到 GitHub
2. 在 Cloudflare Dashboard 创建 Pages 项目
3. 连接 GitHub 仓库，选择 `hkmfbl-tool` 项目
4. 构建命令: `npm run build`
5. 输出目录: `.next`
6. 环境变量无需设置

## 项目结构

```
hkmfbl-tool/
├── app/
│   ├── tools/          # 12个工具页面
│   ├── guide/          # 教程文章（动态路由）
│   ├── about/          # 关于页面
│   ├── contact/        # 联系我们
│   ├── privacy/        # 隐私政策
│   ├── terms/          # 服务条款
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   ├── sitemap.ts      # 站点地图
│   └── robots.ts       # SEO 配置
├── components/
│   ├── Header.tsx      # 顶部导航
│   └── Footer.tsx      # 底部信息
├── public/
│   └── robots.txt      # 爬虫规则
└── package.json
```

## AdSense 审核要点

- ✅ 独立域名 hkmfbl.top
- ✅ 12个工具页面 + 4个静态页 + 12篇教程 = 28+ 页面
- ✅ 每篇教程 ≥ 300 字，内容丰富
- ✅ Privacy Policy、Terms、Contact 等必要页面齐全
- ✅ 响应式设计，移动端友好
- ✅ 纯前端工具，无数据上传，隐私友好
- ✅ sitemap.xml 和 robots.txt 配置完整

## License

MIT