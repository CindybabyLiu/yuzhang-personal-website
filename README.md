# Yuzhang Liu — Next.js Portfolio

一个已经完成的 Next.js 个人作品集网站，可直接部署到 Vercel。

## 1. 本地运行

需要 Node.js 20.9 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开：`http://localhost:3000`

## 2. 发布前必须修改

打开：

```text
src/data/portfolio.ts
```

修改以下内容：

- `email`
- `linkedin`
- `github`
- 经历日期、职位名称和项目文字

网站的所有主要内容都集中在这个文件中，后续维护不需要改页面结构。

## 3. 项目结构

```text
src/app/page.tsx                 首页
src/app/resume/page.tsx          可打印的在线简历
src/app/projects/[slug]/page.tsx 项目详情页
src/data/portfolio.ts            个人信息与项目数据
src/app/globals.css              全站样式
```

## 4. 部署到 Vercel

### 方法 A：GitHub + Vercel（推荐）

1. 在 GitHub 创建一个新仓库。
2. 把本项目上传到仓库：

```bash
git init
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin 你的GitHub仓库地址
git push -u origin main
```

3. 登录 Vercel。
4. 选择 **Add New → Project**。
5. 导入刚才的 GitHub 仓库。
6. 点击 **Deploy**。

以后每次 push 到 GitHub，Vercel 都会自动重新部署。

### 方法 B：Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

## 5. 保存简历 PDF

访问：

```text
/resume
```

点击 **Print / Save as PDF**，即可用浏览器导出 PDF。

## 6. 下一步建议

- 替换真实 LinkedIn、GitHub 和邮箱。
- 给每个项目增加 1–3 张截图或架构图。
- 购买并绑定个人域名，例如 `yuzhangliu.com`。
- 完成 RAG / Agent 项目后，把它放到首页第一位。
