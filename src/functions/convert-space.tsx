import React from 'react';
import { Icon } from '@iconify/react';
import { getUserSpaceResponse } from '../../types';

export function convertSpace(spaces: getUserSpaceResponse[]) {
  return spaces.map((space, index) => ({
    label: `Section ${index + 1}`,
    items: [
      {
        label: (
          <div
            className="flex flex-row w-full cursor-pointer rounded-xl items-center"
            onClick={() => console.log(space._id)}
          >
            <Icon icon="bxs:cube" className="h-6 w-6" />
            <span className="ml-6">{space.space_name}</span>
          </div>
        ),
      },
    ],
  }));
}