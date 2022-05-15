import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider, ChainId, useMetamask, useWalletConnect } from "@thirdweb-dev/react";
import Web3WalletContext, { InitialState } from '../context/Web3WalletContext';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Web3WalletContext.Provider value={InitialState}>
        <Component {...pageProps} />
      </Web3WalletContext.Provider>
    </ThirdwebProvider>
  )
}

export default MyApp
