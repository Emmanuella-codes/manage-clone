import { FC, useState } from "react";
import { Box, Flex, Stack, Text, Icon } from "@chakra-ui/react";
import SubSection from "../../SubSection";
import { MdArrowBack, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../routes/baseRoutes";

interface IProps {
  // isOpen: boolean;
  // onClose: () => void;
}

const SubscriptionSettings: FC<IProps> = () => {
  const [height, setHeight] = useState("260px");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    // console.log(scrollTop);
    if (scrollTop > 0) {
      setIsScrolled(true);
      setHeight("76px");
    } else {
      setIsScrolled(false);
      setHeight("260px");
    }
  };
  return (
    <Flex
      flexDir={"column"}
      w={"100%"}
      h={"100%"}
      justifyContent={"space-between"}
    >
      <Flex
        flexDir={"row"}
        // alignItems={"center"}
        justifyContent={"space-between"}
        bgColor={"rgb(54, 46, 124)"}
        h={height}
        transition="height 0.3s ease 0.05s"
        /* pos={"fixed"}
          zIndex={20} */
      >
        <Icon
          as={MdArrowBack}
          fontSize={"25px"}
          color={"white"}
          mx={"15px"}
          my={"25px"}
          onClick={() => navigate(-1)}
          cursor={"pointer"}
        />
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            borderRadius={"50%"}
            boxSize={isScrolled ? "40.6px" : "116px"}
            bgColor={"#fff"}
            alignItems={"center"}
            justifyContent={"center"}
            // transform={isScrolled ? "scale(0.35)" : ""}
            transition="all 0.3s ease"
          >
            <Text
              color={"#7163e7"}
              fontSize={"36px"}
              transform={isScrolled ? "scale(0.5)" : ""}
            >
              GS
            </Text>
          </Flex>
          <Text
            color={"#FFF"}
            fontSize={"18px"}
            fontWeight={500}
            display={isScrolled ? "none" : "block"}
          >
            Gojo Satoru
          </Text>
        </Flex>
        <Icon
          as={MdClose}
          fontSize={"27px"}
          color={"white"}
          mx={"15px"}
          my={"25px"}
          onClick={() => navigate(Routes.home)}
          cursor={"pointer"}
        />
      </Flex>
      <Flex
        flexDir={"column"}
        // justifyContent={"space-between"}
        overflowY={"scroll"}
        h={`calc(100vh - ${height})`}
        onScroll={handleScroll}
      >
        <Flex flexDir={"column"} mb={"10rem"}>
          <Box px={4}>
            <Box borderBottom={"1px solid #C5CDDE"} py={5}>
              <Text>Subscriptions</Text>
            </Box>
            <Stack flexDir={"column"}>
              <SubSection
                title="Canopy Standard"
                topText="Plan type"
                hideCaret
              />
              <SubSection
                title="06 / 04 / 2024"
                topText="Start date"
                hideCaret
              />
              <SubSection
                title="None"
                topText="Renewal date"
                hideCaret
              />
              <SubSection
                title="None"
                topText="Payment method"
                hideCaret
              />
            </Stack>
          </Box>
        </Flex>
        <Box w={"100%"} mb={"2rem"}>
          <Box
            w={"95%"}
            borderRadius={"40px"}
            bgColor={"rgb(113, 99, 231)"}
            py={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <Text color={"#FFF"}>Upgrade</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SubscriptionSettings;
