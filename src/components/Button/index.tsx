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
  onClick = () => {},
}) => {
  return (
    <button
      type="button"
      className={cssHandler("button", buttonType)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
