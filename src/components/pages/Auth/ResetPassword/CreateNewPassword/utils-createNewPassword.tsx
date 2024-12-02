import { validatePassword } from '~utils/validations';

export type TCreateNewPasswordProps = {
  token: string;
};

export const createNewPasswordInputFieldValidation = (
  key: string,
  value: string
): { [key: string]: string | string[] } => {
  const error: { [key: string]: string | string[] } = {
    [key]: validatePassword(value),
  };

  return error;
};
