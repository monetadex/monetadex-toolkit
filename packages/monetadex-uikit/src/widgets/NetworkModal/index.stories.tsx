import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useNetworkModal from "./useNetworkModal";

export default {
  title: "Widgets/NetworkModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const { onPresentPickNetworkModal } = useNetworkModal();
  
  return (
    <Flex>
      <Button onClick={onPresentPickNetworkModal}>Pick Network</Button>
    </Flex>
  );
};
