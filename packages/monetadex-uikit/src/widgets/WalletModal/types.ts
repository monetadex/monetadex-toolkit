import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
import { NetworkConfig } from "./NetworkModal/types";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  Ledger = "ledger",
  Trezor = "trezor",
}

export type Login = (connectorId: ConnectorNames, networkConfig: NetworkConfig) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
  priority: number;
}
