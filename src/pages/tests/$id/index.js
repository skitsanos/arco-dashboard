import {useEffect, useId, useRef} from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow';
import {useOutletContext, useParams} from 'umi';

window['ace'].config.set('workerPath', '/ace/');

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

    const codeChanged = v =>
    {
        const {editor} = ref.current;
        const annotation_lists = editor.getSession().getAnnotations();
        console.log(annotation_lists)
    };

    //https://ace.c9.io/#nav=howto
    //https://ace.c9.io/#nav=higlighter

    return <>
        <AceEditor name={`editor-${uid}`}
                   ref={ref}
                   width={'100%'}
                   height={'100%'}
                   theme={'tomorrow'}
                   fontSize={14}
                   showGutter={true}
                   showPrintMargin={true}
                   setOptions={{
                       useWorker: true,
                       fontFamily: 'IBM Plex Mono'
                   }}
                   mode={'javascript'}
                   editorProps={{}}
                   defaultValue={'{\n\t"demo": true\n}'}
                   onChange={codeChanged}/>
    </>;
};