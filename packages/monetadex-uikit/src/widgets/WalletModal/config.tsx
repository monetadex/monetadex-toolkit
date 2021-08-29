import Metamask from "../../components/Svg/Icons/Metamask";
import WalletConnect from "../../components/Svg/Icons/WalletConnect";
import TrustWallet from "../../components/Svg/Icons/TrustWallet";
import Ledger from "../../components/Svg/Icons/Ledger";
import Trezor from "../../components/Svg/Icons/Trezor";

import { Config, ConnectorNames } from "./types";
import SafePal from "../../components/Svg/Icons/SafePal";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
    priority: 3,
  },
  {
    title: "Ledger",
    icon: Ledger,
    connectorId: ConnectorNames.Ledger,
    priority: 999,
  },
  {
    title: "Trezor",
    icon: Trezor,
    connectorId: ConnectorNames.Trezor,
    priority: 999,
  },
  {
    title: "SafePal",
    icon: SafePal,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorIdv2";
export const walletLocalStorageKey = "wallet";
