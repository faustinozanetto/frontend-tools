import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import useShadowCreator from '../../hooks/use-shadow-creator';
import useShadowGeneratorContext from '../../hooks/use-shadow-generator-context';
import { defaultShadow } from '../../types/shadow-generator.types';
import {
  MAX_BLUR_RADIUS,
  MAX_H_OFFSET,
  MAX_SPREAD_RADIUS,
  MAX_V_OFFSET,
  MIN_BLUR_RADIUS,
  MIN_H_OFFSET,
  MIN_SPREAD_RADIUS,
  MIN_V_OFFSET,
} from '../../utils/shadow-generator-constants';
import ShadowBooleanEdit from './boolean/shadow-boolean-edit.tsx/shadow-boolean-edit';
import ShadowColorEdit from './color/shadow-color-edit';
import ShadowRangeEdit from './range/shadow-range-edit';
import ShadowGeneratorDelete from './shadow-generator-delete';

interface IShadowGeneratorEntryProps {
  shadowId: string;
}

const ShadowGeneratorEntry: React.FC<IShadowGeneratorEntryProps> = (props) => {
  const { shadowId } = props;
  const { shadows, updateShadow } = useShadowGeneratorContext();
  const {
    shadow,
    setShadowHorizontalOffset,
    setShadowVerticalOffset,
    setShadowBlurRadius,
    setShadowSpreadRadius,
    setShadowColor,
    setShadowIsInset,
  } = useShadowCreator(shadows.find((s) => s.id === shadowId) ?? defaultShadow);

  const handleColorChange = (value: string): void => {
    setShadowColor(value);
  };

  const handleVerticalOffsetChange = (value: number): void => {
    setShadowVerticalOffset(value);
  };

  const handleHorizontalOffsetChange = (value: number): void => {
    setShadowHorizontalOffset(value);
  };

  const handleBlurRadiusChange = (value: number): void => {
    setShadowBlurRadius(value);
  };

  const handleSpreadRadiusChange = (value: number): void => {
    setShadowSpreadRadius(value);
  };

  const handleInsetChange = (value: boolean): void => {
    setShadowIsInset(value);
  };

  useEffect(() => {
    updateShadow(shadow);
  }, [shadow]);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between focus:outline-none text-violet-800 bg-violet-200 hover:bg-violet-300 font-semibold rounded-lg px-5 py-2.5 ">
            Shadow
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={clsx('w-6 h-6', open ? 'rotate-90 transform' : '')}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
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
              <div className="flex flex-col items-start space-y-2 justify-between p-2 sm:p-4 sm:space-x-4 sm:flex-row">
                {/* Color */}
                <div className="w-full">
                  <ShadowColorEdit defaultValue={shadow.color} onChange={handleColorChange} />
                </div>

                {/* Others */}
                <div className="w-full space-y-1">
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
                    min={MIN_H_OFFSET}
                    max={MAX_H_OFFSET}
                    onChange={handleHorizontalOffsetChange}
                  />
                  {/* Blur Radius */}
                  <ShadowRangeEdit
                    label="Blur Radius"
                    defaultValue={shadow.blurRadius}
                    min={MIN_BLUR_RADIUS}
                    max={MAX_BLUR_RADIUS}
                    onChange={handleBlurRadiusChange}
                  />
                  {/* Spread Radius */}
                  <ShadowRangeEdit
                    label="Spread Radius"
                    defaultValue={shadow.spreadRadius}
                    min={MIN_SPREAD_RADIUS}
                    max={MAX_SPREAD_RADIUS}
                    onChange={handleSpreadRadiusChange}
                  />

                  <div className="flex items-center justify-between w-full">
                    {/* Inset */}
                    <ShadowBooleanEdit label="Is Inset?" defaultValue={shadow.inset} onChange={handleInsetChange} />
                    {/* Delete Button */}
                    <ShadowGeneratorDelete shadowId={shadow.id} />
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default ShadowGeneratorEntry;
