import React, { FunctionComponent, useMemo, useState } from 'react';

import { Waypoint } from 'react-waypoint';

interface IProps {
  value: number;
}

const Rating: FunctionComponent<IProps> = ({ value }) => {
  const [inView, setInview] = useState<boolean>(false);

  /**
   * Get wrapper's CSS class based on in view state
   * @returns String
   */
  const wrapperClass = useMemo(() => {
    const classes = ['rating-wrapper'];

    if (inView) {
      classes.push('in-view');
    }

    return classes.join(' ');
  }, [inView]);

  const ratingClass = useMemo(() => {
    return `rating rating-${inView ? value * 10 : 0}`;
  }, [inView]);

  return (
    <div className={wrapperClass}>
      <Waypoint onEnter={() => setInview(true)} />
      <div className={ratingClass} />
    </div>
  );
};
export default Rating;
