import { Disclosure, Transition } from '@headlessui/react';
import React from 'react';
import { ShadowData } from '../../types/shadow-generator.types';
import { MAX_V_OFFSET, MIN_V_OFFSET } from '../../utils/shadow-generator-constants';
import ShadowColorEdit from './shadow-color-edit';
import ShadowRangeEdit from './shadow-range-edit';

interface IShadowGeneratorEditProps {
  shadow: ShadowData;
}

const ShadowGeneratorEdit: React.FC<IShadowGeneratorEditProps> = (props) => {
  const { shadow } = props;

  const handleVerticalOffsetChange = (value: number): void => {
    console.log({ vOffset: value });
  };

  const handleHorizontalOffsetChange = (value: number): void => {
    console.log({ vOffset: value });
  };

  return (
    <Disclosure>
      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
        Shadow
      </Disclosure.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel>
          <div className="flex flex-col items-start space-x-2 justify-evenly p-2 sm:p-4 sm:space-x-4">
            {/* Color */}
            <ShadowColorEdit shadow={shadow} />

            {/* Vertical Offset */}
            <ShadowRangeEdit
              label="Vertical Offset"
              defaultValue={shadow.verticalOffset}
              min={MIN_V_OFFSET}
              max={MAX_V_OFFSET}
              onChange={handleVerticalOffsetChange}
            />

            {/* Horizontal Offset */}
            <ShadowRangeEdit
              label="Horizontal Offset"
              defaultValue={shadow.horizontalOffset}
              min={MIN_V_OFFSET}
              max={MAX_V_OFFSET}
              onChange={handleHorizontalOffsetChange}
            />

            {/* Blur Radius */}
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-gray-800">Blur Radius</span>
              <input type="color" />
            </div>

            {/* Spread Radius */}
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-gray-800">Spread Radius</span>
              <input type="color" />
            </div>
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default ShadowGeneratorEdit;
