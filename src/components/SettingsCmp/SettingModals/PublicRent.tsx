import { FC } from "react";
import { Flex, Icon, Box, Text, Switch } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { Routes } from "../../../routes/baseRoutes";
import { useNavigate } from "react-router-dom";

interface IProps {
  // isOpen: boolean;
  // onClose: () => void;
}

const PublicRentSettings: FC<IProps> = () => {
  const navigate = useNavigate();
  return (
    <Box h={"100vh"} w={'100%'}>
      <Flex bgColor={"rgb(54, 46, 124)"} w={"100%"} px={5} h={"57px"}>
        <Flex
          flexDir={"row"}
          gap={4}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Icon
            as={MdClose}
            fontSize={"27px"}
            color={"white"}
            mx={"15px"}
            onClick={() => navigate(Routes.account)}
            cursor={"pointer"}
          />
          <Text color={"#fff"} fontSize={"15px"}>
            Public Rent Passport
          </Text>
          <Icon
            as={MdClose}
            fontSize={"27px"}
            color={"white"}
            mx={"15px"}
            visibility={'hidden'}
          />
        </Flex>
      </Flex>

      <Box bgColor={"rgb(250, 250, 250)"} mt={3}>
        <Flex bgColor={"rgba(101, 101, 193, 0.1)"} gap={3}>
          <span
            style={{ width: "5px", backgroundColor: "#7163E7" }}
          ></span>
          <Text
            color={"#7163E7"}
            maxW={"558px"}
            fontSize={"14px"}
            fontWeight={"bold"}
            py={4}
          >
            Turning ON will allow anyone with this URL to view the
            public version of your RentPassport, you can turn off
            access using the switch below
          </Text>
        </Flex>
        <Box bgColor={"#FFF"} mt={3} w="100%">
          <Flex
            flexDir={"row"}
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            px={3}
          >
            <Text color={"#252A34"} fontSize={"22px"}>
              Your Public URL
            </Text>
            <Switch
              id="public-url"
              color={"rgba(52, 58, 95, 0.48)"}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PublicRentSettings;
