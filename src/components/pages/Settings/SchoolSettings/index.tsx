import { List } from '~components/reusables/List/List';
import { BoldText } from '~reusables/ui/Text';
import LogoSetting from './LogoSetting/index';
import NameSetting from './NameSetting';
import TermSetting from './TermSetting/index';

const SchoolSetting = () => (
  <div>
    <BoldText className="py-6 border-b border-gray-100">
      School Settings
    </BoldText>
    <List>
      <NameSetting />
      <LogoSetting />
      <TermSetting />
    </List>
  </div>
);

export default SchoolSetting;
