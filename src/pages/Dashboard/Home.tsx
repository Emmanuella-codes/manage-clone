import { Flex, Image, Text, Box, useMediaQuery } from "@chakra-ui/react";
import Card from "../../components/Card";

import PersonLogo from "/assets/images/person.webp";
// import AnyvanLogo from "/assets/images/anyvan_logo.webp";
import GrowImgLogo from "/assets/images/grow-img.webp";
import VanLogo from "/assets/images/van.webp";
// import EquifaxLogo from "/assets/images/equifax.webp";
// import OffersLogo from "/assets/images/offers.webp";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes/baseRoutes";


const Home = () => {
  const [isLessThan477] = useMediaQuery("(max-width: 477px)");
  const [isLessThan390] = useMediaQuery("(max-width: 390px)");

  const navigate = useNavigate();


  return (
    <Flex
      flexDir={"column"}
      w={"100%"}
      px={"20px"}
      pt={2}
      gap={5}
      overflowY={"auto"}
      h={"calc(100vh - 123px)"}
      bg={"#fafafa"}
    >
      <Card
        tagWidth={"115px"}
        cardHeight="227px"
        cardBg={"rgb(239, 239, 253)"}
        cardRadius={"10px"}
        tagText={"INCOME TRACKER"}
        tagBg={"rgb(113, 99, 231)"}
        tagColor={"#FFF"}
        cardTitle={
          <Text
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight={"bold"}
            w={
              isLessThan390
                ? "130px"
                : isLessThan477
                ? "257px"
                : "100%"
            }
            lineHeight={1.2}
          >
            Income
          </Text>
        }
        cardDesc={
          <Text
            color={"#9999AD"}
            fontSize={{ base: "12px", md: "14px" }}
            w={{ base: "157px", md: "207px" }}
          >
            You do not have any income for this period{" "}
            <Text 
              as={"span"}
              color={"#252A34"}
              cursor={"pointer"}
              onClick={() => navigate(Routes.incomeAndExpenses)}
            >
              Tap to add one. 
            </Text>
          </Text>
        }
        icon={
          <Box right={0} w={"135px"} mb={'-30px'} mr={"-30px"}>
            <Image
              src={PersonLogo}
              alt="person"
              h={"186px"}
              w={"auto"}
            />
          </Box>
        }
      />
      <Flex
        flexDir={"row"}
        gap={3}
        maxW={"100%"}
        overflowX={"scroll"}
        overflowY={"hidden"}
        flexShrink={0}
      >
        <Card
          cardMinW="240px"
          cardMaxW="245px"
          cardHeight="153px"
          cardBg={"rgb(53, 49, 122)"}
          cardBorder={"1px solid #e5f1ff"}
          cardRadius={"5.4px"}
          tagText={"₦0 / MONTH"}
          tagColor={"#FFF"}
          tagBg={"rgb(9, 206, 137)"}
          tagWidth={"104px"}
          cardTitle={
            <Text
              color={"#FFF"}
              fontSize={"18px"}
              fontWeight={"bold"}
            >
              Balance
            </Text>
          }
          subtitle={"Your net balance"}
          cardDesc={
            <Text color={"#FFF"} fontSize={"9px"}>
              What you have after deducting expenses from income
            </Text>
          }
          icon={
            <Box>
              <Image src={GrowImgLogo} alt="person" />
            </Box>
          }
        />
        <Card
          cardMinW="240px"
          cardMaxW="245px"
          cardHeight="153px"
          cardBg={"rgb(110, 103, 228)"}
          cardBorder={"1px solid #e5f1ff"}
          cardRadius={"5.4px"}
          tagText={"₦0 / MONTH"}
          tagBg={"rgb(9, 206, 137)"}
          tagColor={"#FFF"}
          tagWidth={"75px"}
          cardTitle={
            <Text
              color={"#FFF"}
              fontSize={"18px"}
              fontWeight={"bold"}
            >
              Expenses
            </Text>
          }
          subtitle={"You do not have any income for this period"}
          cardDesc={
            <Text
              color={"#FFF"}
              fontSize={"9px"}
              w={{ base: "115px", md: "100%" }}
            >
              
            </Text>
          }
          icon={
            <Box>
              <Image src={VanLogo} alt="person" />
            </Box>
          }
        />
      </Flex>
      {/* <Flex flexDir={"column"} gap={"20px"} w={"100%"} mb={"130px"}>
        <Card
          cardBg={"#FFF"}
          cardRadius={"4px"}
          cardBorder={"1px solid #e5f1ff"}
          tagText={"CANOPYGROW"}
          tagBg={"rgb(234, 234, 255)"}
          tagColor={"#7163E7"}
          tagWidth={"120px"}
          cardTitle={
            <Text
              color={"#252A34"}
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Grow your credit score
            </Text>
          }
          cardDesc={
            <Text maxW={"295px"} color={"#9999AD"} fontSize={"14px"}>
              Clever tools to report more of your activity to Equifax
              and Experian to help your credit score flourish.{" "}
              <span style={{ color: "#252A34" }}>Tell me more</span>
            </Text>
          }
          icon={
            <Box maxW={"100px"} mt={"-8px"}>
              <Image src={EquifaxLogo} alt="credit" />
            </Box>
          }
        />
        <Card
          cardBg={"#FFF"}
          cardRadius={"4px"}
          tagText={"OFFERS"}
          tagBg={"rgb(234, 234, 255)"}
          tagColor={"#7163E7"}
          tagWidth={"100px"}
          cardBorder={"1px solid #e5f1ff"}
          cardTitle={
            <Text
              color={"#252A34"}
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Exclusive offers to help your move
            </Text>
          }
          cardDesc={
            <Text maxW={"295px"} color={"#9999AD"} fontSize={"14px"}>
              From a concierge service that handles it all, to deposit
              replacement and more. We have it all at the best price.
              <span style={{ color: "#252A34" }}>Tap to see.</span>
            </Text>
          }
          icon={
            <Box maxW={"100px"} mt={"-8px"}>
              <Image src={OffersLogo} alt="offers" />
            </Box>
          }
        />
      </Flex> */}
    </Flex>
  );
};

export default Home;
