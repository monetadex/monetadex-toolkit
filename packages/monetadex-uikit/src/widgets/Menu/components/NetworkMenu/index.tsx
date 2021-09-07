import React from "react";
import styled from 'styled-components';
import Button from "../../../../components/Button/Button";
import Text from "../../../../components/Text/Text";
import { networkLocalStorageKey, useNetworkModal } from '../../../NetworkModal';
import config from "../../../NetworkModal/config";
import { NetworkConfig } from "../../../NetworkModal/types";

const NetworkButton = styled(Button).attrs({ width: "100%", variant: "text", py: "5px" })`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
  border: 1px solid red;
  gap: 15px
`;

/**
 * Checks local storage if we have saved the last network the user connected with
 * If we find something we put it at the selected button
 *
 * @returns sorted network config
 */
 const getPreferredConfig = (networkConfig: NetworkConfig[]) => {
  const preferredNetworkName = localStorage.getItem(networkLocalStorageKey);
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
  const { name, icon: Icon } = getPreferredConfig(config);

  const { onPresentPickNetworkModal } = useNetworkModal()

  return (
    <NetworkButton
      onClick={() => {
        localStorage.setItem(networkLocalStorageKey, name);
        onPresentPickNetworkModal();
      }}
      variant="tertiary"
    >
      <Icon width="20px" />
      <Text fontSize="12px">{name}</Text>
    </NetworkButton>
  )
};

export default NetworkMenu;
