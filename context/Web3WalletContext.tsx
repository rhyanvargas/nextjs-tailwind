import { useAddress, useChainId, useDisconnect, useMetamask, useNetwork, useWalletConnect } from "@thirdweb-dev/react";
import { createContext } from "react";

export type WalletNames = 'meta_mask' | 'wallet_connect'

export interface Wallet {
    address?: string
    chainId?: number
    network?: string
}

type WalletConnector = () => Promise<
    { data?: import("wagmi-core").ConnectorData<any>, error?: Error }
>;

type WalletDisconnect = () => Promise<
    void
    | { data?: import("wagmi").ConnectorData<any> | undefined, error?: Error; }
>

interface State {
    connectedWallet: Wallet,
    walletDisconnect: WalletDisconnect
    walletConnectors: { [key: string]: WalletConnector }
};

export const InitialState: State = {
    connectedWallet: {
        address: useAddress(),
        chainId: useChainId(),
        network: useNetwork()?.[0].data.chain?.name

    },
    walletDisconnect: useDisconnect(),
    walletConnectors: {
        "meta_mask": useMetamask(),
        "wallet_connect": useWalletConnect()
    }
}

const Web3WalletContext = createContext<State>(InitialState);



export default Web3WalletContext;