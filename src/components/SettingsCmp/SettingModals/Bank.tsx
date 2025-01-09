import {
  Box,
  Divider,
  Flex,
  Icon,
  ListItem,
  Text,
  UnorderedList,
  Image,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import PlaidLogo from "/assets/images/plaid-logo.webp";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../routes/baseRoutes";
interface IProps {
  // isOpen: boolean;
  // onClose: () => void;
}

const BankSettings: FC<IProps> = () => {
  const navigate = useNavigate();
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"space-between"}
      w={"100%"}
      bg={"#fafafa"}
      h={"100vh"}
      overflow={"hidden"}
    >
      <Flex flexDir={"column"}>
        <Box
          bgColor={"rgb(54, 46, 124)"}
          w={"100%"}
          px={5}
          h={"57px"}
        >
          <Flex
            flexDir={"row"}
            gap={4}
            w={"100%"}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Icon
              as={MdArrowBack}
              fontSize={"25px"}
              color={"white"}
              onClick={() => navigate(Routes.account)}
              cursor={"pointer"}
            />
            <Text color={"#fff"} fontSize={"15px"}>
              Bank Settings
            </Text>
            <Icon
              as={MdArrowBack}
              fontSize={"25px"}
              color={"white"}
              visibility={"hidden"}
            />
          </Flex>
        </Box>

        <Box>
          <Box px={5} py={"19px"}>
            <Text color={"#252A34"} fontWeight={500}>
              Connected Banks
            </Text>
          </Box>
          <Flex flexDir={"column"} bgColor={"#FFF"} px={5}>
            <Text color={"#343A5FBA"} fontWeight={500} fontSize={'17px'}>
              No bank accounts connected
            </Text>
            <Text color={"#9999AD"} mt={'7px'}>Connect a bank account to:</Text>
            <UnorderedList>
              <ListItem color={"#7163E7"} mt={'10px'}>
                <Text color={"#9999AD"}>
                  Complete your RentPassport quickly and securely
                </Text>
              </ListItem>
              <ListItem color={"#7163E7"} mt={'10px'}>
                <Text color={"#9999AD"}>
                  Enable CanopyGrow tools - RentTracking $ Finance
                  Score
                </Text>
              </ListItem>
            </UnorderedList>
            <Divider my={'17px'} />
            <Button
              w={"100%"}
              borderRadius={"40px"}
              bgColor={"rgb(113, 99, 231)"}
              display={"flex"}
              justifyContent={"center"}
              mb={'19px'}
              h={'48px'}
            >
              <Text color={"#FFF"}>Add bank account</Text>
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex
        flexDir={"row"}
        alignItems={"center"}
        w={"100%"}
        justifyContent={"space-between"}
        px={"20px"}
        py={"17px"}
        // flexWrap={"wrap"}
        borderTopStyle={"solid"}
        boxShadow={"rgba(0, 0, 0, 0.2) 2px 2px 8px"}
        bg={"#ffffff"}
      >
        <Flex
          flexDir={"row"}
          alignItems={"center"}
          w={"100%"}
          gap={3}
        >
          <Box>
            <Image src={PlaidLogo} w={"40px"} alt="plaid logo" />
          </Box>
          <Box w={""}>
            <Text color={"#9999AD"} fontSize={"12px"} maxW={"371px"}>
              <span style={{ color: "#252A34", fontWeight: 700 }}>
                Secure Open Banking.
              </span>{" "}
              We are an agent of Plaid who powers this integration
            </Text>
          </Box>
        </Flex>
        <Box
          border={"1px solid #7163E7"}
          bgColor={"#fff"}
          borderRadius={"24px"}
          py={'0.15rem'}
          px={3}
        >
          <Text color={"#7163E7"} fontSize={"10px"}>
            More
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default BankSettings;
