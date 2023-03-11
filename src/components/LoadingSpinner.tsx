import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-4">
        <svg
          className="animate-spin h-16 w-16 text-gray-100"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm16 0a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zM4 12a8 8 0 018-8v-4C2.373 0 0 2.373 0 5.999h4zm16 0a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4z"
          />
        </svg>
        <p className="text-gray-100 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
