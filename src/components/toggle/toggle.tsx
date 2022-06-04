import './toggle.scss';
import AngleDown from "./angle-down";
import AngleRight from "./angle-right";

type Props = {
    toggle: boolean;
    onClick: () => void;
}
const Toggle = ({ toggle, onClick }: Props) => (
    <span className="toggle" onClick={onClick}>
        {
            toggle
                ? <AngleDown />
                : <AngleRight />
        }
    </span>
);

export default Toggle;