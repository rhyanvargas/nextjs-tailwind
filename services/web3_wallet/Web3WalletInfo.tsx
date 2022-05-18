import { useAddress, useChainId, useNetwork } from "@thirdweb-dev/react"

export const useWeb3WalletInfo = () => {
    return {
        address: useAddress(),
        chainId: useChainId(),
        network: useNetwork()?.[0].data.chain?.name
    }
}
