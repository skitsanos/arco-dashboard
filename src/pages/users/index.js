import {useEffect} from 'react';
import {useOutletContext} from 'umi';

export default () =>
{
    const {setTitle} = useOutletContext();

    useEffect(() =>
    {
        setTitle('Arco App / Users');
    }, []);

    return <div>Content of pages/users/index.js</div>;
};