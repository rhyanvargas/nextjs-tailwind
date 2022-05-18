import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3WalletProvider } from '../services/web3_wallet/provider';
import Layout from '../components/layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3WalletProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3WalletProvider>
  )
}

export default MyApp
