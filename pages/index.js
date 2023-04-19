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
          Greetings! As an associate software engineer, I bring relevant working
          experiences in the IT industry and a passion for programming. With
          experience in Javascript, React, ViteJS, Python, MERN stack and
          Software Project Management, I am equipped with a strong foundation in
          software development principles and project management. In addition to
          my current skill sets, I am currently expanding my knowledge and skill
          sets in Java and C++. I am also exploring low-code development
          platforms like Mendix to further my understanding of innovative
          solutions in the software development landscape.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
