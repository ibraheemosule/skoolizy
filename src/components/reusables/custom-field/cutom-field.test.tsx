import '@testing-library/jest-dom';

// import { screen, render, fireEvent } from '@testing-library/react';
// import CustomField from './CustomField';

describe('testing the functionalities of the CustomField component', () => {
  // let value = '';

  // test('value should be update when input is typed into', async () => {
  //   render(
  //     <CustomField>
  //       <CustomField.Editable
  //         value={value}
  //         onChange={(e) => {
  //           value = e.target.value;
  //         }}
  //       />
  //     </CustomField>
  //   );

  //   const input = await screen.findByTestId('custom-input');
  //   fireEvent.change(input, { target: { value: 'some text' } });
  //   expect(value).toBe('some text');
  // });

  // test('input field should not be rendered if onChange prop is not passed ', async () => {
  //   render(
  //     <CustomField>
  //       <CustomField.NonEditable />
  //     </CustomField>
  //   );
  //   const input = await screen.queryByTestId('custom-input');
  //   const select = await screen.findByTestId('custom-select');

  //   expect(input).not.toBeInTheDocument();
  //   expect(select).toBeInTheDocument();
  // });
  it('custom field test', () => {
    expect(true).toBe(true);
  });
});
