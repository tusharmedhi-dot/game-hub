import type { Platform } from "@/hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaDesktop,
  FaGamepad,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiCommodore, SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Icon, HStack } from "@chakra-ui/react";

export interface PlatformIconListProps {
  // Define props here as needed
  platforms: Platform[];
}

const platformIconList: React.FC<{
  platforms?: { id?: number; name?: string; slug?: string }[];
}> = ({ platforms }) => {
  if (!platforms || platforms.length === 0) return null;

  const iconMaps = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    amiga: FaDesktop,
    commodore: SiCommodore,
    "commodore-amiga": SiCommodore,
    sega: SiSega,
    "neo-geo": FaGamepad,
    atari: FaGamepad,
  };

  return (
    <HStack className="platformIconList">
      {platforms.map((p) => (
        <div key={p.id ?? p.slug ?? p.name} title={p.name}>
          <Icon
            as={iconMaps[p.slug as keyof typeof iconMaps] || BsGlobe}
            boxSize={4}
            color="gray.500"
          />
        </div>
      ))}
    </HStack>
  );
};

export default platformIconList;
