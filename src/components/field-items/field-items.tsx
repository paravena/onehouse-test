import './field-items.scss';
import { FieldItemType } from '../../models';
import FieldItem from '../field-item/field-item';

type Props = {
    items: FieldItemType[];
}

const FieldItems = ({ items }: Props) => (
    <div className="field-items">
        <div className="field-items__header">
            <div className="field-items__column">Columns</div>
            <div className="field-items__column">Mask</div>
            <div className="field-items__column">Encrypt</div>
        </div>
        <div className="field_items__data">
            {items.map(item => <FieldItem key={`field-item-${item.name}`} item={item}/>)}
        </div>
    </div>
);

export default FieldItems;
