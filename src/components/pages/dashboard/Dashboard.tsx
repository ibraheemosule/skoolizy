import { memo } from 'react';
import { BaseText, BoldText, SmallText } from 'components/reusables/ui/text';
import IconCard from 'components/reusables/icon-card/IconCard';
import Hero from './hero/Hero';
import Categories from './categories/Categories';
import MyAppointments from './live-classes/LiveClasses';

const Dashboard = () => (
  <section>
    <div className="flex flex-wrap lg:flex-nowrap gap-6">
      <div className="w-full lg:w-3/5 shrink-0">
        <Hero />
        <Categories />
        <MyAppointments />
      </div>
      <div className="w-full lg:w-auto grow">
        <div className="mt-8 md:mt-0">
          <BoldText>Requests</BoldText>
          <div className="mt-2 bg-gray-100 rounded-lg">
            <IconCard className="text-black ">
              <IconCard.Wrapper>
                <IconCard.Icon size="50">
                  <i className="fa fa-user" />
                </IconCard.Icon>
                <IconCard.IconInfo className="grow ml-2">
                  <div>
                    <BoldText className="text-gray-500 w-full">
                      Mr John Doe
                    </BoldText>
                    <SmallText>Teacher</SmallText>
                  </div>
                </IconCard.IconInfo>
              </IconCard.Wrapper>
              <IconCard.Content className=" mt-4 px-4">
                <div className="border-t border-white pt-3">
                  <BaseText>A New board and chalk</BaseText>

                  <div className="flex flex-wrap gap-2 mt-4 items-start">
                    <BaseText className="bg-white text-brown.dark p-.5 px-2 rounded-lg">
                      JSS-3
                    </BaseText>
                    <BaseText className="bg-white text-brown.dark p-.5 px-2 rounded-lg">
                      Equipment
                    </BaseText>
                    <div className="ml-auto flex flex-wrap gap-8 -mt-1">
                      <button
                        className="p-1 text-purple.dark hover:text-purple.light"
                        type="button"
                      >
                        <i className="fa fa-check  " />
                      </button>
                      <button
                        className="p-1  text-red-800 hover:text-purple.light"
                        type="button"
                      >
                        <i className="fa fa-times " />
                      </button>
                    </div>
                  </div>
                </div>
              </IconCard.Content>
            </IconCard>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default memo(Dashboard);
