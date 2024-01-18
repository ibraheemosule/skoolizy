import { memo } from 'react';
import AsideAdmin from 'components/layout/aside-admin/AsideAdmin';
import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field/CustomField';
import { ActionBtn } from 'components/reusables/ui/buttons';
import ScoreBoard from './score-board/ScoreBoard';

const RecordGrade = () => (
  <section className="flex _full flex-wrap max-h-full overflow-auto lg:flex-nowrap gap-6">
    <div className="w-full lg:w-3/5 xl:w-8/12 shrink-0 overflow-auto">
      <div className="flex justify-start flex-wrap gap-x-8 gap-y-4">
        <div>
          <BoldText>Classroom:</BoldText>
          <div className="mt-1">
            <CustomField field="select" value="JSS-1">
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown>JSS-1</CustomField.Dropdown>
                <CustomField.Dropdown>JSS-2</CustomField.Dropdown>
                <CustomField.Dropdown>JSS-3</CustomField.Dropdown>
                <CustomField.Dropdown>SSS-1</CustomField.Dropdown>
                <CustomField.Dropdown>SSS-2</CustomField.Dropdown>
                <CustomField.Dropdown>SSS-3</CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </CustomField>
          </div>
        </div>
        <div>
          <BoldText>Grade Limit:</BoldText>
          <div className="mt-1">
            <CustomField field="select" value="10">
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown>20</CustomField.Dropdown>
                <CustomField.Dropdown>30</CustomField.Dropdown>
                <CustomField.Dropdown>40</CustomField.Dropdown>
                <CustomField.Dropdown>50</CustomField.Dropdown>
                <CustomField.Dropdown>60</CustomField.Dropdown>
                <CustomField.Dropdown>70</CustomField.Dropdown>
                <CustomField.Dropdown>80</CustomField.Dropdown>
                <CustomField.Dropdown>90</CustomField.Dropdown>
                <CustomField.Dropdown>100</CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </CustomField>
          </div>
        </div>
        <div>
          <BoldText>Subject:</BoldText>
          <div className="mt-1">
            <CustomField field="select" value="Unset">
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown>Math</CustomField.Dropdown>
                <CustomField.Dropdown>English</CustomField.Dropdown>
                <CustomField.Dropdown>Physics</CustomField.Dropdown>
                <CustomField.Dropdown>Chemistry</CustomField.Dropdown>
                <CustomField.Dropdown>Agric</CustomField.Dropdown>
                <CustomField.Dropdown>Biology</CustomField.Dropdown>
                <CustomField.Dropdown>Further Math</CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </CustomField>
          </div>
        </div>
        <ActionBtn className="self-end xl:ml-auto py-2 px-3 border">
          Submit Grade
        </ActionBtn>
      </div>
      <div className="mt-8">
        <ScoreBoard />
      </div>
    </div>
    <div className="w-full hidden xlg:block lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default memo(RecordGrade);
