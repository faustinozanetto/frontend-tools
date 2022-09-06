import { Disclosure, Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import useShadowCreator from '../../hooks/use-shadow-creator';
import useShadowGeneratorContext from '../../hooks/use-shadow-generator-context';
import { defaultShadow, ShadowData } from '../../types/shadow-generator.types';
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
          <div className="flex flex-col items-start space-x-2 justify-between p-2 sm:p-4 sm:space-x-4 sm:flex-row">
            {/* Color */}
            <ShadowColorEdit defaultValue={shadow.color} onChange={handleColorChange} />

            {/* Others */}
            <div className="w-full space-y-1">
              {/* Inset */}
              <ShadowBooleanEdit label="Is Inset?" defaultValue={shadow.inset} onChange={handleInsetChange} />
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
            </div>
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default ShadowGeneratorEntry;
