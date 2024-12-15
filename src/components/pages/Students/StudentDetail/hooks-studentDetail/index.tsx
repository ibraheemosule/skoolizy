import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Api from '~api';

const { api } = new Api();

const useStaffDetail = () => {
  const { tag } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`staffs-${tag}`],
    queryFn: () => api.getStaff(tag!),
    placeholderData: keepPreviousData,
  });

  return {
    staff: data?.data,
    isLoading,
    isError,
  };
};

export default useStaffDetail;
