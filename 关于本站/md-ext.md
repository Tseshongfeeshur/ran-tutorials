# 支持的 Markdown 扩展语法

这是一些内置 Markdown 扩展语法，写作时可以用于丰富文档格式。

## 语法高亮

语法高亮功能由 [Shiki](https://github.com/shikijs/shiki) 支持，并带有行高亮等额外特性：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}

```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情块。
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情块。
:::

## 更多

[完整的 Markdown 扩展列表](https://vitepress.dev/guide/markdown)。
