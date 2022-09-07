import { Transition } from '@headlessui/react';
import Button from '@modules/ui/components/button/button';
import { motion } from 'framer-motion';
import React from 'react';
import { ShadowCollectionData } from '../../types/shadow-collection.types';

interface IShadowCollectionCardProps {
  shadow: ShadowCollectionData;
}

const ShadowCollectionCard: React.FC<IShadowCollectionCardProps> = (props) => {
  const { shadow } = props;

  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          y: -15,
        },
      }}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{
        duration: 0.15,
        delay: Number(shadow.id) * 0.1,
        staggerChildren: 0.15,
      }}
      className="relative bg-white rounded-lg border border-gray-200 h-[200px] w-[200px]"
      style={{ boxShadow: shadow.shadowStyle }}
    >
      <div className="absolute items-center bottom-0 flex justify-between w-full p-2">
        <span className="font-bold text-gray-900 opacity-80">{`#${shadow.id}`}</span>
        <Button size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
            />
          </svg>
        </Button>
      </div>
    </motion.div>
  );
};

export default ShadowCollectionCard;
