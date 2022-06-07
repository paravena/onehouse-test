import './checkbox.scss';
import CheckIcon from './check-icon';
import {useState} from "react";

type Props = {
    name: string;
    onClick: (value: boolean) => void;
}

const Checkbox = ({ name, onClick }: Props) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="checkbox">
            <label htmlFor={`checkbox-${name}`}>
                <input type="checkbox" id={`checkbox-${name}`} checked={checked} onChange={() => {
                    setChecked(!checked);
                    onClick(!checked);
                }} />
                <CheckIcon />
            </label>
        </div>
    );
};

export default Checkbox;