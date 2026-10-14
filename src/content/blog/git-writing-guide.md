---
title: 用 Git 发布一篇新的技术笔记
date: '2026-10-13 18:01:00'
link: git-writing-guide
description: 从创建 Markdown 文件到提交更新，文章内容、图片和配置都留在自己的源码里。
cover: /img/anime/naruto-thumb.webp
categories: [工具与部署]
tags: [Git, Markdown, 写作]
colophon: [ai-lead]
---

## 文章放在哪里

博客文章位于 `src/content/blog/`。可以直接新建 Markdown 文件，也可以运行主题提供的新建命令：

```bash
pnpm koharu new post
```

标题可以使用中文。建议给 `link` 设置稳定的英文短名，这样以后修改标题也不会改变文章链接。

## 一篇文章的模板

新建 `src/content/blog/my-first-note.md`：

```yaml
---
title: 我的第一篇技术笔记
date: '2026-10-13 20:00:00'
link: my-first-note
description: 用一句话介绍这篇文章讲什么。
cover: /img/anime/naruto-thumb.webp
categories: [技术笔记]
tags: [Java, 学习笔记]
draft: false
---
```

在第二个 `---` 下面开始写正文即可。`draft: true` 的文章只会出现在本地开发环境，正式构建不会发布。

## 在本地检查

首次拿到源码后，安装依赖，再启动本地服务：

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

浏览器打开终端给出的地址。发布前执行：

```bash
pnpm check
pnpm build
```

## 提交到 Git

```bash
git add src/content/blog public/img config/site.yaml
git commit -m "docs: add my first note"
git push
```

**Git 负责保存源码，部署流程负责更新网页。** 当前站点由站点发布流程部署；推送到普通 Git 仓库本身不会自动更新这个网址。

如果后续使用自己的 GitHub 仓库与 GitHub Pages，可启用源码中的 `.github/workflows/pages.yml`。首次需在仓库的 Settings → Pages 中选择 GitHub Actions，并将 `config/site.yaml` 的 `site.url` 改成最终网址。工作流会在推送到 `main` 后构建并发布。

这个工作流按站点根路径部署。仓库建议命名为 `你的用户名.github.io`，或绑定独立域名；若部署到 `/仓库名/` 子路径，需要另外配置基础路径与资源链接。

## 图片和壁纸

文章图片放在 `public/img/`，正文中这样引用：

```markdown
![图片说明](/img/my-project.webp)
```

四套壁纸在 `public/img/anime/`；壁纸名称与路径在 `src/constants/anime-wallpapers.ts`。替换文件后重新构建即可。

## 常用文章属性

| 属性 | 用途 |
| --- | --- |
| `link` | 稳定的文章 URL |
| `updated` | 最近更新时间 |
| `sticky: true` | 首页置顶 |
| `draft: true` | 草稿，不进入正式构建 |
| `cover` | 列表卡片封面 |
| `categories` | 分类，可使用多级分类 |
| `tags` | 标签 |

写作时先用简单的结构，等内容变多以后再细分分类。
