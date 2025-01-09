import { Flex, Input, InputGroup, InputLeftElement, Text, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";


type AddIncomeProps = {
  // view: "income" | "expense";
  income: {
    source: string;
    amount: number;
    view: "list" | "edit";
  };
  setIncome: (income: {
    source: string;
    amount: number;
    view: "list" | "edit";
  }) => void;
  onSave: () => void;
  onDelete?: () => void;
};
const AddIncome: FC<AddIncomeProps> = ({income, setIncome, onDelete, onSave}) => {
  const [isSmallerThan420] = useMediaQuery("(max-width: 420px)");
  const [isSmallerThan486] = useMediaQuery("(max-width: 486px)");
  const [isSmallerThan350] = useMediaQuery("(max-width: 350px)");

  const canDelete = !!onDelete;

  return (
    <Flex
      p={"0.5rem"}
      justifyContent={"space-between"}
      flexDirection={
        (canDelete ? isSmallerThan486 : isSmallerThan420) ? "column" : "row"
      }
    >
      <Flex
        gap={"1rem"}
      >
        <Flex
          flexDirection={"column"}
        >
          <Text fontSize={"14px"}>Source</Text>
          <Input 
            placeholder="e.g. salary"
            w={isSmallerThan350 ? "8.5rem" : "10rem"}
            value={income.source}
            onChange={(e) => {
              setIncome(
                {
                  ...income,
                  source: e.target.value,
                }
              );
            }}
          />
        </Flex>
        <Flex
          flexDirection={"column"}
        >
          <Text fontSize={"14px"}>Amount</Text>
          <InputGroup>
            <InputLeftElement pointerEvents='none' p={0}>
              ₦
            </InputLeftElement>
            <Input 
              w={isSmallerThan350 ? "8.5rem" : "10rem"}
              type="number"
              value={income.amount}
              placeholder="0.00"
              onChange={(e) => {
                setIncome(
                  {
                    ...income,
                    amount: Number(e.target.value),
                  }
                );
              }}
            />
          </InputGroup>
        </Flex>
      </Flex>
      <Flex
        alignSelf={"end"}
        gap={"1rem"}
      >
        <Text
          display={canDelete ? "block" : "none"}
          textDecoration={"underline"}
          cursor={"pointer"}
          onClick={onDelete}
        >delete</Text>
        <Text
          textDecoration={"underline"}
          cursor={"pointer"}
          onClick={onSave}
        >save</Text>        
      </Flex>
    </Flex>
  );
}
 
export default AddIncome
