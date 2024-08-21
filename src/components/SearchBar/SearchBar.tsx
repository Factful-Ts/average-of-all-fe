import { Button, Input } from '@/components';
import { IconSearch } from '#/icons';

export const SearchBar = () => {
  return (
    <Input leftSection={<IconSearch />} rightSection={<Button label="검색하기" />} hasRightSectionPadding={false} />
  );
};
