export type TState = { [key in 'name' | 'state_code']: string };
export type TCountry = { [key in 'iso2' | 'iso3' | 'name']: string } & {
  states: TState[];
};
