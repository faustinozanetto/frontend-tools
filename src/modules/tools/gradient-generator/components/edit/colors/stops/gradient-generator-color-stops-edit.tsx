import useGradientColorStopsEditor from '@modules/tools/gradient-generator/hooks/use-gradient-color-stops-editor';
import useGradientGenerator from '@modules/tools/gradient-generator/hooks/use-gradient-generator';
import useGradientGeneratorContext from '@modules/tools/gradient-generator/hooks/use-gradient-generator-context';
import type { GradientColor } from '@modules/tools/gradient-generator/types/gradient-generator.types';
import React, { useRef } from 'react';
import Draggable from 'react-draggable';

interface IGradientColorHandleProps {
  /** Offset parent to pass to the draggable component. */
  offsetParent: HTMLElement;
  /** Gradient color corresponding to the handle */
  color: GradientColor;
  /** Callback executed when the handle is selected. */
  onSelected: () => void;
  /** Callback used when the handle is dragged. */
  onDrag: (position: number) => void;
}

const GradientColorHandle: React.FC<IGradientColorHandleProps> = (props) => {
  const { offsetParent, color, onSelected, onDrag } = props;

  const mapXPosition = (x: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  return (
    <Draggable
      bounds="parent"
      axis="x"
      offsetParent={offsetParent as HTMLElement}
      onStart={onSelected}
      onDrag={(_e, position) => {
        const { x } = position;
        const xPos = mapXPosition(x, 0, 340, 0, 100);
        onDrag(xPos);
      }}
    >
      <div className="absolute top-2 z-10 px-[2px]">
        <div
          className="flex h-6 w-6 items-center justify-center rounded-2xl border-4"
          style={{ background: color.color }}
        />
      </div>
    </Draggable>
  );
};

const GradientGeneratorColorStopsEdit: React.FC = () => {
  const offsetParent = useRef<HTMLDivElement>(null);
  const { gradient } = useGradientGeneratorContext();
  const { gradientStyle } = useGradientGenerator(gradient, false);
  const { updateSelectedColorStopIndex, updateSelectedColorStop } = useGradientColorStopsEditor();

  return (
    <div className="flex w-full flex-col">
      <h3 className="text-lg font-semibold text-gray-800">Colors Stops</h3>
      <div className="flex flex-col items-center">
        <div className="relative w-[340px]">
          <div className="py-2">
            <div ref={offsetParent} className="h-6 rounded-lg" style={{ background: gradientStyle }}>
              &nbsp;
            </div>
          </div>
          {gradient.colors.map((color, index) => {
            return (
              <GradientColorHandle
                key={index}
                offsetParent={offsetParent.current as HTMLElement}
                color={color}
                onSelected={() => {
                  updateSelectedColorStopIndex(index);
                }}
                onDrag={(position) => {
                  updateSelectedColorStop(color.color, position);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GradientGeneratorColorStopsEdit;
