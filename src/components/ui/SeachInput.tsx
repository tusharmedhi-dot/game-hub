import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    // 2. InputGroup now wraps the Input and takes a startElement prop
    <InputGroup
      flex="1"
      startElement={<BsSearch />} // ✅ Render as <BsSearch />
      width="100%"
    >
      <Input borderRadius={20} placeholder="Search games..." variant="subtle" />
    </InputGroup>
  );
};

export default SearchInput;
