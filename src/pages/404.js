import {useEffect} from 'react';
import {useOutletContext} from 'umi';

const Page404 = () =>
{
    const {setTitle, setSubTitle} = useOutletContext();

    useEffect(() =>
    {
        setTitle('');
        setSubTitle('');
    }, []);

    return <div>Content of pages/404.js</div>;
};

export default Page404;