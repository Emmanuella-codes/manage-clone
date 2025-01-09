import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";

interface CardProps {
  cardWidth?: string;
  cardMinW?: string;
  cardMaxW?: string;
  cardHeight?: string;
  cardBg: string;
  cardRadius: string;
  cardBorder?: string;
  tagWidth?: string;
  tagText: string;
  tagColor: string;
  tagBg: string;
  cardTitle: React.ReactNode;
  subtitle?: string;
  cardDesc: React.ReactNode;
  icon: React.ReactNode;
}

const Card: FC<CardProps> = ({
  cardWidth,
  cardMinW,
  cardMaxW,
  cardHeight,
  cardBg,
  cardRadius,
  cardBorder,
  tagWidth,
  tagText,
  tagColor,
  tagBg,
  cardTitle,
  subtitle,
  cardDesc,
  icon,
}) => {
  const [isLargerThan524] = useMediaQuery("(min-width: 524px)");

  return (
    <Box
      bg={cardBg}
      w={cardWidth}
      minW={!isLargerThan524 ? cardMinW : ""}
      maxW={isLargerThan524 ? cardMaxW : ""}
      h={cardHeight}
      borderRadius={cardRadius}
      border={cardBorder}
    >
      <Flex
        flexDir={"row"}
        justifyContent={"space-between"}
        py={4}
        w={"100%"}
        pos={"relative"}
      >
        <Box display={"flex"} flexDir={"column"} gap={4}>
          <Flex
            justifyContent={"center"}
            bg={tagBg}
            borderRightRadius={"40px"}
            maxW={tagWidth}
          >
            <Text fontSize={"11px"} color={tagColor}>
              {tagText}
            </Text>
          </Flex>
          <Flex flexDir={"column"} pl={3} gap={3}>
            <Box>{cardTitle}</Box>
            <Flex flexDir={"column"} gap={3}>
              {subtitle && (
                <Text color={"#FFF"} fontSize={"9px"}>
                  {subtitle}
                </Text>
              )}
              {cardDesc}
            </Flex>
          </Flex>
        </Box>
        {icon}
      </Flex>
    </Box>
  );
};

export default Card;
