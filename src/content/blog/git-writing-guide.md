---
title: 用 Git 发布一篇新的技术笔记
date: '2026-10-13 18:01:00'
updated: '2026-10-14'
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

**推送到 `main` 后，GitHub Actions 会自动更新博客。** 正式域名是 [坤の技术手记](https://kun.zhuoruan.xyz)，无需再手动上传网站文件。

在仓库的 Actions 页面可以查看发布进度。流程依次完成依赖安装、路径测试、类型检查、生产构建和 Pages 部署；绿色成功标记表示这次更新已发布。若流程失败，打开失败的步骤查看原因，修正后重新提交即可。

仓库已经在 Settings → Pages 中选择了 GitHub Actions，发布工作流位于 `.github/workflows/pages.yml`。`config/site.yaml` 的 `site.url` 为 `https://kun.zhuoruan.xyz`，自定义域名使用根路径，导航、图片、字体、RSS 和搜索均随配置生成。

如果使用早先的 Sites 地址，那个地址仍通过 Sites 的发布流程单独更新。

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
