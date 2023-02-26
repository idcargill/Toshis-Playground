import Head from 'next/head';
import style from '../../styles/layout.module.css';
import HomePageLayout from 'src/Sections/HomePageLayout';


const Home = () => (
  <>
    <Head>
      <title>Toshi Land</title>
      <meta content="Project starter" name="description" />
      <link href="/heart.svg" rel="icon" />
    </Head>
    <main className={style.pageContainer}>
      <HomePageLayout />
    </main>
  </>
);
export default Home;
