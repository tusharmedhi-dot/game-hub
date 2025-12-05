import type { Platform } from "@/hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

export interface PlatformIconListProps {
  // Define props here as needed
  platforms: Platform[];
}

// const platformIconList = ({ platforms }: PlatformIconListProps) => {
//   return (
//     <>
//       <div>Platforms: {platforms.map((p) => p.name).join(", ")}</div>
//     </>
//   );
// };

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
  };

  return (
    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
      {platforms.map((p) => (
        <div key={p.id ?? p.slug ?? p.name} title={p.name}>
          <Icon
            as={iconMaps[p.slug as keyof typeof iconMaps] || BsGlobe}
            boxSize={5}
            color="#444"
          />
        </div>
        // <span
        //   key={p.id ?? p.slug ?? p.name}
        //   title={p.name}
        //   style={{ fontSize: 12, color: "#444" }}
        // >
        //   {p.name}
        // </span>
      ))}
    </div>
  );
};

export default platformIconList;
