import BaseImageWrapper from '../../../components/shared/BaseImageWrapper/BaseImageWrapper';
import classes from './ProjectImagesGrid.module.css';

export default function ProjectImagesGrid({ images }: { images: string[] }) {
  return (
    <div className={classes.imagesGrid}>
      {images.map((img, index) => (
        <BaseImageWrapper
          key={index}
          wrapperClass={
            index === 2 ? classes.imageWrapperWide : classes.imageWrapper
          }
          containerClass={classes.imageContainer}
          imgClass={classes.image}
          src={img}
          alt={`project-image-${index}`}
        />
      ))}
    </div>
  );
}
