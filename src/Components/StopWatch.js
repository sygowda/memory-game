import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';

const Stopwatch = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    render={({  hours, minutes, seconds }) => {
      return (
        <div className = "stop">
            { hours } : { minutes } : { seconds }
        </div>
      );
    }}
   />
);

export default Stopwatch;