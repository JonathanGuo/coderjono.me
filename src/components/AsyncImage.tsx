import React, { FunctionComponent, useEffect, useState } from 'react';

interface IProps {
  src: string;
  alt?: string;
  className?: string;
}

const AsyncImage: FunctionComponent<IProps> = ({
  src,
  alt = '',
  className = '',
}) => {
  const [dataSrc, setDataSrc] = useState<string>();

  useEffect(() => {
    async function loadImage() {
      const importedSrc = await import(`../images/${src}`);
      setDataSrc(importedSrc);
    }

    loadImage();
  }, [src]);

  if (dataSrc) {
    return null;
  }

  return <img className={className} src={dataSrc} alt={alt} />;
};

AsyncImage.defaultProps = {
  alt: '',
  className: '',
};

export default AsyncImage;
