import { BoldText } from '~reusables/ui/Text';
import SchoolLogoSetting from './SchoolLogo/index';
import SchoolNameSetting from './SchoolName';
import AcademicTerm from '~components/pages/Settings/settings-widgets/AcademicTerm';
import { List } from '../../../../reusables/List/List';

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
