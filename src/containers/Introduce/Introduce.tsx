import * as styles from './Introduce.css';
import { Text } from '@/components';

const Title = ({ content, primary }: { content: string; primary?: boolean }) => {
  return (
    <Text span color={primary ? 'primary' : ''} fontSize={50} weight="bold">
      {content}
    </Text>
  );
};

export const Introduce = () => {
  return (
    <main className={styles.introduceWrapper}>
      <Text className={styles.sloganStyle}>
        <Title content="세상의 모든 " primary />
        <Title content="행복을 위한" />
      </Text>
      <Text className={styles.sloganStyle}>
        <Title content="평균" primary />
        <Title content="을 나타냅니다" />
      </Text>
    </main>
  );
};
