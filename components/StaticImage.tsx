import { ImgHTMLAttributes } from 'react';

interface StaticImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function StaticImage({ src, alt, className, ...props }: StaticImageProps) {
  const imageSrc = src.startsWith('/') ? `/future-bme-2026${src}` : src;
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
