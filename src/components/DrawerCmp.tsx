import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

type DrawerProps = {
  bg?: string;
  isOpen: boolean;
  onClose: () => void;
  drawerHeader?: React.ReactNode;
  drawerBody: React.ReactNode;
  drawerFooter?: React.ReactNode;
};

const DrawerCmp: FC<DrawerProps> = ({
  bg,
  isOpen,
  onClose,
  drawerHeader,
  drawerBody,
  drawerFooter,
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement={"bottom"}
      size={"md"}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <DrawerOverlay />
      <DrawerContent
        bg={bg || "#FFF"}
        borderTopRadius={"15px"}
        w={"607px"}
        mx={"auto"}
      >
        <DrawerHeader>{drawerHeader}</DrawerHeader>
        <DrawerBody>{drawerBody}</DrawerBody>
        <DrawerFooter>{drawerFooter}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCmp;
