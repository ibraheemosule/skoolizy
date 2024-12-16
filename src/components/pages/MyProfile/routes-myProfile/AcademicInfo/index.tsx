import { DocumentList, List, ListItem } from '~components/reusables/List/List';
import { capCharRemoveUnderscore } from '~utils';
import { academic } from './utils-academic-info';

const AcademicInfo = () =>
  Object.entries(academic).map(([academicKey, academicValue]) => (
    <>
      <div className="py-6 font-bold text-sm border-b border-gray-100">
        {capCharRemoveUnderscore(academicKey)}
      </div>
      <List key={academicKey}>
        {Object.entries(academicValue).map(([key, value]) => (
          <ListItem
            key={key}
            title={capCharRemoveUnderscore(key)}
            description={
              key === 'certificate_obtained' ? (
                <DocumentList doc={academicValue[key]} />
              ) : (
                <span>{value as string}</span>
              )
            }
          />
        ))}
      </List>
    </>
  ));

export default AcademicInfo;
