import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Box from "../../components/Box/Box";
import getThemeValue from "../../util/getThemeValue";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";
import { Button } from "../../components/Button";
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import config, { networkNameLocalStorageKey } from "./config";
import { NetworkConfig } from "./types";
import List from "../../components/Box/List";
import NetworkCard from "./NetworkCard";

interface Props {
  pickNetwork: (networkConfig: NetworkConfig) => void;
  onDismiss?: () => void;
  displayCount?: number;
}

const NetworkWrapper = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

/**
 * Checks local storage if we have saved the last network the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted network config
 */
const getPreferredConfig = (networkConfig: NetworkConfig[]) => {
  const preferredNetworkName = localStorage.getItem(networkNameLocalStorageKey);
  const sortedConfig = networkConfig.sort((a: NetworkConfig, b: NetworkConfig) => a.priority - b.priority);

  if (!preferredNetworkName) {
    return sortedConfig;
  }

  const preferredNetwork = sortedConfig.find((sortedNetworkConfig) => sortedNetworkConfig.name === preferredNetworkName);

  if (!preferredNetwork) {
    return sortedConfig;
  }

  return [
    preferredNetwork,
    ...sortedConfig.filter((sortedNetworkConfig) => sortedNetworkConfig.name !== preferredNetworkName),
  ];
};

const PickNetworkModal: React.FC<Props> = ({ pickNetwork = (networkConfig: NetworkConfig) => null, onDismiss = () => null }) => {
  const theme = useTheme();
  const sortedConfig = getPreferredConfig(config);

  return (
    <ModalContainer minWidth="320px">
      <ModalHeader background={getThemeValue("colors.gradients.bubblegum")(theme)}>
        <ModalTitle>
          <Heading>Select a Network</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <ModalBody width={["320px", null, "340px"]}>
        <NetworkWrapper py="24px" maxHeight="453px" overflowY="auto">
          <List gridTemplateColumns="1fr 1fr">
            {sortedConfig.map((network) => (
              <Box key={network.name}>
                <NetworkCard networkConfig={network} onDismiss={onDismiss} pickNetwork={pickNetwork} />
              </Box>
            ))}
          </List>
        </NetworkWrapper>
        <Box p="24px">
          <Text textAlign="center" color="textSubtle" as="p" mb="16px">
            Don&#39;t know the difference?
          </Text>
          <Button
            as="a"
            href="https://monetadex.gitbook.io/monetadex/get-started/connection-guide"
            variant="subtle"
            width="100%"
            {...getExternalLinkProps()}
          >
            Learn How to Connect
          </Button>
        </Box>
      </ModalBody>
    </ModalContainer>
  );
};

export default PickNetworkModal;
