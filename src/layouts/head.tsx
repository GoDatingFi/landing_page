import Head from 'next/head';

const HeadApp = () => (
  <Head>
    <title>SocialFi - Web3 - GoDatingFi - Blockchain - A decentralized Global Platform for Dating.</title>
    <meta
      name="description"
      content="We are a team of SocialFi blockchain in ASIA, We bring experience dating with blockchain apps. GoDatingFi converges all the functions of blockchain such as Web3, NFT, SocialFi"
    />
    <meta name="keywords" content="SocialFi , Web3, GoDatingFi, Polygon, Dating App" />
    <meta name="author" content="Socialfi for dating app" />
    <meta name="copyright" content="Socialfi for dating app" />

    <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} key="ogurl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="SocialFi - Web - Dating app using blockchain technology" key="ogtitle" />
    <meta
      property="og:description"
      content="SocialFi stands for Social Finance, it is a combination of social networking and finance on Blockchain. GoDatingFi also is a future of SocialFi"
    />
    <meta property="og:image" content={process.env.NEXT_PUBLIC_DOMAIN + '/logo.png'} key="ogimage" />

    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
    <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon-32x32.ico" />
    <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon-16x16.ico" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#202763" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap" rel="stylesheet" />
  </Head>
);

export default HeadApp;
