import '@react-pdf-viewer/core/lib/styles/index.css';
import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import Icon from '~assets/Icons';
import Modal from '~components/reusables/Modal';
import { downloadFile } from '~utils';
import ViewerWrapper from '../PdfViewer/index';
import { BaseBtn } from '../ui/Buttons';

type TList = { children: ReactElement[] | ReactElement };

export const List: FC<TList> = ({ children }) => (
  <dl className="divide-y divide-gray-100">{children}</dl>
);

type TListItem = {
  [key in 'title' | 'description' | 'action']?: ReactElement | string | null;
};

export const ListItem: FC<TListItem> = (props) => {
  const element = useRef<HTMLDivElement>(null);
  const { title, description, action } = props;

  useEffect(() => {
    element.current?.parentElement?.classList.forEach((className) => {
      if (!['divide-y', 'divide-gray-100'].includes(className)) {
        throw Error('Component should be rendered within the List Component');
      }
    });
  }, []);

  return (
    <div
      ref={element}
      className="px-4 py-6 sm:grid items-start relative text-sm sm:grid-cols-3 sm:gap-4 sm:px-0"
    >
      <dt className="text-sm font-medium relative leading-6 text-gray-900">
        {title}
        {action && (
          <div className="sm:hidden absolute right-0 top-0">{action}</div>
        )}
      </dt>
      <dd
        className={`mt-1 text-sm leading-6 text-gray-700 ${
          action ? 'sm:col-span-1' : 'sm:col-span-2'
        } sm:mt-0`}
      >
        {description}
      </dd>
      {action && <div className="hidden sm:block">{action}</div>}
    </div>
  );
};

ListItem.displayName = 'ListItem';

export const DocumentList: FC<{
  doc: { name: string; url: string }[];
}> = ({ doc }) => {
  const [pdfUrl, setPdfUrl] = useState('');

  return (
    <>
      <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
        {doc.map(({ name, url }) => (
          <li
            key={name}
            className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
          >
            <div className="flex w-0 flex-1 items-center">
              <Icon name="paper" />
              <div className="ml-4 flex min-w-0 flex-1 gap-2">
                <span className="truncate font-medium">{name}.pdf</span>
                <span className="flex-shrink-0 text-gray-400">2.4mb</span>
              </div>
            </div>
            <div className="ml-4 flex gap-6 flex-shrink-0 items-center">
              <BaseBtn onClick={() => setPdfUrl(url)}>
                <Icon name="eye" stroke="#432c81" height={18} width={18} />
              </BaseBtn>
              <BaseBtn onClick={() => downloadFile(url)}>
                <Icon name="download" stroke="#432c81" height={18} width={18} />
              </BaseBtn>
            </div>
          </li>
        ))}
      </ul>
      {pdfUrl && (
        <Modal
          size="xl"
          title="View Document"
          close={() => setPdfUrl('')}
          content={<ViewerWrapper fileUrl={pdfUrl} />}
        />
      )}
    </>
  );
};
