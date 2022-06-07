import './field-item.scss';
import { useState } from 'react';
import { FieldItemType } from '../../models';
import { FieldItems, Toggle, Checkbox } from '../index';

type Props = {
    path?: string[];
    item: FieldItemType;
    addMaskedItem: (item: FieldItemType) => void;
    deleteMaskedItem: (item: FieldItemType) => void;
    addEncryptedItem: (item: FieldItemType) => void;
    deleteEncryptedItem: (item: FieldItemType) => void;
}

const FieldItem = ({ path = [], item, addMaskedItem, deleteMaskedItem, addEncryptedItem, deleteEncryptedItem }: Props) => {
    const [toggle, setToggle] = useState(false);
    const itemHasChildren = (item: FieldItemType) => item.fields !== undefined && item.fields.length > 0;
    return (
        <div className="field-item" key={`field-${item.name}`}>
            <div className="field-item__data">
                {
                    item.fields !== undefined && item.fields.length > 0
                        ? <Toggle key={`toggle-${item.name}`} toggle={toggle} onClick={() => setToggle(!toggle)} />
                        : <></>
                }
                <div className="field-item__name">{item.name}</div>
                <div className="field-item__check">
                    {
                        !itemHasChildren(item) && (
                            <Checkbox
                                name={`${item.name}-mask`}
                                onClick={value => value ? addMaskedItem({...item, path}) : deleteMaskedItem({...item, path})}
                            />
                        )
                    }
                </div>
                <div className="field-item__check">
                    {
                        !itemHasChildren(item) && (
                            <Checkbox
                                name={`${item.name}-encrypt`}
                                onClick={value => value ? addEncryptedItem({...item, path}): deleteEncryptedItem({...item, path})}
                            />
                        )
                    }
                </div>
            </div>
            {
                item.fields !== undefined && item.fields.length > 0 && toggle
                    ? (
                        <div className="field-item__fields">
                            <FieldItems
                              path={path}
                              items={item.fields}
                              addMaskedItem={addMaskedItem}
                              deleteMaskedItem={deleteMaskedItem}
                              addEncryptedItem={addEncryptedItem}
                              deleteEncryptedItem={deleteEncryptedItem}
                            />
                        </div>
                    )
                    : <></>
            }
        </div>
    );
};

export default FieldItem;