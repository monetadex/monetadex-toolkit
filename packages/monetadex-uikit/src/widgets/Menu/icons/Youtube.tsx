import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <image
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASAgMAAAA8gvYNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAAB7b6oAAADbMg0/AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAoSURBVAjXY2AMBQIHBlEQFcIQCga4KFcI5QClWFEoFCW4TYFaBLEWADoiIXW+OgFPAAAAAElFTkSuQmCC"
        y={3}
        width={24}
        height={18}
      />
    </Svg>
  );
};

export default Icon;
