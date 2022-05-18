import { useDisconnect, useMetamask, useWalletConnect } from "@thirdweb-dev/react"
import { MetamaskIcon, WalletConnectIcon } from "../../utils/icons"

export const useWeb3WalletConnectors = () => {
    return {
        disconnect: useDisconnect(),
        connectors: [
            { name: "MetaMask", connection: useMetamask(), icon: <MetamaskIcon className={`mr-2 h-5 w-5`} /> },
            { name: "WalletConnect", connection: useWalletConnect(), icon: <WalletConnectIcon className={`mr-2 h-5 w-5`} /> }
        ]
    }
}