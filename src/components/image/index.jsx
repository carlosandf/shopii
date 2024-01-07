import { useLazyLoading } from './useLazyLoading';

export const Image = ({ src, onLazyLoad, ...imgProps }) => {
  const { node, srcImage } = useLazyLoading({ src, onLazyLoad });

  return (
    <img
      src={srcImage}
      ref={node}
      {...imgProps}
    />
  );
};
