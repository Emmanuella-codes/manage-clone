import { Flex, Box, Text, 
  // Text, Image, useMediaQuery 
} from "@chakra-ui/react";
import { useState } from "react";
import IncomeAndExpenseTab from "./components/IncomeAndExpenseTab";
import Banner from "./components/Banner";
// import ToolsCard from "./components/Tools";
import SubSection from "../../components/SubSection";

// import CanopyCoverLogo from "/assets/svgs/canopycover.svg";
// import CanopyGrowRentLogo from "/assets/images/canopy_grow_rent.webp";
// import TrustPilotLogo from "/assets/svgs/trustpilot.svg";
import AddIncome from "./components/AddIncome";


const IncomeAndExpenses = () => {
  const [openIncome, setOpenIncome] = useState(true);
  const [openExpense, setOpenExpense] = useState(true);

  // const [isLessThan620] = useMediaQuery("(max-width: 620px)");

  const [incomeSources, setIncomeSources] = useState<{
    source: string;
    amount: number;
    view: "list" | "edit";
  }[]>(
    [
      // {
      //   source: "savings",
      //   amount: 50_500,
      // },
      // {
      //   source: "gifts",
      //   amount: 25000,
      // },
    ]
  );
  // const [expenses, setExpenses] = useState([]);
  const [expenses, ] = useState([]);
  const defaultNewIncome = {
    source: "",
    amount: undefined as unknown as number,
    view: "list",
  } as {
    source: string,
    amount: number,
    view: "list" | "edit";
  };
  const [newIncome, setNewIncome] = useState(defaultNewIncome);
  const [openAddIncome, setOpenAddIncome] = useState(true);

  return (
    <Flex w={"100%"} flexDir={"column"} gap={7} bg={"#fafafa"}>
      <Box h={"calc(100vh - 80px)"} overflowY={"auto"}>
        <Banner />
        <Flex flexDir={"column"} w={"100%"} bgColor={"#fff"} px={3}>
          <Box>
            <IncomeAndExpenseTab
              text="Income"
              onClick={() => setOpenIncome(!openIncome)}
              isOpen={openIncome}
              hasItems={!!incomeSources.length}
            />
            <Flex
              flexDirection={"column"}
              display={openIncome ? "block" : "none"}
            >
              {
                incomeSources.map(
                  (source, index) => {
                    const ListView = (
                      <Flex
                        key={index + "str"}
                        justifyContent={"space-between"}
                        p={"0.25rem"}
                      >
                        <Text
                          w={"8rem"}
                        >{source.source}</Text>
                        <Text
                          w={"8rem"}
                        >₦{source.amount.toLocaleString()}</Text>
                        <Text 
                          textDecoration={"underline"}
                          onClick={() => {
                            setIncomeSources(
                              incomeSources.map(
                                (currIncome, currIndex) => {
                                  if (currIndex === index) {
                                    return { ...currIncome, view: "edit" };
                                  }else {
                                    return currIncome;
                                  }
                                }
                              )
                            );
                          }}
                          cursor={"pointer"}
                        >edit</Text>
                      </Flex>
                    );
                    const EditView = (
                      <AddIncome 
                        income={source} 
                        setIncome={
                          (
                            _currIncome: {
                              source: string,
                              amount: number,
                              view: "list" | "edit";
                            }
                          ) => {
                            setIncomeSources(
                              incomeSources.map(
                                (currIncome, currIndex) => {
                                  if (currIndex === index) {
                                    return _currIncome;
                                  }else {
                                    return currIncome;
                                  }
                                }
                              )
                            );
                          }
                        }
                        onSave={() => {
                          setIncomeSources(
                            incomeSources.map(
                              (currIncome, currIndex) => {
                                if (currIndex === index) {
                                  return { ...currIncome, view: "list" };
                                }else {
                                  return currIncome;
                                }
                              }
                            )
                          );
                        }}
                        onDelete={() => {
                          setIncomeSources(
                            incomeSources.filter((_, currIndex) => currIndex !== index)
                          );
                        }}
                      />
                    );

                    return source.view === "list" ? ListView : EditView;
                  }
                )
              }
              {
                openAddIncome &&
                <AddIncome 
                  income={newIncome} 
                  setIncome={setNewIncome}
                  onSave={() => {
                    if (newIncome.source && newIncome.amount) {
                      setIncomeSources(
                        [
                          ...incomeSources,
                          {
                            ...newIncome
                          }
                        ]
                      );
                      setNewIncome({...defaultNewIncome});
                      setOpenAddIncome(false);
                    }
                  }}
                />
              }
              {
                !openAddIncome &&
                <Text
                  mt={"0.5rem"}
                  cursor={"pointer"}
                  textDecoration={"underline"}
                  onClick={() => setOpenAddIncome(true)}
                >Add new Income source</Text>
              }
            </Flex>
            {/* <SubSection title="Savings" btnText="OPTIONAL" /> */}
            <IncomeAndExpenseTab
              text="Expenses"
              onClick={() => setOpenExpense(!openExpense)}
              isOpen={openExpense}
              hasItems={!!expenses.length}
            />
              <SubSection
                btnText="BEGIN"
                title="Bills Setup"
                btnColor="#09CE89"
              />
              <SubSection btnText="BEGIN" title="Moving" btnColor="#09CE89" />
          </Box>
        </Flex>
        {/* <Box px={{ md: "20px" }} pb={"120px"}>
          <Text
            fontSize={"18px"}
            fontWeight={500}
            // pl={{ base: 3, md: 0 }}
            px={"8px"}
            pb={"10px"}
            pt={"34px"}
          >
            Useful Tools
          </Text>
          <Flex mt={6} gap={2} flexDir={"column"}>
            <ToolsCard
              title={"Protect your possessions"}
              subtitle={"Securing Your Rental, Belongings, and Peace of Mind."}
              btnText={"10% OFF"}
              btnMaxW={"75.19px"}
              footerContent={
                <Box mt={3} w={"100%"}>
                  <Image
                    src={CanopyCoverLogo}
                    alt="canopy cover"
                    maxW={isLessThan620 ? "88px" : "16%"}
                  />
                </Box>
              }
            />
            <ToolsCard
              title={"Track your rent, grow your credit score"}
              subtitle={"Grow and monitor your credit score with CanopyGrow."}
              btnText={"START NOW"}
              btnMaxW={"95.85px"}
              footerContent={
                <Flex
                  mt={3}
                  flexDir={"row"}
                  w={"100%"}
                  justifyContent={"space-between"}
                >
                  <Image
                    src={CanopyGrowRentLogo}
                    alt="canopy grow"
                    maxW={isLessThan620 ? "88px" : "16%"}
                  />
                  <Image src={TrustPilotLogo} alt="trustpilot" />
                </Flex>
              }
            />
          </Flex>
        </Box> */}
      </Box>
    </Flex>
  );
};

export default IncomeAndExpenses;
