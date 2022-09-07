import { Transition } from '@headlessui/react';
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
      className="bg-white rounded-lg border border-gray-200 h-[200px] w-[200px]"
      style={{ boxShadow: shadow.shadowStyle }}
    ></motion.div>
  );
};

export default ShadowCollectionCard;
