import './field-item.scss';
import { useState } from 'react';
import { FieldItemType } from '../../models';
import { FieldItems, Toggle, Checkbox } from '../index';

type Props = {
    item: FieldItemType;
}

const FieldItem = ({ item }: Props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="field-item" key={`field-${item.name}`}>
            <div className="field-item__data">
                {
                    item.fields !== undefined && item.fields.length > 0
                        ? <Toggle key={`toggle-${item.name}`} toggle={toggle} onClick={() => setToggle(!toggle)} />
                        : <></>
                }
                <div className="field-item__name">{item.name}</div>
                <div className="field-item__check"><Checkbox name={`${item.name}-mask`} onClick={() => {}} checked={false} /></div>
                <div className="field-item__check"><Checkbox name={`${item.name}-encrypt`} onClick={() => {}} checked={false} /></div>
            </div>
            {
                item.fields !== undefined && item.fields.length > 0 && toggle
                    ? (
                        <div className="field-item__fields">
                            <FieldItems items={item.fields}/>
                        </div>
                    )
                    : <></>
            }
        </div>
    );
};

export default FieldItem;