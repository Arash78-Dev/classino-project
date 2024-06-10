import { Box, VStack } from "@chakra-ui/react";
import { FC, lazy } from "react";
import Header from "./Header";

const MainSection = lazy(() => import("./MainSection"));
const Footer = lazy(() => import("./Footer"));

const MainPage: FC = () => {
  return (
    <Box w="100vw" bg="#070F1C" overflow="hidden">
      <VStack
        as="main"
        w="full"
        h="full"
        spacing={0}
        overflow="auto"
        overflowX="hidden"
      >
        <Header />

        <MainSection />

        <Footer />
      </VStack>
    </Box>
  );
};

export default MainPage;
