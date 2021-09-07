import BinanceSmartChain from "../../components/Svg/Icons/BinanceSmartChain";
import Ethereum from "../../components/Svg/Icons/Ethereum";
import Polygon from "../../components/Svg/Icons/Polygon";

import { NetworkConfig, NetworkNames } from "./types";

const networks: NetworkConfig[] = [
  {
    name: NetworkNames.BSC,
    icon: BinanceSmartChain,
    priority: 1,
    chainId: "",
    rpcUrl: "",
  },
  {
    name: NetworkNames.Ethereum,
    icon: Ethereum,
    priority: 1,
    chainId: "",
    rpcUrl: "",
  },
  {
    name: NetworkNames.Polygon,
    icon: Polygon,
    priority: 1,
    chainId: "",
    rpcUrl: "",
  },
];

export default networks;
export const networkLocalStorageKey = "network";