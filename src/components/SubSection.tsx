import { Flex, Box, Icon, Divider, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
  topText?: string;
  topTextColor?: string;
  title: string;
  titleColor?: string;
  onClick?: () => void;
  btnText?: string;
  btnColor?: string;
  hideCaret?: boolean;
}

const SubSection: FC<IProps> = ({
  hideCaret = false,
  title,
  titleColor,
  topText,
  topTextColor,
  onClick,
  btnText,
  btnColor,
}) => {
  return (
    <Box>
      <Flex
        w={"100%"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={'15px'}
        cursor={"pointer"}
        onClick={onClick}
        minH={'62px'}
      >
        <Box>
          {topText && (
            <Text
              fontSize={"13px"}
              fontWeight={500}
              color={topTextColor || "#9999AD"}
            >
              {topText}
            </Text>
          )}
          <Text
            fontSize={"18px"}
            fontWeight={500}
            color={titleColor || "#343A5FBA"}
          >
            {title}
          </Text>
        </Box>
        <Flex flexDir={"row"} alignItems={"center"} gap={2}>
          {btnText && (
            <Text
              color={btnColor || "#343A5F7A"}
              fontWeight={500}
              fontSize={"14px"}
            >
              {btnText}
            </Text>
          )}
          {!hideCaret && (
            <Icon
              as={IoIosArrowForward}
              color={btnColor || "#343A5F7A"}
            />
          )}
        </Flex>
      </Flex>
      <Divider />
    </Box>
  );
};

export default SubSection;
