import React from "react";
import styled from 'styled-components';
import Button from "../../../../components/Button/Button";
import Text from "../../../../components/Text/Text";
import { networkNameLocalStorageKey, useNetworkModal } from '../../../NetworkModal';
import config, { networkLocalStorageKey } from "../../../NetworkModal/config";
import { NetworkConfig } from "../../../NetworkModal/types";

const NetworkButton = styled(Button).attrs({ width: "100%", variant: "text", scale: "sm", mr: "8px" })`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 32px;
  width: 100px;
  justify-content: center;
  padding-bottom: 4px;
  padding-top: 4px;
  background-color: ${({ theme }) => theme.card.background};
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  gap: 8px;
`;

/**
 * Checks local storage if we have saved the last network the user connected with
 * If we find something we put it at the selected button
 *
 * @returns sorted network config
 */
const getPreferredConfig = (networkConfig: NetworkConfig[]) => {
  const preferredNetworkName = localStorage.getItem(networkNameLocalStorageKey);
  const sortedConfig = networkConfig.sort((a: NetworkConfig, b: NetworkConfig) => a.priority - b.priority);

  if (!preferredNetworkName) {
    return sortedConfig[0];
  }

  const preferredNetwork = sortedConfig.find((sortedNetworkConfig) => sortedNetworkConfig.name === preferredNetworkName);

  if (!preferredNetwork) {
    return sortedConfig[0];
  }

  return preferredNetwork;
};

const NetworkMenu: React.FC = () => {
  const networkConfig = getPreferredConfig(config);

  const { name, icon: Icon } = networkConfig;

  const { onPresentPickNetworkModal } = useNetworkModal()

  return (
    <NetworkButton
      onClick={() => {
        localStorage.setItem(networkLocalStorageKey, JSON.stringify(networkConfig));
        localStorage.setItem(networkNameLocalStorageKey, name);
        onPresentPickNetworkModal();
      }}
      variant="tertiary"
    >
      <Icon width="20px" height="20px" />
      <Text fontSize="12px">{name}</Text>
    </NetworkButton>
  )
};

export default NetworkMenu;
