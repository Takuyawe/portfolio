import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

type Props = {
    animationData: any;
};

const MouseWheel = ({ animationData }: Props) => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  console.log(animationData)

  useEffect(() => {
    if (animationContainer.current === null) return
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy(); // Optional clean up for unmounting
  }, [animationData]);

  return <div ref={animationContainer}></div>;
};

export default MouseWheel;