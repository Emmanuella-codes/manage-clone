import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdClose, MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";

import HelpLogo from "/assets/images/help.webp";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../routes/baseRoutes";

interface IProps {
  // isOpen: boolean;
  // onClose: () => void;
}

const Help: FC<IProps> = () => {
  const navigate = useNavigate()

  const openingHours = [
    { day: "Monday", hour: "9am - 6pm" },
    { day: "Tuesday", hour: "9am - 6pm" },
    { day: "Wednesday", hour: "9am - 6pm" },
    { day: "Thursday", hour: "9:30am - 6pm" },
    { day: "Friday", hour: "9am - 6pm" },
    { day: "Saturday", hour: "9am - 12pm(midday)" },
    { day: "Sunday", hour: "Closed" },
    { day: "Bank holidays", hour: "Closed" },
  ];

  return (
    <Flex flexDir={"column"} w={"100%"} bg={'#fafafa'}>
      <Flex
        bgImage={HelpLogo}
        w={"100%"}
        h={"193px"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        justifyContent={"flex-end"}
      >
        <Icon
          as={MdClose}
          fontSize={"33px"}
          color={"#6b7c93"}
          m={"15px"}
          onClick={() => navigate(Routes.account)}
          cursor={"pointer"}
        />
      </Flex>
      <Box h={"calc(100vh - 193px)"} overflowY={"scroll"}>
        <Box
          my={"30px"}
          w={"100%"}
          px={5}
          // h={"calc(100vh - 193px)"}
          // overflowY={"scroll"}
        >
          <Box>
            <Text
              fontSize={"28px"}
              color={"#252A34"}
              fontWeight={"bold"}
              lineHeight={"32px"}
              mb={"8px"}
            >
              Need Help?
            </Text>
            <Text color={"#9999AD"} fontSize={"18px"}>
              For answers to common questions
            </Text>
          </Box>
          <Button
            w={"100%"}
            h={"48px"}
            borderRadius={"40px"}
            bgColor={"rgb(113, 99, 231)"}
            // py={4}

            display={"flex"}
            justifyContent={"center"}
            my={6}
          >
            <Text color={"#FFF"}>Visit our FAQs</Text>
          </Button>
          <Divider mt={3} />
          <Box mt={6}>
            <Text
              fontSize={"20px"}
              fontWeight={700}
              color={"#252A34"}
            >
              Contact Support
            </Text>
            <Text color={"#9999AD"} fontSize={'18px'}>
              Need to contact our support team?
            </Text>
            <Stack flexDir={"column"} gap={3} pt={6}>
              <Flex flexDir={"row"} gap={3}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  boxSize={"46px"}
                  bgColor={"rgb(113, 99, 231)"}
                  borderRadius={"50%"}
                >
                  <Icon as={MdEmail} color={"#FFF"} size={"24px"} />
                </Flex>
                <Box mt={'15px'}>
                  <Text color={"#9999AD"} fontSize={'14px'}>EMAIL</Text>
                  <Text color={"#7163E7"} textDecor={"underline"} fontSize={'16px'}>
                    renter.support@canopy.rent
                  </Text>
                </Box>
              </Flex>
              <Flex flexDir={"row"} gap={3}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  boxSize={"46px"}
                  bgColor={"rgb(113, 99, 231)"}
                  borderRadius={"50%"}
                >
                  <Icon as={HiPhone} color={"#FFF"} size={"24px"} />
                </Flex>
                <Box mt={'15px'}>
                  <Text color={"#9999AD"} fontSize={'14px'}>PHONE</Text>
                  <Text color={"#7163E7"} textDecor={"underline"} fontSize={'16px'}>
                    02039663850
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
          <Divider mt={5} />
          <Box mt={"49px"}>
            <Text color={"#343A5F7A"} fontSize={"14px"}>
              SUPPORT OPENING HOURS
            </Text>
            <Box>
              {openingHours.map((event, idx) => (
                <Text
                  key={idx}
                  fontSize={"18px"}
                  fontWeight={500}
                  opacity={0.75}
                  color={"#252A34"}
                >{`${event.day}: ${event.hour}`}</Text>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Help;
