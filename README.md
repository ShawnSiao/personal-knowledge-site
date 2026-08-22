# 实践知识库网站

这是公开知识站的源码仓库。网站基于 Quartz v5 构建，内容从独立的私有知识库通过白名单导出，不直接读取本地项目或私有来源目录。

在线站点：<https://shawnsiao.github.io/personal-knowledge-site/>

## 本地构建

```powershell
npm ci
npx quartz plugin install
npx quartz build
```

生成结果位于 `public/`，该目录不提交到 Git。

## 内容更新

公开文章不在本仓库手工维护。先在私有知识库完成来源、状态和公开边界审核，再运行导出脚本，最后执行本地构建验证。

## 部署

`main` 分支更新后，GitHub Actions 构建站点并发布到 GitHub Pages。仓库的 Pages 来源需要设置为「GitHub Actions」。

## 上游

网站生成器来自 [Quartz v5](https://github.com/jackyzha0/quartz/tree/v5)，按其 MIT 许可证保留上游源码和许可文件。
