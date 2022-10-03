import { useState, useEffect } from 'react';
import { getDimensions } from './ui';

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState(getDimensions(ref));
  useEffect(() => {
    const { width, height } = getDimensions(ref);
    if( width !== dimensions.width || height !== dimensions.height ) {
      setDimensions({ width, height });
    }
  }, [dimensions.height, dimensions.width, ref]);
  return dimensions;
}

export { useRefDimensions };