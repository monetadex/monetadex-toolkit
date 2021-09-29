import { FC } from "react";
import { FlexProps } from "styled-system";
import { SvgProps } from "../../components/Svg/types";

export enum NetworkNames {
  BSC = "BSC",
  Ethereum = "Ethereum",
  Polygon = "Polygon",
}

export interface NetworkConfig {
  name: NetworkNames;
  icon: FC<SvgProps>;
  priority: number;
  chainId: string;
  rpcUrl: string[];
  blockExplorer: string;
}

export interface NetworkCardProps extends FlexProps {
  networkConfig: NetworkConfig;
  pickNetwork: (networkConfig: NetworkConfig) => void;
  onDismiss: () => void;
}
