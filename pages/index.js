import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '@/styles/utils.module.css';
import { getSortedPostsData } from '@/lib/posts';


export default function Home({allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// getStaticProps 函数只会在服务端运行/多个直接写在里面
// 多个外部api，划分组件比较好，组件需要设计的合理，比如结合api
// 只能在页面导出
// 由于静态生成在构建时发生一次，因此它不适合频繁更新或根据每个用户请求更改的数据。
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// 服务端渲染

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }