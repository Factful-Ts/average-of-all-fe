import * as styles from './SearchBar.css';
import { Button, Input } from '@/components';
import { IconSearch } from '#/icons';

export const SearchBar = ({ className, ...rest }: { className?: string | undefined }) => {
  return (
    <Input
      className={className}
      {...rest}
      size="large"
      leftSection={<IconSearch className={styles.searchIconStyle} />}
      rightSection={<Button className={styles.searchButtonStyle} label="검색하기" size="large" />}
      hasRightSectionPadding={false}
    />
  );
};
