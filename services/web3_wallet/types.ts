import React from "react"

export type WalletNames = 'meta_mask' | 'wallet_connect'

export interface Wallet {
    address?: string
    chainId?: number
    network?: string
}

export interface WalletConnector {
    name: string,
    connection: () => Promise<
        { data?: import("wagmi-core").ConnectorData<any>, error?: Error }
    >,
    icon: React.ReactNode
}

export type WalletConnectors = Array<WalletConnector>

export type WalletDisconnect = () => Promise<
    void
    | { data?: import("wagmi").ConnectorData<any> | undefined, error?: Error; }
>

export interface WalletInfo {
    connectedWallet: Wallet,
    walletDisconnect: WalletDisconnect
    walletConnectors: { [key: string]: WalletConnector }
};