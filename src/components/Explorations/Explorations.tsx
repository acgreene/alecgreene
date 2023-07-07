import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import {
  SiAbletonlive,
  SiProtools,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiChakraui,
  SiGreensock,
  SiPython,
  SiKicad,
  SiAltiumdesigner,
  SiTsnode,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";
import ExplorationCard from "./ExplorationCard";

type ExplorationsProps = {};

const Explorations: React.FC<ExplorationsProps> = () => {
  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px">
        <ExplorationCard
          title="recording, mixing"
          icons={[SiAbletonlive, SiProtools]}
        ></ExplorationCard>

        <ExplorationCard
          title="front end dev"
          icons={[
            SiTypescript,
            SiReact,
            SiTailwindcss,
            SiChakraui,
            SiGreensock,
          ]}
        ></ExplorationCard>

        <ExplorationCard title="scripting" icons={[SiPython]}></ExplorationCard>

        <ExplorationCard
          title="schematics, pcbs"
          icons={[SiKicad, SiAltiumdesigner]}
        ></ExplorationCard>

        <ExplorationCard
          title="back end dev"
          icons={[SiTsnode, SiExpress]}
        ></ExplorationCard>

        <ExplorationCard
          title="databases"
          icons={[SiMongodb, SiFirebase, SiMysql]}
        ></ExplorationCard>

        <ExplorationCard
          title="audio plugin dev"
          icons={[SiCplusplus]}
        ></ExplorationCard>
      </SimpleGrid>
    </div>
  );
};
export default Explorations;
