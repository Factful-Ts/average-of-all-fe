import * as styles from './Introduce.css';
import { SearchBar, Text } from '@/components';

const Title = ({ primary, children }: { primary?: boolean; children: React.ReactNode }) => {
  return (
    <Text span color={primary ? 'primary' : ''} fontSize={50} weight="bold">
      {children}
    </Text>
  );
};

export const Introduce = () => {
  return (
    <main className={styles.introduceWrapper}>
      <Text className={styles.sloganStyle}>
        <Title primary>세상의 모든 </Title>
        <Title>행복을 위한</Title>
      </Text>
      <Text className={styles.sloganStyle}>
        <Title primary>평균</Title>
        <Title>을 나타냅니다</Title>
      </Text>
      <SearchBar className={styles.searchBarStyle} />
      <Text fontSize={20} weight="bold">
        평소 궁금한 데이터가 있으신가요?
      </Text>
      <br />
      <br />
      <Text>
        <Text span fontSize={40} weight="bold">
          필요한 데이터를 맞춤형
        </Text>
        <Text span fontSize={40}>
          으로
        </Text>
      </Text>
      <Text fontSize={40}>더 확실하게 제공해드려요</Text>
      <br />
      <Text fontSize={20}>카테고리로 쉽게, AI가 추천해주는 맞춤형 데이터로 더 확실하게</Text>
      <Text fontSize={20}>정보를 제공해드립니다.</Text>
    </main>
  );
};
