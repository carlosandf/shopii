import { useRef, useEffect, useState } from 'react';

const defaultLoadImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=';

export const Image = ({ src, onLazyLoad, ...imgProps }) => {
  const node = useRef(null);
  const [srcImage, setSrcImage] = useState(defaultLoadImage);
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (img) => {
      if (!img || !onLazyLoad) return;
      img.onload = () => {
        if (typeof onLazyLoad === 'function') onLazyLoad(img);
        observer.disconnect();
      };
    };
    // new observer
    if (isLazyLoaded) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) return;

        setSrcImage(src);
        loadImage(node.current);
        setIsLazyLoaded(true);
      });
    });

    // observe node
    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, onLazyLoad, isLazyLoaded]);

  return (
    <img
      src={srcImage}
      ref={node}
      {...imgProps}
    />
  );
};
