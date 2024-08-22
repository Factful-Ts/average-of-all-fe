import * as styles from './SearchBar.css';
import { Button, Input } from '@/components';
import { IconSearch } from '#/icons';

export const SearchBar = ({ className, ...rest }: { className?: string | undefined }) => {
  return (
    <div className={className}>
      <Input
        {...rest}
        size="large"
        leftSection={<IconSearch className={styles.searchIconStyle} />}
        rightSection={<Button className={styles.searchButtonStyle} label="검색하기" size="large" />}
        hasRightSectionPadding={false}
      />
    </div>
  );
};
