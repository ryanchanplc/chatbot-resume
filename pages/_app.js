import Router from 'next/router'
import withGA from 'next-ga'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withGA(process.env.GATrackID, Router)(MyApp)
