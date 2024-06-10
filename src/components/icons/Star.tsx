import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

const Star: FC<IconProps> = ({ ...props }) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 15 15"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.10275 13.9695L5.62138 9.53245C5.60295 9.47734 5.5729 9.42683 5.53327 9.38433C5.49364 9.34183 5.44535 9.30833 5.39166 9.2861L1.06923 7.49934C0.992667 7.46763 0.927622 7.41328 0.882793 7.34359C0.837964 7.27389 0.815489 7.19217 0.818381 7.10935C0.821273 7.02654 0.849393 6.94658 0.898974 6.88018C0.948556 6.81378 1.01723 6.76411 1.09582 6.73782L5.53236 5.25693C5.58747 5.2385 5.63798 5.20845 5.68048 5.16882C5.72298 5.12919 5.75648 5.08089 5.77871 5.0272L7.56598 0.704293C7.59783 0.627921 7.65222 0.563081 7.72188 0.518424C7.79154 0.473767 7.87317 0.451419 7.95586 0.454361C8.03855 0.457303 8.11838 0.485395 8.18469 0.53489C8.251 0.584384 8.30065 0.652926 8.32699 0.731368L9.80788 5.16791C9.82631 5.22302 9.85636 5.27353 9.89599 5.31603C9.93562 5.35852 9.98391 5.39202 10.0376 5.41426L14.3605 7.20153C14.437 7.23313 14.5021 7.28737 14.5469 7.35699C14.5918 7.4266 14.6142 7.50826 14.6114 7.59102C14.6085 7.67377 14.5803 7.75366 14.5308 7.81998C14.4812 7.88629 14.4125 7.93587 14.334 7.96205L9.8969 9.44342C9.84179 9.46186 9.79128 9.4919 9.74878 9.53154C9.70628 9.57117 9.67278 9.61946 9.65055 9.67315L7.86379 13.9956C7.83204 14.072 7.77774 14.1369 7.70814 14.1816C7.63854 14.2264 7.55694 14.2489 7.47425 14.246C7.39155 14.2432 7.31168 14.2152 7.2453 14.1658C7.17893 14.1164 7.1292 14.0479 7.10275 13.9695Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Star;