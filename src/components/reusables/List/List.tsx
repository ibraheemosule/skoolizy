import { Children, FC, ReactElement, cloneElement } from 'react';
import Icon from '~assets/Icons';
import { BaseBtn } from '../ui/Buttons';

export const List: FC<{ children: ReactElement[] | ReactElement }> = ({
  children,
}) => {
  const value = (Children.toArray(children) as unknown as ReactElement[]).map(
    (child: ReactElement) =>
      // if ((child.type as unknown as { name: string })?.name !== 'ListItem') {
      //   throw Error('Component only accepts List Item');
      // }

      // if (child.props.parent) {
      //   throw Error('ListItem does not accept parent props directly');
      // }

      cloneElement(child, { parent: true })
  );

  return <dl className="divide-y divide-gray-100">{value.map((v) => v)}</dl>;
};

type TListItem = {
  [key in 'title' | 'description' | 'action']?: ReactElement | string | null;
} & { parent?: true };

export const ListItem: FC<TListItem> = (props) => {
  const { parent, title, description, action } = props;
  if (!parent) {
    throw Error('Component should be rendered witin the List Component');
  }

  return (
    <div className="px-4 py-6 sm:grid items-start text-sm sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">{title}</dt>
      <dd
        className={`mt-1 text-sm leading-6 text-gray-700 ${
          action ? 'sm:col-span-1' : 'sm:col-span-2'
        } sm:mt-0`}
      >
        {description}
      </dd>
      {action}
    </div>
  );
};

export const DocumentList: FC<{ doc: string[] }> = ({ doc }) => (
  <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
    {doc.map((d) => (
      <li
        key={d}
        className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
      >
        <div className="flex w-0 flex-1 items-center">
          <Icon name="paper" />
          <div className="ml-4 flex min-w-0 flex-1 gap-2">
            <span className="truncate font-medium">{d}.pdf</span>
            <span className="flex-shrink-0 text-gray-400">2.4mb</span>
          </div>
        </div>
        <div className="ml-4 flex gap-6 flex-shrink-0 items-center">
          <BaseBtn>
            <Icon name="eye" stroke="#432c81" height={18} width={18} />
          </BaseBtn>
          <BaseBtn>
            <Icon name="download" stroke="#432c81" height={18} width={18} />
          </BaseBtn>
        </div>
      </li>
    ))}
  </ul>
);
