import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import MoreHorizontal from "../../components/Svg/Icons/MoreHorizontal";
import { ButtonProps } from "../../components/Button";
import { networkLocalStorageKey } from "./config";
import { NetworkConfig } from "./types";

interface Props {
  networkConfig: NetworkConfig;
  onDismiss: () => void;
}

const NetworkButton = styled(Button).attrs({ width: "100%", variant: "text", py: "5px" })`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  gap: 15px
`;

export const MoreNetworkCard: React.FC<ButtonProps> = (props) => {
  return (
    <NetworkButton variant="tertiary" {...props}>
      <MoreHorizontal width="30px" height="30px" mb="8px" color="textSubtle" />
      <Text fontSize="14px">More</Text>
    </NetworkButton>
  );
};

const WalletCard: React.FC<Props> = ({ networkConfig, onDismiss }) => {
  const { name, icon: Icon } = networkConfig;

  return (
    <NetworkButton
      variant="tertiary"
      onClick={() => {
        localStorage.setItem(networkLocalStorageKey, networkConfig.name);
        onDismiss();
      }}
      id={`network-connect-${name.toLocaleLowerCase()}`}
    >
      <Icon width="40px" mb="8px" />
      <Text fontSize="14px">{name}</Text>
    </NetworkButton>
  );
};

export default WalletCard;
