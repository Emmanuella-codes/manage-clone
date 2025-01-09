import { FC } from "react";
import DrawerCmp from "../../DrawerCmp";
import { Box, Flex, Text } from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogOut: FC<IProps> = ({ isOpen, onClose }) => {
  return (
    <DrawerCmp
      isOpen={isOpen}
      onClose={onClose}
      drawerBody={
        <Flex w={"100%"} flexDir={"column"} alignItems={"center"}>
          <Flex
            w={"100%"}
            borderRadius={"40px"}
            bgColor={"rgb(113, 99, 231)"}
            h={"48px"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            flexWrap={'wrap'}
            mb={"20px"}
            cursor={"pointer"}
          >
            <Text color={"#FFF"} fontSize={"18px"}>
              Log out
            </Text>
          </Flex>
          <Box onClick={onClose} cursor={"pointer"}>
            <Text textDecor={"underline"} color={"#7163E7"}>
              Cancel
            </Text>
          </Box>
        </Flex>
      }
    />
  );
};

export default LogOut;
