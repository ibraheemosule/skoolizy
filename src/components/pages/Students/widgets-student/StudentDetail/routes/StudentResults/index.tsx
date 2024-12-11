import { DocumentList, List, ListItem } from '~components/reusables/List/List';
import { capCharRemoveUnderscore } from '~utils';
import { academic } from './utils-results';

const Results = () => (
  <List>
    {Object.entries(academic).map(([key, value]) => (
      <ListItem
        key={key}
        title={
          <div className="font-bold text-sm border-b border-gray-100">
            {capCharRemoveUnderscore(key)}
          </div>
        }
        description={<DocumentList doc={value} />}
      />
    ))}
  </List>
);

export default Results;
