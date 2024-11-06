import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import { FC } from 'react';

interface ViewerWrapperProps {
  fileUrl: string;
}

const ViewerWrapper: FC<ViewerWrapperProps> = ({ fileUrl }) => (
  <div className="w-full min-h-96 border-2 border-gray-300 my-6">
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer fileUrl={fileUrl} />
    </Worker>
  </div>
);

export default ViewerWrapper;
