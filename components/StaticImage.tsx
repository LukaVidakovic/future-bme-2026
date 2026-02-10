import { ImgHTMLAttributes } from 'react';

interface StaticImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function StaticImage({ src, alt, className, ...props }: StaticImageProps) {
  // No basePath prefix - images are now relative
  const imageSrc = src;
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
