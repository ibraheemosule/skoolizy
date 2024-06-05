import { DocumentList, List, ListItem } from '~components/reusables/List/List';
import { capitalizeChar } from '~utils/format';
import { academic } from './u-results';

const Results = () => (
  <List>
    {Object.entries(academic).map(([key, value]) => (
      <ListItem
        key={key}
        title={
          <div className="font-bold text-sm border-b border-gray-100">
            {capitalizeChar(key)}
          </div>
        }
        description={<DocumentList doc={value} />}
      />
    ))}
  </List>
);

export default Results;
