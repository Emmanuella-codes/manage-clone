import { Flex, Box, Text, IconButton, Divider, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
  title: string;
  subtitle: string;
  btnText: string;
  btnMaxW: string;
  footerContent: React.ReactNode;
}

const ToolsCard: FC<IProps> = ({
  title,
  subtitle,
  btnText,
  btnMaxW,
  footerContent,
}) => {
  return (
    <Box
      bgColor={"#FFF"}
      w={"100%"}
      px={4}
      py={3}
      border={"1px solid #d8d8e266"}
      borderRadius={"5px"}
    >
      <Flex flexDir={"row"} w={"100%"} justifyContent={"space-between"} gap={4}>
        <Flex flexDir={"column"}>
          <Text fontSize={"18px"} fontWeight={700} color={"#252A34"}>
            {title}
          </Text>
          <Text color={"rgba(37, 42, 52, 0.4)"} fontSize={"14px"}>
            {subtitle}
          </Text>
        </Flex>
        <Flex flexDir={"row"} alignItems={"center"}>
          <Box
            bgColor={"rgb(9, 206, 137)"}
            borderRadius={"4px"}
            justifyContent={"center"}
            display={"flex"}
            alignItems={"center"}
            height={"30px"}
            w={btnMaxW}
          >
            <Text fontSize={"14px"} color={"#fff"} fontWeight={500}>
              {btnText}
            </Text>
          </Box>
          <Box w={"25px"}>
            <IconButton
              bgColor={"transparent"}
              aria-label=""
              icon={<IoIosArrowForward />}
              color={"rgba(37, 42, 52, 0.4)"}
            />
          </Box>
        </Flex>
      </Flex>
      <Spacer h={"10px"} />
      <Divider />
      {footerContent}
    </Box>
  );
};

export default ToolsCard;
