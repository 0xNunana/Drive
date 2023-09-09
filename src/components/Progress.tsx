import React from 'react';

type ProgressProps = {
  progress: number;
};

const Progress = ({ progress }: ProgressProps) => {
  const progressBarStyle = {
    width: `${progress}%`,
  };

  return (
    <div>
      <div className="shadow w-full bg-gray-300 mt-2 ">
        <div
          className="bg-gradient-to-r from-red-200 via-white to-green-300 text-xs leading-none py-1 text-center text-black animate-pulse"
          style={progressBarStyle}
        >
       
        </div>
      </div>
    </div>
  );
};

export default Progress;
