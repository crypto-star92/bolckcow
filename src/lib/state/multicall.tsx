import { createMulticall, ListenerOptions } from '@uniswap/redux-multicall'
import { SupportedChainId } from '@src/constants/chains'
import { useInterfaceMulticall } from 'hooks/useContract'
import useBlockNumber from 'lib/hooks/useBlockNumber'
import { useMemo } from 'react'
import { combineReducers, createStore } from 'redux'
import { useWalletInfo } from '@cow/modules/wallet'

const multicall = createMulticall()
const reducer = combineReducers({ [multicall.reducerPath]: multicall.reducer })
export const store = createStore(reducer)

export default multicall

function getBlocksPerFetchForChainId(chainId: number | undefined): number {
  switch (chainId) {
    case SupportedChainId.ARBITRUM_ONE:
    case SupportedChainId.OPTIMISM:
      return 15
    default:
      return 1
  }
}

export function MulticallUpdater() {
  const { chainId } = useWalletInfo()
  const latestBlockNumber = useBlockNumber()
  const contract = useInterfaceMulticall()
  const listenerOptions: ListenerOptions = useMemo(
    () => ({
      blocksPerFetch: getBlocksPerFetchForChainId(chainId),
    }),
    [chainId]
  )

  return (
    <multicall.Updater
      chainId={chainId}
      latestBlockNumber={latestBlockNumber}
      contract={contract}
      listenerOptions={listenerOptions}
    />
  )
}