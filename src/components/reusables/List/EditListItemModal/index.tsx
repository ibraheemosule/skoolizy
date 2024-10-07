import { useRef, useState } from 'react';
import { ActionBtn } from '~reusables/ui/Buttons';
import { capCharRemoveUnderscore } from '~utils/format';
import Modal from '~reusables/Modal';
import TextField from '~components/reusables/CustomField/TextField';

type TEditInfo = {
  value: string;
  close: () => void;
  field: string;
  children: JSX.Element;
};

export const ListItemEditModal = ({
  value,
  close,
  field,
  children,
}: TEditInfo) => {
  const initialValue = useRef(value);

  return (
    <Modal
      size="sm"
      close={close}
      title={`Update ${capCharRemoveUnderscore(field).toLowerCase()}`}
      content={
        <div className="mt-6">
          {children}
          <div className="p-2 w-full mt-6">
            <ActionBtn disabled={initialValue.current === value}>
              Update
            </ActionBtn>
          </div>
        </div>
      }
    />
  );
};

export const ListItemAuthEditModal = ({
  value,
  close,
  field,
  children,
}: TEditInfo) => {
  const [otpSent, setOtpSent] = useState(false);
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const initialValue = useRef(value);

  const fieldToEdit = capCharRemoveUnderscore(field).toLowerCase();
  const title = otpSent
    ? 'Input the code sent to your email and password to confirm update'
    : `To update ${fieldToEdit}, an OTP will be sent to confirm new ${fieldToEdit}`;

  const sendOtp = () => {
    console.log(value);
    setOtpSent(true);
  };

  return (
    <Modal
      size="sm"
      close={close}
      title={title}
      content={
        <div className="mt-6">
          {otpSent ? (
            <>
              <TextField
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <div className="mt-4">
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Input Password"
                />
              </div>
              <div className="p-2 w-full mt-6">
                <ActionBtn>Update</ActionBtn>
              </div>
            </>
          ) : (
            <>
              {children}
              <div className="p-2 w-full mt-6">
                <ActionBtn
                  disabled={initialValue.current === value}
                  onClick={sendOtp}
                >
                  {otpSent ? 'Resend' : 'Send'} OTP
                </ActionBtn>
              </div>
            </>
          )}
        </div>
      }
    />
  );
};
