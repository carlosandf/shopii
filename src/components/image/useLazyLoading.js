import { useRef, useEffect, useState } from 'react';

const defaultLoadImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=';

const loadImage = (img, callback = null) => {
  if (!img && !callback) return;
  img.onload = () => {
    if (typeof callback === 'function') callback(img);
  };
  img.onerror = () => {
    img.src = defaultLoadImage;

    if (!navigator.onLine) {
      const src = img.src;
      const interval = setInterval(() => {
        if (navigator.onLine) {
          img.src = src;
          clearInterval(interval);
        }
      }, 5000);
    }
  };
};

export const useLazyLoading = ({ src, onLazyLoad }) => {
  const node = useRef(null);
  const [srcImage, setSrcImage] = useState(defaultLoadImage);
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);

  useEffect(() => {
    // new observer
    if (isLazyLoaded) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) return;
        loadImage(node.current, onLazyLoad);
        setSrcImage(src);
        setIsLazyLoaded(true);
        observer.disconnect();
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

  return {
    srcImage,
    node
  };
};
