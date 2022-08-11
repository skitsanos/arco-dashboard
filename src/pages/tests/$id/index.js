import CodeEditor from '@/components/CodeEditor';
import {useEffect} from 'react';

import {useOutletContext, useParams} from 'umi';

export default () =>
{
    const {id} = useParams();

    const {setTitle, setSubTitle} = useOutletContext();

    useEffect(() =>
    {
        setTitle('Arco App / Test scenario');
        setSubTitle(id);
    }, []);

    return <>
        <CodeEditor value={`console.log("hello there (${id})?!");\n`}
                    onChange={data => console.log(data)}/>
    </>;
};