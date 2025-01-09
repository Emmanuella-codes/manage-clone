import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Content from "./content";
import { useLocation } from "react-router-dom";
import { FC } from "react";

interface IProps {
  children?: React.ReactNode;
}

const AppLayout: FC<IProps> = ({ children }) => {
  const [isLargerThan627] = useMediaQuery("(min-width: 627px)");
  const [isLargerThan625] = useMediaQuery("(min-width: 625px)");

  const location = useLocation();

  return (
    <Flex
      flexDirection={"column"}
      w={"100%"}
      h={"100vh"}
      alignItems={"center"}
      bgColor={isLargerThan625 ? "#fafafa" : ""}
      overflow={ "hidden" }
    >
      <Box
        w={"100%"}
        maxW={isLargerThan625 ? "625px" : { base: "100%" }}
        bgColor={isLargerThan625 ? "#FFF" : "rgb(250, 250, 250)"}
        px={isLargerThan625 ? '10px' : ''}
      >
        <Box
          maxW={"100%"}
          borderRight={isLargerThan627 ? "1px solid #d8d8e266" : "none"}
          borderLeft={isLargerThan627 ? "1px solid #d8d8e266" : "none"}
          bgColor={"#fff"}
        >
          {location.pathname.includes("/home") && <Navbar />}
          <Content />
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default AppLayout;
