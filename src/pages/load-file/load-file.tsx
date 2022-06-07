import './load-file.scss';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { FieldItemType } from '../../models';
import jsonData from './test-data/test-data'
import { FieldItem } from '../../components';

type ActionType = {
    type: 'ADD_MASKED';
    field: FieldItemType;
} | {
    type: 'DELETE_MASKED';
    field: FieldItemType;
} | {
    type: 'ADD_ENCRYPTED';
    field: FieldItemType;
} | {
    type: 'DELETE_ENCRYPTED';
    field: FieldItemType;
}

type StateType = {
    maskedItems: FieldItemType[];
    encryptedItems: FieldItemType[];
}

const INITIAL_STATE: StateType = {
    maskedItems: [],
    encryptedItems: [],
}

const deleteFieldItem = (fieldItems: FieldItemType[], field: FieldItemType) => {
    const index = fieldItems.findIndex(f => f.name === field.name);
    return [...fieldItems.slice(0, index), ...fieldItems.slice(index + 1)]
}

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'ADD_MASKED':
            return {
                maskedItems: [...state.maskedItems, action.field],
                encryptedItems: state.encryptedItems,
            };
        case 'DELETE_MASKED':
            return {
                maskedItems: deleteFieldItem(state.maskedItems, action.field),
                encryptedItems: state.encryptedItems,
            };
        case 'ADD_ENCRYPTED':
            return {
                maskedItems: state.maskedItems,
                encryptedItems: [...state.encryptedItems, action.field],
            };
        case 'DELETE_ENCRYPTED':
            return {
                encryptedItems: deleteFieldItem(state.encryptedItems, action.field),
                maskedItems: state.maskedItems,
            };
    }
}


const LoadFile = () => {
    const [content, setContent] = useState(JSON.stringify(jsonData));
    const [input, setInput] = useState<FieldItemType>({} as FieldItemType);
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    const addMaskedItem = useCallback((field: FieldItemType) => dispatch({ field, type: 'ADD_MASKED' }), [dispatch]);
    const deleteMaskedItem = useCallback((field: FieldItemType) => dispatch({ field, type: 'DELETE_MASKED' }), [dispatch]);
    const addEncryptedItem = useCallback((field: FieldItemType) => dispatch({ field, type: 'ADD_ENCRYPTED' }), [dispatch]);
    const deleteEncryptedItem = useCallback((field: FieldItemType) => dispatch({ field, type: 'DELETE_ENCRYPTED' }), [dispatch]);

    useEffect(() => {
        setInput(jsonData as FieldItemType);
    }, [content]);

    return (
        <section className="load-file">
          <div className="load-file__form">
            <div className="load-file__form-item">
                <textarea cols={100} rows={20} onChange={e => setContent(e.target.value)}>{content}</textarea>
            </div>
          </div>
          <div className="load-file__result">
            <FieldItem item={input}
                addMaskedItem={addMaskedItem}
                deleteMaskedItem={deleteMaskedItem}
                addEncryptedItem={addEncryptedItem}
                deleteEncryptedItem={deleteEncryptedItem}
            />
          </div>
          <div className="load-file__output">
              <h2>Output</h2>
              <h3>Masked Fields</h3>
              <ul>
                {state.maskedItems.map(f => <li>{f.path?.join('.')}</li>)}
              </ul>
              <h3>Encrypted Fields</h3>
              <ul>
                {state.encryptedItems.map(f => <li>{f.path?.join('.')}</li>)}
              </ul>
          </div>
        </section>
    );
}

export default LoadFile;