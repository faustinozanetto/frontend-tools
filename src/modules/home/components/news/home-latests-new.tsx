import { LatestNewsData } from '@modules/home/types/home.types';
import React from 'react';

interface IHomeLatestsNewProps {
  latestNew: LatestNewsData;
}

const HomeLatestNew: React.FC<IHomeLatestsNewProps> = (props) => {
  const { latestNew } = props;

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-lg drop-shadow-lg">
      {/* Title */}
      <h3 className="font-bold text-lg text-gray-800">{latestNew.title}</h3>
      {/* Date */}
      <span className="font-bold text-gray-500">{latestNew.date.toDateString()}</span>
      {/* Content */}
      <p className="text-base text-gray-600">{latestNew.content}</p>
    </div>
  );
};

export default HomeLatestNew;
