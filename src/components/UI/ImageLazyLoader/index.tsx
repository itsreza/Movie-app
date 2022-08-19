import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import classes from './index.module.scss';
type Props = {
  alt?: string;
  src: string;
};

function ImageLazyLoader({ src, alt }: Props) {
  return (
    <LazyLoadImage
      wrapperClassName={classes.image}
      width="100%"
      height="480px"
      alt={alt}
      effect="blur"
      src={src}
    />
  );
}

export default ImageLazyLoader;
