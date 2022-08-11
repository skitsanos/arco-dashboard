import CodeEditor from '@/components/CodeEditor';
import {useEffect, useId, useRef} from 'react';

import {useOutletContext, useParams} from 'umi';

export default () =>
{
    const uid = useId();
    const {id} = useParams();
    const ref = useRef();

    const {setTitle, setSubTitle} = useOutletContext();

    useEffect(() =>
    {
        setTitle('Arco App / Test scenario');
        setSubTitle(id);
    }, []);


    return <>
        <CodeEditor onChange={()=>{}}/>
    </>;
};