import { BiSolidRightArrow } from "react-icons/bi";

const ALERTS = [
  // "this is an alert example",
];

const Alerts = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="uppercase">alerts</h1>
      {ALERTS.length === 0 && (
        <h2 className="text-sm text-gray-300">Currently no alerts</h2>
      )}
      <div className="space-y-4">
        {ALERTS.map((alert, index) => (
          <div
            key={index}
            className="flex items-center gap-6 text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <BiSolidRightArrow className="text-white group-hover:translate-x-2 transition-all duration-300" />
            {alert}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
