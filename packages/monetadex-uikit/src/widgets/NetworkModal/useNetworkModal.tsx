import React from "react";
import { NetworkConfig } from ".";
import { useModal } from "../Modal";
import PickNetworkModal from "./PickNetworkModal";

interface ReturnType {
  onPresentPickNetworkModal: () => void;
}

const useNetworkModal = (pickNetwork: (nc: NetworkConfig) => void): ReturnType => {
  const [onPresentPickNetworkModal] = useModal(<PickNetworkModal pickNetwork={pickNetwork} />);
  return { onPresentPickNetworkModal };
};

export default useNetworkModal;