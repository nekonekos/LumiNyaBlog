# LumiNyaBlog

这是一个私有的个人博客项目，使用 Hexo/静态网站生成器构建。

## 目录结构

```
_config.landscape.yml
_config.yml
package.json
public/                # 生成的静态文件目录
  index.html
  search.json
  2026/...            # 发布文章的具体路径
scaffolds/             # Hexo 模板
source/
  _posts/             # 博客文章Markdown文件
themes/
  luminya/            # 自定义主题
    _config.yml
    layout/           # EJS 模板
    source/           # 主题静态资源(css/js/img)
```

## 使用说明

1. 安装依赖: `npm install` 或 `yarn`。
2. 写文章: 在 `source/_posts/` 目录下添加 `.md` 文件。
3. 生成站点: `hexo generate`。
4. 本地预览: `hexo server`。
5. 部署: 根据配置运行 `hexo deploy`。

> 这是一个简单的博客项目，使用自定义主题 `luminya`。

---

**注意：** 请根据自己的 Hexo 环境和配置调整命令和设置。