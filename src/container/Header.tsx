import BaseButton from "../components/BaseButton";
import Classino from "../components/Classino";
import scrollingToWhere from "../utils/scrollingToWhere";
import {
  Box,
  Center,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC } from "react";
import backgroundblue from "/assets/images/backgroundblue.webp";
import takhtGaz from "/assets/images/takhtGaz (1).webp";
import videoWebpicture from "/assets/video/Header_Desktop.gif";
import videoMobilepicture from "/assets/video/Header_Phone.gif";

const Header: FC = () => {
  const videoSrc = useBreakpointValue({
    base: videoMobilepicture,
    lg: videoWebpicture,
  });

  return (
    <Box
      position="relative"
      height={{
        base: 400,
        sm: 500,
        md: 600,
        lg: 700,
        xl: 800,
      }}
      w="full"
    >
      <Image
        src={videoSrc ?? ""}
        alt="videopicture"
        w="100%"
        h="100%"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "100%",
          objectFit: "cover",
        }}
        fetchPriority="high"
      />

      <Image
        src={backgroundblue}
        alt="backgroundblue"
        w="100%"
        h="100%"
        fetchPriority="high"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Classino
        bg="#FFAF20"
        color="black"
        h={{ base: 8, sm: 10, lg: 12 }}
        w="full"
        position="absolute"
        bottom={-7}
        transform={{
          base: "rotate(-3.2deg)",
          sm: "rotate(-3deg)",
          md: "rotate(-2.5deg)",
          lg: "rotate(-2deg)",
          xl: "rotate(-1.3deg)",
        }}
      />
      <Classino
        bg="#0369F4"
        color="white"
        h={{ base: 8, sm: 10, lg: 12 }}
        w="full"
        position="absolute"
        bottom={-7}
        transform={{
          base: "rotate(3.2deg)",
          sm: "rotate(3deg)",
          md: "rotate(2.5deg)",
          lg: "rotate(2deg)",
          xl: "rotate(1.3deg)",
        }}
      />

      <Center h="full">
        <VStack
          spacing={8}
          w={{ base: 240, sm: 360, md: 480, lg: 600, xl: 740 }}
        >
          <Image
            src={takhtGaz}
            alt="takhtGaz"
            width={500}
            style={{ aspectRatio: 5 / 2, zIndex: 100 }}
            fetchPriority="high"
          />

          <Text
            fontSize={{
              base: "16px",
              sm: "20px",
              md: "24px",
              lg: "28px",
              xl: "32px",
            }}
            color="white"
            zIndex="1"
            textAlign="center"
          >
            قبل از اینکه جادۀ کنکور ۱۴۰۴ به دره برسه، با دورۀ آنلا‌ین جامع
            کلاسینو، مسیر درست رو انتخاب کن. آماده‌ای؟
          </Text>

          <BaseButton onClick={() => scrollingToWhere()}>
            شروع دیوونه‌بازی
          </BaseButton>
        </VStack>
      </Center>
    </Box>
  );
};

export default Header;
