import React, { Dispatch, SetStateAction } from 'react';
import { buttons } from '../data/buttons';

/**
 * This is the button component that displays the buttons for the user to click on
 * @param setEndPoint a setter for the endpoint
 * @returns JSX.Element
 * @constructor
 * @component
 * @example
 * <Button setEndPoint={setEndPoint} />
 *
 * @typedef ButtonProps
 * @property {(url: string) => void} setEndPoint - a setter for the endpoint
 */

interface ButtonProps {
  setEndPoint: Dispatch<SetStateAction<string>>;
}

const Button: React.FC<ButtonProps> = ({ setEndPoint }) => {
  return (
    <div className="submit-buttons">
      {buttons.map((button) => (
        <div key={button.id}>
          <span id="colon">{button.sideEmoji}</span>
          <button
            onClick={() => setEndPoint(button.url)}
            data-id={button.tag}
            data-url={button.url}
          >
            {button.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Button;
