'use client';
import { motion, useReducedMotion } from 'motion/react';
export function Reveal({children}:{children:React.ReactNode}){const reduce=useReducedMotion();return <motion.div initial={false} animate={{opacity:1,y:0}} whileHover={reduce?undefined:{y:-2}} transition={{duration:0.2}}>{children}</motion.div>}
