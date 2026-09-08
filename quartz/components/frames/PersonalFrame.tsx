import { PageFrame } from "./types"
import { FullSlug, resolveRelative, simplifySlug } from "../../util/path"

const navigation = [
  ["index", "首页"],
  ["learning", "学习"],
  ["articles/index", "文章"],
  ["projects", "项目"],
  ["resources", "资源"],
  ["notes", "随记"],
  ["about", "关于"],
] as const

export const PersonalFrame: PageFrame = {
  name: "personal",
  render({ componentData, pageBody: Content, header, right }) {
    const slug = componentData.fileData.slug!
    const simple = simplifySlug(slug)
    const home = simple === "/"
    const listing = home || simple === "articles/" || simple === "learning"
    const article = simple.startsWith("articles/") && simple !== "articles/"
    const href = (target: string) => resolveRelative(slug, target as FullSlug)
    const articles = componentData.allFiles
      .filter((file) => file.slug?.startsWith("articles/") && !file.slug.endsWith("/index"))
      .sort((a, b) => (b.dates?.modified?.getTime() ?? 0) - (a.dates?.modified?.getTime() ?? 0))
    return (
      <div class="personal-site">
        <a class="skip-link" href="#main-content">
          跳到正文
        </a>
        <header class="site-header">
          <a class="brand internal" href={href("index")}>
            Shawn<span>Siao.</span>
          </a>
          <nav aria-label="主导航">
            {navigation.map(([target, label]) => {
              const active =
                target === "articles/index"
                  ? simple.startsWith("articles/")
                  : simple === simplifySlug(target as FullSlug)
              return (
                <a class="internal" href={href(target)} aria-current={active ? "page" : undefined}>
                  {label}
                </a>
              )
            })}
          </nav>
          <div class="site-tools">
            {header.map((Component) => (
              <Component {...componentData} />
            ))}
          </div>
        </header>
        <main
          id="main-content"
          tabIndex={-1}
          class={article ? "center site-main reading-page" : "center site-main"}
        >
          {article && (
            <a class="back internal" href={href("articles/index")}>
              ← 返回文章
            </a>
          )}
          <div class="popover-hint">
            <Content {...componentData} />
          </div>
          {listing && (
            <section class="article-list" aria-label="文章列表">
              <div class="section-head">
                <h2>{home ? "从这些文章开始" : "已收录文章"}</h2>
                <span>{articles.length} 篇文章</span>
              </div>
              {articles.map((file) => (
                <a class="entry internal" href={href(file.slug!)}>
                  <span class="meta">
                    知识与内容工作流
                    {file.dates?.modified
                      ? ` · ${file.dates.modified.toLocaleDateString("sv-SE", { timeZone: "Asia/Shanghai" })}`
                      : ""}
                  </span>
                  <h3>
                    {file.frontmatter?.title} <span aria-hidden="true">↗</span>
                  </h3>
                  <span class="read-more">阅读全文 →</span>
                </a>
              ))}
            </section>
          )}
          {article && (
            <aside class="reading-extras">
              {right.map((Component) => (
                <Component {...componentData} />
              ))}
            </aside>
          )}
        </main>
        <footer class="site-footer">
          <a class="brand internal" href={href("index")}>
            ShawnSiao.
          </a>
          <span>学习，实践，慢慢形成自己的理解。</span>
          <a href="https://github.com/ShawnSiao" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <small>
            由 <a href="https://quartz.jzhao.xyz/">Quartz</a> 构建 ·{" "}
            <a href={href("index.xml")}>RSS</a>
          </small>
        </footer>
      </div>
    )
  },
}
