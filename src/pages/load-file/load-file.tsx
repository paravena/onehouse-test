import './load-file.scss';
import { useEffect, useState } from 'react';
import { FieldItemType } from '../../models';
import jsonData from './test-data/test-data'
import { FieldItem } from '../../components';

const LoadFile = () => {
    const [content, setContent] = useState(JSON.stringify(jsonData));
    const [input, setInput] = useState<FieldItemType>({} as FieldItemType);

    useEffect(() => {
        console.log('DATA: ', jsonData);
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
            <FieldItem item={input} />
          </div>
        </section>
    );
}

export default LoadFile;