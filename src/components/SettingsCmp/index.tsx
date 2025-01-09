import { FC, useState } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import SubSection from "../SubSection";
import LogOut from "./SettingModals/LogOut";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes/baseRoutes";
import { MdArrowBack, MdClose } from "react-icons/md";

interface IProps {}

const Settings: FC<IProps> = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Flex
      flexDir={"column"}
      // maxW={"607px"}
      w={"full"}
      justifyContent={"center"}
      // m={"auto"}
    >
      <Flex
        flexDir={"row"}
        // alignItems={"center"}
        justifyContent={"space-between"}
        bgColor={"rgb(54, 46, 124)"}
        h={"260px"}
        transition="all 0.3s ease-in-out"
      >
        <Flex
          as={MdArrowBack}
          fontSize={"25px"}
          color={"white"}
          mx={"15px"}
          my={"25px"}
          visibility={"hidden"}
        ></Flex>
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            borderRadius={"50%"}
            boxSize={"116px"}
            bgColor={"#fff"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text color={"#7163e7"} fontSize={"36px"}>
              GS
            </Text>
          </Flex>
          <Text color={"#FFF"} fontSize={"18px"} fontWeight={500}>
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
        px={4}
        h={"calc(100vh - 260px)"}
        overflowY={"auto"}
      >
        <SubSection
          title="Account settings"
          onClick={() => navigate(Routes.settings)}
        />
        <SubSection
          title="Subscription Settings"
          onClick={() => navigate(Routes.subscription)}
        />
        <SubSection
          title="Help"
          onClick={() => navigate(Routes.help)}
        />
        <SubSection
          title="Connected bank settings"
          onClick={() => navigate(Routes.bank)}
        />
        <SubSection
          title="Public URL Settings"
          onClick={() => navigate(Routes.url)}
        />
        <SubSection
          title="Log out"
          onClick={() => setOpenModal(true)}
        />
      </Flex>

      <LogOut
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Flex>
  );
};

export default Settings;
