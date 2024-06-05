import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Api from '~api';

const { api } = new Api();

const useGetCountriesAndState = (arg: string = '') => {
  const [country, setCountry] = useState(arg);

  const { data, isLoading } = useQuery({
    queryKey: ['COUNTRIES'],
    queryFn: () => api.getCountryAndState(),
  });

  let countries: string[] = [];
  let countryIso: string | undefined = '';
  let state: string[] = [];

  if (data?.data) {
    countries = data.data.map((c) => c.name);

    if (country) {
      countryIso = data.data.find((c) => c.name === country)?.iso2 ?? '';
      state =
        data.data.find((c) => c.name === country)?.state.map((s) => s.name) ??
        [];
    }
  }

  return { countries, setCountry, state, countryIso, isLoading };
};

export default useGetCountriesAndState;
