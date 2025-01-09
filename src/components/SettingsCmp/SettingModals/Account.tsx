import { FC, useState } from "react";
// import SettingsModal from "../SettingsModal";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import SubSection from "../../SubSection";
import { MdArrowBack, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../routes/baseRoutes";

interface IProps {
  // isOpen: boolean;
  // onClose: () => void;
}

const AccountSettings: FC<IProps> = () => {
  const [height, setHeight] = useState("260px");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate()

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
    <Flex flexDir={"column"} w={"100%"}>
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
          cursor={'pointer'}
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
          cursor={'pointer'}
        />
      </Flex>
      <Box
        px={4}
        overflowY={"scroll"}
        h={`calc(100vh - ${height})`}
        onScroll={handleScroll}
      >
        <Box borderBottom={"1px solid #C5CDDE"} py={4}>
          <Text color={"#252A34"} fontWeight={500}>
            Account Details
          </Text>
        </Box>
        <Flex flexDir={"column"}>
          <SubSection title="Gojo Satoru" topText="Name" />
          <SubSection
            title="gojoSatoru@gmail.com"
            topText="Email"
            hideCaret
          />
          <SubSection
            title="Your phone number"
            titleColor="#C5CDDE"
            topText="Phone"
            btnText="ADD"
            btnColor="#09CE89"
          />
          <SubSection
            title="Your birthday"
            titleColor="#C5CDDE"
            topText="Date of birth"
            btnText="ADD"
            btnColor="#09CE89"
          />
          <SubSection
            title="Your nationality"
            titleColor="#C5CDDE"
            topText="Nationality"
            btnText="ADD"
            btnColor="#09CE89"
          />
          <SubSection
            title="Your addresses"
            titleColor="#C5CDDE"
            topText="Address history"
            btnText="ADD"
            btnColor="#09CE89"
          />
        </Flex>
        <Box>
          <Box borderBottom={"1px solid #C5CDDE"} py={4}>
            <Text fontWeight={500} color={"#252A34"}>
              Settings
            </Text>
          </Box>
          <SubSection title="Notifications" />
          <Box borderBottom={"1px solid #C5CDDE"} py={4}>
            <Text color={"#252A34"} fontWeight={500}>
              Privacy and legal
            </Text>
          </Box>
          <SubSection title="Legal documents" />
          <SubSection title="Delete account" />
        </Box>
      </Box>
    </Flex>
  );
};

export default AccountSettings;
