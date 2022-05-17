import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import React, { createContext, useContext, useState } from "react";

export type WalletNames = 'meta_mask' | 'wallet_connect'

export interface Wallet {
    address?: string
    chainId?: number
    network?: string
}

export type WalletConnector = () => Promise<
    { data?: import("wagmi-core").ConnectorData<any>, error?: Error }
>;

export type WalletConnectors = { [key: string]: WalletConnector }

export type WalletDisconnect = () => Promise<
    void
    | { data?: import("wagmi").ConnectorData<any> | undefined, error?: Error; }
>

export interface WalletInfo {
    connectedWallet: Wallet,
    walletDisconnect: WalletDisconnect
    walletConnectors: { [key: string]: WalletConnector }
};

export interface State {
    wallet_info?: WalletInfo
    set_wallet_info: Function
}

const web3WalletContext = createContext<State | null>(null);

const { Provider } = web3WalletContext

interface Props {
    children?: React.ReactNode
}
export const Web3WalletProvider = ({ children }: Props) => {

    const [wallet_info, set_wallet_info] = useState(undefined)
    return (
        <ThirdwebProvider desiredChainId={ChainId.Ropsten}>
            <Provider value={{ wallet_info, set_wallet_info }}>
                {children}
            </Provider>
        </ThirdwebProvider>
    )
}

export const useWeb3Wallet = () => useContext(web3WalletContext)

// export default Provider;