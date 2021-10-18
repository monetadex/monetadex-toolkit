import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 24" {...props}>
      <image
        width={32}
        height={24}
        href="data:image/png;base64,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"
      />
    </Svg>
  );
};

export default Icon;