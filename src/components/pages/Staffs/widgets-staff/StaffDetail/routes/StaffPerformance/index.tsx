import CustomTable from '~reusables/custom-table/CustomTable';
import { List, ListItem } from '~components/reusables/List/List';
import StarRating from '~components/reusables/StarRating';
import PerformanceOptions from './Options';

const topHeader = ['Subject', 'Performance (%)'];

const content = [
  ['English', 20],
  ['Mathematics', 30],
  ['Physics', 50],
  ['Chemistry', 80],
  ['Biology', 70],
];

const Performance = () => (
  <section className="flex flex-wrap max-h-full lg:flex-nowrap overflow-auto">
    <div className="w-full min-h-full shrink-0">
      <div className="flex flex-col md:h-full md:overflow-hidden">
        <div className="flex justify-between gap-4">
          <List>
            <ListItem
              title={
                <span className="font-semibold text-lg">Attitude Rating</span>
              }
              description={<StarRating rating={2} />}
            />
          </List>
          <PerformanceOptions />
        </div>

        <div className="mt-6 grow h-[70vh] md:h-auto overflow-auto">
          <CustomTable
            header={topHeader}
            content={content}
            minWidth="min-w-[300px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Performance;
