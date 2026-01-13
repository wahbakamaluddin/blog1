'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

type Props = React.PropsWithChildren<unknown> & HTMLMotionProps<'div'>;

export default function ClientMotion({ children, ...rest }: Props) {
  return <motion.div {...rest}>{children}</motion.div>;
}