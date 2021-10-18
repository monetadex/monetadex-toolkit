import { FC } from "react";
import { SvgProps } from "../../../components/Svg/types";

export enum NetworkNames {
  BSC = "BSC",
  Ethereum = "Ethereum",
  Polygon = "Polygon",
}

export interface NetworkConfig {
  name: NetworkNames;
  icon: FC<SvgProps>;
  priority: number;
  chainId: number;
  rpcUrl: string[];
  blockExplorer: string;
}