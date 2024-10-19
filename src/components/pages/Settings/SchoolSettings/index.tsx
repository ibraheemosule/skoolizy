import { BoldText } from '~reusables/ui/Text';
import SchoolLogoSetting from './LogoSettings/index';
import SchoolNameSetting from './NameSettings';
import AcademicTerm from '~components/pages/Settings/SchoolSettings/TermSettings';
import { List } from '~components/reusables/List/List';

const SchoolSettings = () => (
  <div>
    <BoldText className="py-6 border-b border-gray-100">
      School Settings
    </BoldText>
    <List>
      <SchoolNameSetting />
      <SchoolLogoSetting />
      <AcademicTerm />
    </List>
  </div>
);

export default SchoolSettings;
