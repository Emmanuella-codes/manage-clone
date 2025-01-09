import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  h?: string;
  modalHeader?: React.ReactNode;
  modalBody: React.ReactNode;
  modalFooter?: React.ReactNode;
}

const ModalCmp: FC<IProps> = ({
  isOpen,
  onClose,
  h,
  modalHeader,
  modalBody,
  modalFooter,
}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} blockScrollOnMount={false}>
      <ModalOverlay bg={"none"} />
      <ModalContent maxW={"607px"} pb={7} borderRadius={0} my={0} h={h || ""}>
        <ModalHeader p={0} pos={"relative"}>
          {modalHeader}
        </ModalHeader>
        <ModalCloseButton border={0} color={"#fff"} />
        <ModalBody px={0}>{modalBody}</ModalBody>
        <ModalFooter display={"block"}>{modalFooter}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCmp;
