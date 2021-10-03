import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Grid from "../../components/Box/Grid";
import Box from "../../components/Box/Box";
import getThemeValue from "../../util/getThemeValue";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";
import { Button } from "../../components/Button";
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import WalletCard, { MoreWalletCard } from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import networkConfig, { networkNameLocalStorageKey } from "./NetworkModal/config";
import { Config, Login } from "./types";
import List from "../../components/Box/List";
import NetworkCard from "./NetworkModal/NetworkCard";
import { NetworkConfig } from "./NetworkModal/types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  displayCount?: number;
}

const WalletWrapper = styled(Box)`
  flex: 0.7;
`;

const NetworkWrapper = styled(Box)`
  flex: 0.3;
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

const Wrapper = styled.div`
  display: flex;
  flex: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 0px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.inputSecondary};
  }
`

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
};

/**
 * Checks local storage if we have saved the last network the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted network config
 */
const getPreferredNetworkConfig = (networkConfig: NetworkConfig[]) => {
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

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, displayCount = 3 }) => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const sortedConfig = getPreferredConfig(config);
  const displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount);

  const sortedNetworkConfig = getPreferredNetworkConfig(networkConfig);

  const [selectedNetwork, setSelectedNetwork] = useState(sortedNetworkConfig[0]);

  const pickNetwork = (nc: NetworkConfig) => {
    setSelectedNetwork(nc);
  }

  return (
    <ModalContainer minWidth="420px">
      <ModalHeader background={getThemeValue("colors.gradients.bubblegum")(theme)}>
        <ModalTitle>
          <Heading>Connect Wallet</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <ModalBody width={["420px", null, "420px"]}>
        <Wrapper>
          <NetworkWrapper maxHeight="453px" overflowY="auto">
            <List gridTemplateColumns="1fr 1fr">
              {networkConfig.map((network) => (
                <ListItem key={network.name}>
                  <NetworkCard selectedNetworkName={selectedNetwork.name} networkConfig={network} pickNetwork={pickNetwork} />
                </ListItem>
              ))}
            </List>
          </NetworkWrapper>
          <WalletWrapper py="24px" maxHeight="453px" overflowY="auto">
            <Grid gridTemplateColumns="1fr 1fr">
              {displayListConfig.map((wallet) => (
                <Box key={wallet.title}>
                  <WalletCard walletConfig={wallet} networkConfig={selectedNetwork} login={login} onDismiss={onDismiss} />
                </Box>
              ))}
              {!showMore && <MoreWalletCard onClick={() => setShowMore(true)} />}
            </Grid>
          </WalletWrapper>
        </Wrapper>
        <Box p="24px">
          <Text textAlign="center" color="textSubtle" as="p" mb="16px">
            Haven&#39;t got a crypto wallet yet?
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

export default ConnectModal;
