# 坤の技术手记

个人技术博客，基于 [Koharu](https://github.com/cosZone/astro-koharu) 定制。完整主题说明见 README.md，原始 AGPL-3.0 许可证保留在 LICENSE。

## 本地运行

环境：Node.js 24，项目声明的 pnpm 版本（由 Corepack / pnpm action 安装）。

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

生产构建：`pnpm check && pnpm build`，输出 `dist/`。当前站点是静态输出，可以部署到自己的服务器或 GitHub Pages。

## 用 Git 发文

1. 在 `src/content/blog/` 新建 `.md` 文件。沿用示例 frontmatter；请设置稳定且唯一的 `link`。
2. 图片放进 `public/img/`，通过 `/img/图片名.webp` 引用。
3. 本地预览后运行生产构建，确认文章展示。
4. `git add src/content/blog public/img config/site.yaml`，再 `git commit` 与 `git push`。

`draft: true` 不进入正式站点。`sticky: true` 会置顶。修改文章时可添加 `updated` 日期。

Git 推送只更新源码；当前 Sites 地址的发布仍需站点发布流程。连接自己的 GitHub 仓库时，已准备好的 `.github/workflows/pages.yml` 能在 push 到 `main` 后构建并部署 GitHub Pages。首次在仓库 Settings → Pages 选择 GitHub Actions，将 `config/site.yaml` 的 `site.url` 改为最终网址。请使用 `用户名.github.io` 仓库或独立域名；默认根路径部署，不支持直接无配置部署到项目子路径。

## 常用配置

- 名称、简介、分类、导航与友链：`config/site.yaml`。
- 个人介绍：`src/pages/about.md`。
- 壁纸与缩略图：`public/img/anime/`。
- 壁纸选项：`src/constants/anime-wallpapers.ts`。
- 玻璃卡片样式：`src/styles/theme/anime-glass.css`。

首次交付采用「坤の技术手记」作为可修改的名称；四篇开站说明与排版示例可以改写或删除。示例文章已标注 AI 起草，不是用户历史文章。

## 图片来源与维护

图片为本地托管 WebP，原始来源见 `src/pages/about.md`。火影原图地址：https://images2.alphacoders.com/137/1370953.png。作品与插画权益归相应权利人所有。

定制样式及壁纸组件独立保存；升级 Koharu 时先备份配置、文章和动漫图片，再处理这些定制文件的差异。主题附带的本地 CMS、AI 摘要与其他可选工具保持上游源码状态，但当前在线编辑、音乐、分析统计和追番账号均未启用。
