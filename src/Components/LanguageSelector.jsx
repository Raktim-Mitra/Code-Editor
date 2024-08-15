import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Text,
  Box
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

const LanguageSelector = ({language,onSelect}) => {
  const languages = Object.entries(LANGUAGE_VERSIONS);
  return (
    <Box>
    <Text mb={"2"} fontSize={"large"}>Language</Text>
    <Menu>
      <MenuButton as={Button} colorScheme="teal" bg="gray.800" border="2px" 
        borderColor="gray.600"color="white" _hover={{ bg: "gray.700" }} >
        {language}
      </MenuButton>
      <MenuList bg="gray.800" borderColor="gray.600">
        {languages.map(([lang]) => (
          <MenuItem
            key={lang}
            color={lang === language ? "blue.400" : "white"}
            bg={lang === language ? "gray.700" : "transparent"}
            _hover={{
              color: "blue.400",
              bg: "gray.700",
            }}
            onClick={() => onSelect(lang)}
          >
            {lang}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
    </Box>
  );
};

export default LanguageSelector;
