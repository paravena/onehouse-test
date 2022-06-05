import './toggle.scss';
import CaretDownIcon from './caret-down-icon';
import CaretRightIcon from './caret-right-icon';

type Props = {
    toggle: boolean;
    onClick: () => void;
}
const Toggle = ({ toggle, onClick }: Props) => (
    <span className="toggle" onClick={onClick}>
        {
            toggle
                ? <CaretDownIcon />
                : <CaretRightIcon />
        }
    </span>
);

export default Toggle;