import { 
  Box, Divider, Flex, 
  // Icon, 
  IconButton, Text } from "@chakra-ui/react";
import { FC } from "react";
// import { FaCirclePlay } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface IProps {
  text?: string;
  isOpen: boolean;
  hasItems: boolean;
  onClick?: () => void;
}

const IncomeAndExpenseTab: FC<IProps> = ({ text, isOpen, hasItems, onClick }) => {
  return (
    <Box>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={3}
      >
        <Box>
          <Text fontSize={{ md: "18px" }} fontWeight={"bold"} color={"#252A34"}>
            {text}
          </Text>
        </Box>
        <Flex display={hasItems ? "flex" : "none"} flexDir={"row"} alignItems={"center"}>
          <Box w={"30px"}>
            <IconButton
              bgColor={"transparent"}
              aria-label=""
              icon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              onClick={onClick}
            />
          </Box>
        </Flex>
      </Flex>
      <Divider />
    </Box>
  );
};

export default IncomeAndExpenseTab;
