import { useState } from 'react';
import { alertType } from './u-notifications';
import { List, ListItem } from '~reusables/List/List';
import { BoldText } from '~reusables/ui/Text';
import Toggle from '~components/reusables/Toggle/index';

const Notifications = () => {
  const [toggle, setToggle] = useState<{ [key: string]: boolean }>({});

  function handleToggle(alert: string) {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [alert]: !prevToggle[alert],
    }));
  }

  return (
    <>
      <div className="py-6 border-b border-gray-100">
        <BoldText>Notifications</BoldText>
      </div>
      <List>
        {alertType.map((val) => (
          <ListItem
            key={val}
            title={val}
            description={
              <Toggle
                className={`${toggle[val] ? 'bg-brown.dark' : 'bg-gray-200'}`}
                toggle={() => handleToggle(val)}
                tClass={`${
                  toggle[val] ? 'left-6 bg-white' : 'left-0 bg-brown.dark'
                }`}
              />
            }
          />
        ))}
      </List>
    </>
  );
};

export default Notifications;
