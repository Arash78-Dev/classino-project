import ClassinoStar from "./ClassinoStar";
import DivooneBazzi from "./DivooneBazzi";
import RootStory from "./RootStory";
import WhichPath from "./WhichPath";
import { Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FC } from "react";
import bgMobile from "/assets/images/BG-_3_.webp";
import bg from "/assets/images/bg-main-section.webp";

const MainSection: FC = () => {
  const bgSrc = useBreakpointValue({ base: bgMobile, lg: bg });

  return (
    <VStack w="full" position="relative" overflow="hidden">
      <Image
        src={bgSrc ?? ""}
        alt="bg"
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

      <RootStory />

      <DivooneBazzi />

      <WhichPath />

      <ClassinoStar />
    </VStack>
  );
};

export default MainSection;
