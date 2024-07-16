import { useQuery } from '@tanstack/react-query';
import { GET_SAMPLE } from '@/constants/queryKey';
import { getSample } from '@/api/sample';

export const useGetMemo = () => {
  return useQuery({
    queryKey: GET_SAMPLE(),
    queryFn: getSample,
  });
};
