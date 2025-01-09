import { FC } from "react";
import ModalCmp from "../ModalCmp";
import { Text, Flex } from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  modalBody: React.ReactNode;
  modalFooter?: React.ReactNode;
}

const SettingsModal: FC<IProps> = ({
  isOpen,
  onClose,
  modalBody,
  modalFooter,
}) => {
  return (
    <ModalCmp
      isOpen={isOpen}
      onClose={onClose}
      modalHeader={
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"rgb(54, 46, 124)"}
          w={"full"}
          h={"260px"}
          transition="all 0.3s ease-in-out"
          maxW={"607px"}
          /* pos={"fixed"}
          zIndex={20} */
        >
          <Flex
            borderRadius={"50%"}
            boxSize={"116px"}
            bgColor={"#fff"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text color={"#7163e7"} fontSize={"36px"}>
              TA
            </Text>
          </Flex>
          <Text color={"#FFF"} fontSize={"18px"} fontWeight={500}>
            Timi Adesina
          </Text>
        </Flex>
      }
      modalBody={modalBody}
      modalFooter={modalFooter}
    />
  );
};

export default SettingsModal;
