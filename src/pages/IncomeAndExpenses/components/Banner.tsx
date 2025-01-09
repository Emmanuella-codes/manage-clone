import { useMediaQuery, Flex, Box, Text } from "@chakra-ui/react";
import PushIncomeLogo from "/assets/images/push-income.webp";

const Banner = () => {
  const [isLessThan390] = useMediaQuery("(max-width: 390px)");

  return (
    <Flex
      flexDir={"row"}
      bgColor={"rgb(54, 46, 124)"}
      bgImage={PushIncomeLogo}
      bgRepeat={"no-repeat"}
      bgPos={"bottom"}
      pos={"relative"}
      width={{ base: "100%", md: "94%" }}
      maxW={"564px"}
      height={"226px"}
      borderRadius={"15px"}
      mx={"auto"}
      mb={3}
      mt={'10px'}
    >
      <Flex flexDir={"column"} color={"#FFF"} pl={7} pt={7}>
        <Text fontSize={"18px"} color={"rgba(255, 255, 255, 0.4)"}>
          Next step
        </Text>
        <Text
          fontSize={"33px"}
          fontWeight={700}
          w={isLessThan390 ? "202px" : "full"}
          lineHeight={1.2}
        >
          Verify Income
        </Text>
        <Box
          mt={3}
          bgColor={"rgb(113, 99, 231)"}
          py={3}
          w={"113px"}
          textAlign={"center"}
          borderRadius={"40px"}
        >
          <Text>Let's go</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Banner;
