import { useState } from 'react';
import Toggle from '~components/reusables/Toggle/index';
import { List, ListItem } from '~reusables/List/List';
import { BoldText } from '~reusables/ui/Text';
import { alerts } from './u-notifications';

type AlertType = (typeof alerts)[number];
const Notifications = () => {
  const [toggle, setToggle] = useState({} as { [key in AlertType]: boolean });

  function handleToggle(alert: AlertType) {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [alert]: !prevToggle[alert],
    }));
  }

  return (
    <>
      <div className="py-6 border-b border-gray-100">
        <BoldText>Notification Settings</BoldText>
      </div>
      <List>
        {alerts.map((val) => (
          <ListItem
            key={val}
            title={val}
            description={
              <Toggle
                toggle={toggle[val]}
                setToggle={() => handleToggle(val)}
              />
            }
          />
        ))}
      </List>
    </>
  );
};

export default Notifications;
