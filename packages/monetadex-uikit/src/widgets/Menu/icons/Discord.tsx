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
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAMAAAB2Mu6sAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACBFBMVEUAAADOyt6xq86Yj72elsGdlcGXjryzrM3Nyd6yrM2LgbWUi7urpMmnoMeel8KTibqYj72VjLuhmcOmn8epociRh7mzrM7V0eSbkr9+c62elcGYj72DeLCWjbyelcF/dK6akb7U0OS3sNGEerF8cKt8cKuFerG2sNGRh7iNg7fBu9d5bam/utejm8TSzuKLgLWAda6Ada6JfrTRzeHCvth9cax8cKu1r9C8t9S0rc97b6p6bqqzrc+9uNSyq85+cqx7bqrBvNexqs2akb6PhriNg7aakb+vqMyfl8KelcGSibmQhriclMCelsKPhriBda/Ev9rAu9eAdK1/c63AutfGwduDd7CQh7iHfbOAda6KgLV+cq2Bda5/c62AdK5+c61+cqyAda5+c62HfLJ8cKuXjbyVjLx7b6t7cKuVjLuYjr18cauGfLLKxd6Ng7Z5baqYj72zrM2mnsaJf7SAda59cax7b6p6b6p8cayBdq6LgbWmnsaZkL6LgbbJxN3SzuKnn8aCd697cKumnsaxrc6zrs+Wj7+TjL20rtC4s9Knn8eDeLCpocjSzuPEwNmqo8mWjryAda6yq86yrM6Vjbyxq83JxNx4bKl2aad3aqh2aqh1aad5bKl6bqp5bal2aqd5bap0aKZ6bap1aaZ1aKd3aqd4a6h3a6h1aKZ0Z6ZyZaUAAACsNlgDAAAAl3RSTlMAA0qJenmNTQVcx69zZneSnpN3ZnSuXgKo8J6j4KSa7qoDVPD5+u5Vw8w3/jqNA9Hr6tYGJPn2UhBf+vthD1H0/S5Xp7W+oF+Nmaizk42z6Ss28PI4Keazze6+8uzk+vf4+uXU+Ley+Pi0tffVI8n8ql16w+X2/Pz35sR9qMwnCXrh+4wMGyUlGw2H4n0KDVGOtVxaj1MONvBxeAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAFbSURBVBjTXZFVVwMxEIUHh2LF3V2Ku7u7U9zd3d212G5XskspLPArSZbCOXBfbua7mWROAkBkZGxiKi/AzNzCEn5lpbC2sbWzVyodHJ2cXRSuBuzm7uHp5U3RWppmWMrbx9fPP0AOAtmgYJrjDUJCSCgbJgfhNOL/iKMjSEtklMj/k0hF40D1TNY6Q9e3PasAYmIZ0o3iOMwQFY/IbdqEREhKJiAlNS09A6HMrOycXFLn5UOBgHewhfjMIoYpxlbCElAKZS/Y9eWYVAhCJbYqOaiGGi12qrYO6hsorrEJmlsoDF5boe2NF0X+rV3dgQGVq+6USC21QRcSu3sEnpPkQZHE8Uxvnw71w8C7ODg0PKKXEJmGk/SjY+MT/PskTE1/SDOzc/MLi0vLK6tr6xtzmzPaj61tgJ3dPeZz/wAOj45PTs/gPOOTvri8kl/x+uZWc/fzN/eah8cn7F8hianhUdqE9QAAAABJRU5ErkJggg=="
        y={3}
        width={24}
        height={18}
      />
    </Svg>
  );
};

export default Icon;