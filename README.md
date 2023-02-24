This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


*   getStaticProps 静态页面预加载，因此它不适合频繁更新或根据每个用户请求更改的数据。

*   getServerSideProps 适合每次都更新，比如用户操作更新数据，重新渲染页面

>   因为getServerSideProps在请求时被调用，它的参数 ( context) 包含请求特定的参数。

getServerSideProps仅当您需要预呈现其数据必须在请求时获取的页面时才应使用。到第一个字节 ( TTFB ) 的时间将比getStaticProps服务器必须计算每个请求的结果要慢，并且如果没有额外配置， CDN无法缓存结果。

https://nextjs.org/learn/basics/data-fetching/request-time


*   Client-side Rendering 客户端渲染：静态生成（预呈现）不需要外部数据的页面部分。当页面加载时，使用 JavaScript 从客户端获取外部数据并填充其余部分。

> 此方法适用于用户仪表板页面。因为仪表板是私有的、特定于用户的页面，所以 SEO 不相关，并且页面不需要预呈现。数据更新频繁，需要请求时取数据。
SWR:用于数据请求的React Hooks 库。数据获取React 钩子。如果您在客户端获取数据，我们强烈推荐它。它处理缓存、重新验证、焦点跟踪、间隔重新获取等。//https://swr.vercel.app/

