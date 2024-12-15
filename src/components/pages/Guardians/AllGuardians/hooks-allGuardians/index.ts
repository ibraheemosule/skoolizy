import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import Api from '~api';

const { api } = new Api();

const useAllGuardians = () => {
  const { state } = useLocation();
  const search = state?.search || '';
  const page = state?.page || 1;
  const fromDate = state?.from_date || '';
  const toDate = state?.to_date || '';

  const { data, isFetching, refetch, isError } = useQuery({
    queryKey: ['guardians', search, page, fromDate, toDate],
    queryFn: () => api.getAllGuardians(state),
    placeholderData: keepPreviousData,
  });

  return {
    guardians: data?.data.list,
    data: data?.data,
    isFetching,
    refetch,
    isError,
    search,
    page,
    fromDate,
    toDate,
  };
};

export default useAllGuardians;
