import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Api from '~api';

const { api } = new Api();

const useGuardianDetail = () => {
  const { tag } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`guardians-${tag}`],
    queryFn: () => api.getStaff(tag!),
    placeholderData: keepPreviousData,
  });

  return {
    guardian: data?.data,
    isLoading,
    isError,
  };
};

export default useGuardianDetail;
