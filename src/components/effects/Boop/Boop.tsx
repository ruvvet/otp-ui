import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { OTPProps } from '../../../interfaces';

interface BoopProps extends OTPProps{
  rotation: number;
  timing: number;
}

export default function Boop({ rotation, timing, children }: BoopProps) {
  const [isBooped, setIsBooped] = useState(false);

  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };

  return (
    <animated.div onMouseEnter={trigger} style={style}>
      {children}
    </animated.div>
  );

}
