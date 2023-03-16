import { Card, Flex, Heading, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { IconType } from "react-icons";

type ExplorationCardProps = {
  title: string;
  icons: IconType[];
};

const ExplorationCard: React.FC<ExplorationCardProps> = ({ title, icons }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Card
      className="flex flex-col m-2 justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      backgroundColor={isHovering ? "white" : "black"}
      color={isHovering ? "black" : "white"}
      transition="0.15s"
      variant="outline"
    >
      <Flex className="flex-row m-2">
        <Heading size="md" className="mr-4">
          {title}
        </Heading>
      </Flex>
      <Flex className="flex-row m-2">
        {icons.map((icon, idx) => (
          <Icon as={icon} key={idx} boxSize={8} className="mx-2"></Icon>
        ))}
      </Flex>
    </Card>
  );
};
export default ExplorationCard;
