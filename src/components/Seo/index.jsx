import Head from 'next/head'


const Seo = (props) => {
  return (
    <Head>
      <link rel="icon" type="icon" href="/favicon.ico" />
      <meta name="viewport"
            content="width=device-width,shrink-to-fit=no,initial-scale=1,maximum-scale=1,user-scalable=0" />
      <meta name="keywords" content="design studio" />
      <meta name="theme-color" content={props.themeColor} />
      <meta name="description" content={props.description} />
      <title>{props.title}</title>
    </Head>
  )
}

Seo.defaultProps = {
  title: 'design studio',
  description: 'The best design studio',
  themeColor: '#141416'
}

export default Seo
