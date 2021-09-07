import React from "react";
import { useModal } from "../Modal";
import PickNetworkModal from "./PickNetworkModal";

interface ReturnType {
  onPresentPickNetworkModal: () => void;
}

const useNetworkModal = (): ReturnType => {
  const [onPresentPickNetworkModal] = useModal(<PickNetworkModal />);
  return { onPresentPickNetworkModal };
};

export default useNetworkModal;