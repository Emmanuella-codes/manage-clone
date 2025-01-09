import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Content = () => {
  // const location = useLocation();
  return (
    <Flex
      // pt={location.pathname === "/home" ? "8rem" : "5rem"}
      pb={"8rem"}
      w={"100%"}
    >
      <Outlet />
    </Flex>
  );
};

export default Content;
