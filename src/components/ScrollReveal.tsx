import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  distance = 28,
  once = false,
  amount = 0.12,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'scale':
        return { opacity: 0, scale: 0.94, y: distance * 0.5 };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  };

  const getTargetPosition = () => {
    switch (direction) {
      case 'scale':
        return { opacity: 1, scale: 1, y: 0 };
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'fade':
      default:
        return { opacity: 1 };
    }
  };

  const variants = {
    hidden: {
      ...getInitialPosition(),
      transition: {
        duration: Math.min(duration * 0.75, 0.38),
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    visible: {
      ...getTargetPosition(),
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier deceleration
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '-25px 0px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

export const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  staggerDelay = 0.08,
  className = '',
  once = false,
  amount = 0.1,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '-25px 0px' }}
      variants={{
        hidden: {
          transition: {
            staggerChildren: 0.035,
            staggerDirection: -1,
          },
        },
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'scale' | 'fade';
  duration?: number;
}

export const ScrollStaggerItem: React.FC<ScrollStaggerItemProps> = ({
  children,
  className = '',
  direction = 'up',
  duration = 0.55,
}) => {
  const getHidden = () => {
    switch (direction) {
      case 'scale':
        return { opacity: 0, scale: 0.94, y: 16 };
      case 'fade':
        return { opacity: 0 };
      case 'up':
      default:
        return { opacity: 0, y: 24 };
    }
  };

  const variants = {
    hidden: {
      ...getHidden(),
      transition: {
        duration: 0.32,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * Top reading progress bar that smoothly traces scroll depth
 */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 origin-left shadow-[0_0_8px_rgba(16,185,129,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};
