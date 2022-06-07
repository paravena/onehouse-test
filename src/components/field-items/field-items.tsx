import './field-items.scss';
import { FieldItemType } from '../../models';
import FieldItem from '../field-item/field-item';

type Props = {
    items: FieldItemType[];
    addMaskedItem: (item: FieldItemType) => void;
    deleteMaskedItem: (item: FieldItemType) => void;
    addEncryptedItem: (item: FieldItemType) => void;
    deleteEncryptedItem: (item: FieldItemType) => void;
}

const FieldItems = ({ items, addMaskedItem, deleteMaskedItem, addEncryptedItem, deleteEncryptedItem }: Props) => (
    <div className="field-items">
        <div className="field-items__header">
            <div className="field-items__column">Columns</div>
            <div className="field-items__column">Mask</div>
            <div className="field-items__column">Encrypt</div>
        </div>
        <div className="field_items__data">
            {items.map(item => <FieldItem
                    key={`field-item-${item.name}`}
                    item={item}
                    addMaskedItem={addMaskedItem}
                    deleteMaskedItem={deleteMaskedItem}
                    addEncryptedItem={addEncryptedItem}
                    deleteEncryptedItem={deleteEncryptedItem}
                />
            )}
        </div>
    </div>
);

export default FieldItems;
