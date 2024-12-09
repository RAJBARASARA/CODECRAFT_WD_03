import React from "react";

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">
          {formattedLocalTime}
          {/* Friday, 6 December 2024 | Local time:10:10 AM */}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium">{`${name},${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
