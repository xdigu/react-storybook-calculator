import "./index.css";

import cssHandler from "../../utils/cssHandler";

type ButtonType = "NUMBER" | "LARGE_NUMBER" | "OPERATOR" | "LIGHT";

interface Props {
  label: string;
  buttonType?: ButtonType;
  isLastClicked?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  label,
  buttonType = "NUMBER",
  isLastClicked = false,
  onClick = () => {},
}) => {
  const modifiers = [
    buttonType,
    `${buttonType}-${isLastClicked ? "clicked" : "unclicked"}`,
  ];

  return (
    <button
      type="button"
      className={cssHandler("storybook-button", modifiers)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
