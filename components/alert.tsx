import { useState } from "react";
import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/solid";

interface Props {
  alertObj?: { type: string, message: string }
}
interface AlertConfig {
  color?: string,
  styles?: string,
  title?: string,
  message?: string
}


const Alert = (props: Props) => {
  const { alertObj } = props;
  const [isShowing, setShowing] = useState(alertObj !== null ? true : false);
  const config = alert_config(alertObj);

  const handleCloseAlert = () => {
    setShowing(false);
  };

  return (
    <div className={`${isShowing ? config?.styles : "hidden"}`} role="alert">
      <div className={`flex space-x-1`}>
        {config?.title == "error" ? (
          <ExclamationCircleIcon className={`h-5 w-5 `} />
        ) : (
          <CheckCircleIcon className={`h-5 w-5 `} />
        )}
        <span className="font-bold">{config?.title}</span>
      </div>
      <div>
        <span className="">{config?.message}</span>
      </div>
      <button className={`absolute top-3 right-3 `} onClick={handleCloseAlert}>
        <span className={``}>
          <svg
            className={`text-${config?.color}-500 h-6 w-6 fill-current`}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>{config?.title}</title>

            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

function alert_config(alertObj?: { type: string, message: string }) {
  let config: AlertConfig = {
    color: 'black',
    styles: 'text-sm flex-col justify-between space-y-2 align-center absolute w-3/4 left-0 right-0 mx-auto bottom-[10%] rounded border px-3 py-3'
  };

  if (alertObj?.type) {
    switch (alertObj?.type.toLowerCase()) {
      case "error":
        config.title = "Oops! We hit a snag...";
        config.message = alertObj.message;
        config.styles += " bg-red-100 border-red-400 text-red-700";
        break;

      case "success":
        config.title = "Success!";
        config.message = alertObj.message;
        config.styles += " bg-green-100 border-green-400 text-green-700";
        break;

      default:
        break;
    }
  }
  return config;
}

export default Alert;
