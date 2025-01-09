import {
  Box,
  Flex,
  Icon,
  // Image,
  // Input,
  // InputGroup,
  // InputLeftElement,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGrid3X3GapFill,  } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa6";
// import {  IoSearch } from "react-icons/io5";
// import Settings from "../components/SettingsCmp";

// import CanopyLogo from "/assets/images/canopy-logo.webp";
// import RentLogo from "/assets/images/rent-logo.webp";
// import CanopyGrowLogo from "/assets/images/canopy-grow.webp";
// import OffersLogo from "/assets/images/offers-logo.webp";
import { Routes } from "../routes/baseRoutes";

interface IProps {
  user?: string;
}

const Navbar: FC<IProps> = ({ user }) => {
  const navigate = useNavigate();

  // const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [isLessThan540] = useMediaQuery("(max-width: 540px)");
  const [isLargerThan627] = useMediaQuery("(min-width: 627px)");
  const location = useLocation();

  const links = [
    { name: "Dashboard", url: Routes.home, icon: BsGrid3X3GapFill },
    {
      name: "Income and Expenses",
      url: Routes.incomeAndExpenses,
      icon: FaRegAddressCard,
    },
    // { name: "Transactions", url: Routes.transactions, icon: BsGraphUp },
    // {
    //   name: "Insights",
    //   url: Routes.insights,
    //   icon: IoPricetagsOutline,
    // },
  ];

  // const logoMap: Record<Routes, string> = {
  //   [Routes.home]: CanopyLogo,
  //   [Routes.incomeAndExpenses]: RentLogo,
  //   [Routes.transactions]: CanopyGrowLogo,
  //   [Routes.insights]: OffersLogo,
  // } as Record<Routes, string>;

  const headerMap: Record<Routes, string> = {
    [Routes.home]: "Dashboard",
    [Routes.incomeAndExpenses]: "Income and Expenses",
    // [Routes.transactions]: "Transactions",
    // [Routes.insights]: "Insights",
  } as Record<Routes, string>;

  return (
    <Flex
      w={"full"}
      bg={"#fafafa"}
      // pb={'25px'}
      flexDir={"column"}
      justifyContent={"space-between"}
    >
      {/* topNav */}
      <Box
        w={"100%"}
        // maxW={isLargerThan627 ? "572px" : { base: "100%" }}
        py={3}
        px={'20px'}
        // pos={"fixed"}
        top={0}
        right={0}
        left={0}
        margin={"auto"}
        bgColor={"rgb(250, 250, 250)"}
      >
        <Flex
          w={"100%"}
          h={"57px"}
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {
            // <Box>
            //   <Image
            //     src={logoMap[location.pathname as Routes]}
            //     alt="logo"
            //     w={{ base: "160px", md: "40%" }}
            //   />
            // </Box>
            <Text
              fontSize={"28px"}
              fontWeight={700}
            >
              {headerMap[location.pathname as Routes]}
            </Text>
          }


          <Flex
            gap={3}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {location.pathname === links[1].url && (
              <Box
                border={"2px solid #6B7CA5"}
                borderRadius={"50%"}
                display={isLessThan540 ? "flex" : "none"}
                boxSize={"22px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontSize={"17px"}>i</Text>
              </Box>
            )}
            <Box
              border={"2px solid #6B7CA5"}
              borderRadius={"50%"}
              display={isLessThan540 ? "flex" : "none"}
              boxSize={"22px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={"17px"}>?</Text>
            </Box>
            <Box
              bgColor={"rgb(113, 99, 231)"}
              boxSize={"40px"}
              borderRadius={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              onClick={() => navigate(Routes.account)}
              cursor={"pointer"}
            >
              <Text color={"#FFF"} fontSize={"18px"}>
                {user || "TA"}
              </Text>
            </Box>
          </Flex>
        </Flex>






        {location.pathname === links[0].url && (
          <Flex
            mx={"auto"}
            w={"100%"}
            bgColor={"rgb(239, 239, 253)"}
            flexDir={"row"}
            p={2}
            borderRadius={"5px"}
            alignItems={"center"}
            border={"1px solid #eaeaff"}
            justifyContent={"space-between"}
          >
            <Box>
              <Text
                fontSize={"15px"}
                color={"#362E7C"}
                fontWeight={500}
              >
                Why did you join Expense Tracker?
              </Text>
            </Box>
            <Box
              bgColor={"rgb(113, 99, 231)"}
              px={2.5}
              py={1}
              borderRadius={"40px"}
            >
              <Text color={"#FFF"} fontSize={"12px"} fontWeight={500}>
                Other
              </Text>
            </Box>
          </Flex>
        )}
        {/* {location.pathname === links[3].url && (
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={IoSearch} color="#362E7C" />
            </InputLeftElement>
            <Input
              bgColor={"rgb(239, 239, 253)"}
              type="text"
              placeholder="Search our offers"
            />
          </InputGroup>
        )} */}
      </Box>

      {/* bottomNav */}
      <Box
        bgColor={"#FFF"}
        pos={"fixed"}
        left={0}
        right={0}
        bottom={0}
        py={4}
        px={{ base: 3 }}
        w={"100%"}
        zIndex={10}
        maxW={isLargerThan627 ? "625px" : { base: "100%" }}
        mx={"auto"}
        boxShadow={"rgba(223, 223, 223, 0.38) 0px -1px 3px"}
      >
        <Flex
          flexDir={"row"}
          w={"100%"}
          justifyContent={"space-around"}
          alignItems={"center"}
          // mx={"auto"}
        >
          {links.map((link, idx) => (
            <Link key={idx} to={link.url}>
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
              >
                <Icon
                  as={link.icon}
                  color={
                    location.pathname === link.url
                      ? "#7163E7"
                      : "#9999AD"
                  }
                  fontSize={'25px'}
                  // fontWeight={'800'}
                />
                <Text
                  fontSize={"10px"}
                  color={
                    location.pathname === link.url
                      ? "#252A34"
                      : "#9999AD"
                  }
                >
                  {link.name}
                </Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
      {/* <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      /> */}
    </Flex>
  );
};

export default Navbar;
