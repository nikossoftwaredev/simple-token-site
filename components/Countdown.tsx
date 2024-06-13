"use client";
import moment from "moment-timezone";
import { useEffect, useState } from "react";

const addPadStart = (num: number) => num.toString().padStart(2, "0");

const calculateTimeFromNow = () => {
  const endDate = moment.tz("2024-06-14 00:00:00", "America/New_York");
  const currentDate = moment();

  const isOver = currentDate.isAfter(endDate);

  // Convert to days, hours, minutes, and seconds
  const days = addPadStart(endDate.diff(currentDate, "days"));
  endDate.subtract(days, "days"); // Subtract the counted days

  const hours = addPadStart(endDate.diff(currentDate, "hours"));
  endDate.subtract(hours, "hours"); // Subtract the counted hours

  const minutes = addPadStart(endDate.diff(currentDate, "minutes"));
  endDate.subtract(minutes, "minutes"); // Subtract the counted minutes

  const seconds = addPadStart(endDate.diff(currentDate, "seconds"));

  return { days, hours, minutes, seconds, isOver };
};

const Countdown = () => {
  const [timeFromNow, setTimeFromNow] = useState(calculateTimeFromNow());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeFromNow(calculateTimeFromNow());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Depend on endDate to recalculate if it changes

  if (timeFromNow.isOver) {
    return <p className="text-3xl font-bold">Happy birthday!</p>;
  }

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content font-bold">
          <span className="countdown font-mono text-2xl">
            {timeFromNow.days}
          </span>
          D
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content font-bold">
          <span className="countdown font-mono text-2xl">
            {timeFromNow.hours}
          </span>
          H
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content font-bold">
          <span className="countdown font-mono text-2xl">
            {timeFromNow.minutes}
          </span>
          M
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content font-bold">
          <span className="countdown font-mono text-2xl">
            {timeFromNow.seconds}
          </span>
          S
        </div>
      </div>
      <br />
    </>
  );
};

export default Countdown;
