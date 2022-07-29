import {useEffect, useId} from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-tomorrow';
import {useOutletContext, useParams} from 'umi';

export default () =>
{
    const uid = useId();
    const {id} = useParams();

    const {setTitle, setSubTitle} = useOutletContext();

    useEffect(() =>
    {
        setTitle('Arco App / Test scenario');
        setSubTitle(id);
    }, []);

    //https://ace.c9.io/#nav=howto
    //https://ace.c9.io/#nav=higlighter

    return <>
        <AceEditor name={`editor-${uid}`}
                   width={'100%'}
                   height={'100%'}
                   theme={'tomorrow'}
                   fontSize={14}
                   showGutter={true}
                   showPrintMargin={true}
                   setOptions={{
                       useWorker: false, fontFamily: 'IBM Plex Mono'
                   }}
                   mode={'json'}
                   editorProps={{}}
                   defaultValue={'{\n\t"demo": true\n}'}/>
    </>;
};