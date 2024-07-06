import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Api from '~api';

const { api } = new Api();

const useGetCountriesAndState = (arg: string = '') => {
  const [country, setCountry] = useState(arg);

  const { data, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: () => api.getCountryAndState(),
  });

  let countries: string[] = [];
  let countryIso: string | undefined = '';
  let states: string[] = [];

  if (data?.data) {
    countries = [...new Set(data.data.map((c) => c.name))];

    if (country) {
      countryIso = data.data.find((c) => c.name === country)?.iso2 ?? '';
      states =
        data.data
          .find((c) => c.name === country)
          ?.states?.map((s) => s.name.split(' ').slice(0, -1).join(' ')) ?? [];
    }
  }

  return { countries, setCountry, states, countryIso, isLoading };
};

export default useGetCountriesAndState;
