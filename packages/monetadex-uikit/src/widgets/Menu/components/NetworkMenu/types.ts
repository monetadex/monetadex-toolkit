import { FlexProps } from "styled-system";
import { NetworkConfig } from "../../../NetworkModal";

export interface NetworkMenuProps extends FlexProps {
  pickNetwork: (networkConfig: NetworkConfig) => void
}
