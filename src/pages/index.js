import {useEffect} from 'react';
import {useOutletContext} from 'umi';

export default () =>
{
    const {setTitle} = useOutletContext();

    useEffect(() =>
    {
        setTitle('Arco App / Home');
    }, []);

    return <div>Content of pages/index.js</div>;
};