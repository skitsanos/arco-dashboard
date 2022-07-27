import {useEffect} from 'react';
import {useOutletContext} from 'umi';

export default () =>
{
    const {setTitle, setSubTitle} = useOutletContext();

    useEffect(() =>
    {
        setTitle('');
        setSubTitle('');
    }, []);

    return <div>Content of pages/404.js</div>;
};