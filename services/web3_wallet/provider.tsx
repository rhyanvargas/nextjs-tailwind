import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import React, { createContext } from "react";


const web3WalletContext = createContext(null);

const { Provider } = web3WalletContext

interface Props {
    children?: React.ReactNode
}
export const Web3WalletProvider = ({ children }: Props) => {
    return (
        <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
            <Provider value={null}>
                {children}
            </Provider>
        </ThirdwebProvider>
    )
}