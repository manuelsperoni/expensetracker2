import {
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import RecordGridUserRowMenu from './record-grid-user/record-grid-user-row-menu';

export default function RecordGridRow(record: any) {
  return (
    <>
      {[...Array(5)].map(() => (
        <GridItem
          w="200px"
          h="50px"
          borderBottomWidth={1}
          borderColor="brand.400"
          borderRightWidth={1}
        >
          <Menu>
            <MenuButton
              w="200px"
              h="50px"
              color="brand.200"
              _hover={{ background: 'brand.300' }}
            >
              Field name
            </MenuButton>
            <MenuList bg="brand.500" borderColor="brand.300" padding={2}>
              <RecordGridUserRowMenu />
            </MenuList>
          </Menu>
        </GridItem>
      ))}
    </>
  );
}