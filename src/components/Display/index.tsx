import cssHandler from "../../utils/cssHandler";
import "./index.css";

interface Props {
  value: string;
}

const Display: React.FC<Props> = ({ value }) => {
  const event = (e: any) => console.log(e.type);
  return (
    <div
      className={cssHandler("display")}
      onTouchMove={event}
      onDrag={event}
      onTouchStart={event}
    >
      <p className={cssHandler("display-text")}>{value}</p>
    </div>
  );
};

export default Display;
