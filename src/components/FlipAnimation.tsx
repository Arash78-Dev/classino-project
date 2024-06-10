import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, useState } from "react";

interface Props {
  frontScr: string;
  backScr: string;
  alt: string;
}

const FlipAnimation: FC<Props> = ({ alt, backScr, frontScr }) => {
  const [isHover, setIsHover] = useState(false);

  const pathPicture = useBreakpointValue({
    base: 200,
    "2xl": 300,
  });

  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      zIndex={100}
      position="relative"
    >
      <Box
        as={motion.div}
        animate={{ rotateY: isHover ? 180 : 0.1 }}
        style={{ backfaceVisibility: "hidden" }}
        position="absolute"
      >
        <Image src={frontScr} alt={alt} width={pathPicture} />
      </Box>

      <Box
        as={motion.div}
        animate={{ rotateY: isHover ? 0.1 : 180 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <Image src={backScr} alt={alt} width={pathPicture} />
      </Box>
    </Box>
  );
};

export default FlipAnimation;
