import { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const Alert = ({ alertObj }) => {
  const { type, message } = alertObj;
  console.log(alertObj);
  const [isShowing, setShowing] = useState(alertObj !== null ? true : false);
  let obj = {
    styles: `text-sm flex-col justify-between space-y-2 align-center absolute w-3/4 left-0 right-0 mx-auto bottom-[10%] rounded border px-3 py-3 `,
  };
  if (type) {
    let lowercaseType = type.toLowerCase();
    switch (lowercaseType) {
      case "error":
        obj.title = "Oops! We hit a snag...";
        obj.styles = `${obj.styles} bg-red-100 border-red-400 text-red-700 `;
        obj.message = message;
        break;

      default:
        break;
    }
  }

  const handleCloseAlert = () => {
    setShowing(false);
  };

  return (
    <div className={`${isShowing ? obj.styles : "hidden"}`} role="alert">
      <div className={`flex space-x-1`}>
        <ExclamationCircleIcon className={`h-5 w-5 `} />
        <span className="font-bold">{obj?.title}</span>
      </div>
      <div>
        <span className="">{obj?.message}</span>
      </div>
      <button className={`absolute top-3 right-3 `} onClick={handleCloseAlert}>
        <span className={``}>
          <svg
            className={`text-${obj.color}-500 h-6 w-6 fill-current`}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>{obj.title}</title>

            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Alert;
