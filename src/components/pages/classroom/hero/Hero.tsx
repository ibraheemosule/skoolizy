import { memo } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';

const Hero = () => (
  <div className="mt-8">
    <nav className="classrooms-nav flex border-b-2 border-gray-600 gap-8">
      <a className="py-2 border-b-2 border-gray-600" href="/">
        Time Table
      </a>

      <a className="py-2 border-b-2  border-gray-600" href="/">
        Subjects
      </a>
      <a className="py-2 border-b-2  border-gray-600" href="/">
        Record Scores
      </a>
      <a className="py-2 border-b-2  border-gray-600" href="/">
        Performance
      </a>
    </nav>
  </div>
);

export default memo(Hero);
