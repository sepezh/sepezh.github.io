type Props = {
  wrapperClass: string;
  containerClass: string;
  imgClass: string;
  src: string;
  alt: string;
};

export default function BaseImageWrapper({
  wrapperClass,
  containerClass,
  imgClass,
  src,
  alt,
}: Props) {
  return (
    <div className={wrapperClass}>
      <div className={containerClass}>
        <img className={imgClass} src={src} alt={alt} />
      </div>
    </div>
  );
}
