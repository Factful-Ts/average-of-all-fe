import { sampleApiInstance } from '@/api/config';
import { SampleResponse } from '@/types/sample';

export const getSample = async (): Promise<SampleResponse> => {
  return sampleApiInstance<SampleResponse>('/test', {
    method: 'GET',
  }).then((response) => response.body);
};
