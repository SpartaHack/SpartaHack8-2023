import React from 'react';
import Calendar from 'react-github-contribution-calendar';
import { useTheme } from 'next-themes';

const ContributionGraph = () => {
  const { theme } = useTheme();

  var date = new Date();
  var until = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
  var values = {
    '2023-06-23': 19,
    '2023-06-26': 2,
    '2023-06-27': 3,
    '2023-06-28': 4,
    '2023-10-29': 1
  };
  var panelColors = [
    theme === 'light' ? '#f5f5f5' : '#262626',
    '#7DFF97',
    '#6EDF87',
    '#5FBF77',
    '#50A067',
    '#418057'
  ];

  return (
    <>
        <div className='flex text-sm flex-col lg:flex-row lg:mt-2 justify-between'>
            <h1>6 content generated in the past year</h1>
            <div className='flex flex-row mt-1 md:mt-0 space-x-5 justify-between'>
                <span>
                    Total Active Days: 9
                </span>  
                <span>
                    Max Streak: 10
                </span>  
            </div>
        </div>
        <Calendar 
            values={values}
            panelColors={panelColors}
            until={until} weekLabelAttributes={undefined} monthLabelAttributes={undefined} panelAttributes={undefined}        
        />
    </>
  );
}

export default ContributionGraph;