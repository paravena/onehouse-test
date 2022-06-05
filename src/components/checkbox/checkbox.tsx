import './checkbox.scss';
import CheckIcon from './check-icon';

type Props = {
    name: string;
    checked: boolean;
    onClick: (value: boolean) => void;
}

const Checkbox = ({ name, checked, onClick }: Props) => {

    return (
        <div className="checkbox">
            <label htmlFor={`checkbox-${name}`}>
                <input type="checkbox" id={`checkbox-${name}`} />
                <CheckIcon />
            </label>
        </div>
    );
};

export default Checkbox;