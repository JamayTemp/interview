import { AppProps } from 'next/app'
import Root from '@/components/root'

const MyApp = ({ Component, pageProps }: TProps) => {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  )
}

type TProps = Pick<AppProps, 'Component' | 'pageProps'>

export default MyApp
