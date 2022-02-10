import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello👋 I'm Tettei. I'm a web developer and blogger. You can contact
          me on{" "}
          <a href="https://twitter.com/tetteis" target="_blank">
            Twitter
          </a>
        </p>
        <p>
          I built this site to improve my knowledge Next.js based on the{" "}
          <a href="https://nextjs.org/learn" target="_blank">
            Next.js tutorial
          </a>
        </p>
      </section>
    </Layout>
  );
}
