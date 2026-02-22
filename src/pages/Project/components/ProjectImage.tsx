import BaseImageWrapper from '../../../components/shared/BaseImageWrapper/BaseImageWrapper';
import classes from './ProjectImage.module.css';

export default function ProjectImage({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <BaseImageWrapper
      wrapperClass={classes.imageWrapper}
      containerClass={classes.imageContainer}
      imgClass={classes.image}
      src={image}
      alt={name}
    />
  );
}
