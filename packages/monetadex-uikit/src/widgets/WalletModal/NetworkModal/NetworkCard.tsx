import React from "react";
import styled from "styled-components";
import { NetworkConfig } from "./types";
import { networkLocalStorageKey, networkNameLocalStorageKey } from "./config";
import Box from "../../../components/Box/Box";
import { InputProps } from "../../../components/Input";

interface Props {
  selectedNetworkName: String;
  networkConfig: NetworkConfig;
  pickNetwork: (networkConfig: NetworkConfig) => void;
}

export const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const InputWrapper = styled.input<InputProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:active + label{
    opacity: 0.9;
  }

  &:checked + label{
    -webkit-filter: none;
    -moz-filter: none;
    filter: none;
  }
`;

export const LabelWrapper = styled.label`
  -webkit-transition: all 100ms ease-in;
  -moz-transition: all 100ms ease-in;
  transition: all 100ms ease-in;
  -webkit-filter: brightness(1.8) grayscale(1) opacity(0.7);
  -moz-filter: brightness(1.8) grayscale(1) opacity(0.7);
  filter: brightness(1.8) grayscale(1) opacity(0.7);

  &:hover {
      -webkit-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
      -moz-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
      filter: brightness(1.2) grayscale(0.5) opacity(0.9);
  }
`;

const NetworkCard: React.FC<Props> = ({ selectedNetworkName, networkConfig, pickNetwork }) => {
  const { name, icon: Icon } = networkConfig;

  const handleNetworkSelection = () => {
    pickNetwork(networkConfig);
    localStorage.setItem(networkLocalStorageKey, JSON.stringify(networkConfig));
    localStorage.setItem(networkNameLocalStorageKey, networkConfig.name);
  }

  return (
    <Wrapper py="24px"
      onClick={() => handleNetworkSelection()}>
      <InputWrapper
        name={name}
        checked={name === selectedNetworkName}
        onChange={() => handleNetworkSelection()}
        type="radio"
      />
      <LabelWrapper>
        <Icon />
      </LabelWrapper>
    </Wrapper>
  );
};

export default NetworkCard;
