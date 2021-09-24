import BinanceSmartChain from "../../components/Svg/Icons/BinanceSmartChain";
import Ethereum from "../../components/Svg/Icons/Ethereum";
import Polygon from "../../components/Svg/Icons/Polygon";

import { NetworkConfig, NetworkNames } from "./types";

const networks: NetworkConfig[] = [
  {
    name: NetworkNames.BSC,
    icon: BinanceSmartChain,
    priority: 1,
    chainId: "56",
    rpcUrl: "https://bsc-dataseed.binance.org/",
    blockExplorer: "https://bscscan.com/",
  },
  {
    name: NetworkNames.Ethereum,
    icon: Ethereum,
    priority: 1,
    chainId: "1",
    rpcUrl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    blockExplorer: "https://etherscan.io/",
  },
  {
    name: NetworkNames.Polygon,
    icon: Polygon,
    priority: 1,
    chainId: "137",
    rpcUrl: "https://rpc-mainnet.matic.network",
    blockExplorer: "https://polygonscan.com/",
  },
];

export default networks;
export const networkNameLocalStorageKey = "networkName";
export const networkLocalStorageKey = "network";