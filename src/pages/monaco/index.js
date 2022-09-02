import keywords from '@/pages/monaco/hurl/keywords';
import theme from '@/pages/monaco/hurl/theme';
import tokenizer from '@/pages/monaco/hurl/tokenizer';
import Editor from '@monaco-editor/react';
import {useRef} from 'react';

const Monaco = () =>
{
    const editorRef = useRef(null);

    const handleEditorWillMount = monaco =>
    {
        monaco.languages.register({
            id: 'hurl'
        });

        //https://stackoverflow.com/questions/59377254/how-to-create-monaco-editor-custom-language-in-angular

        monaco.languages.setMonarchTokensProvider('hurl', {
            keywords,
            tokenizer
        });

        monaco.editor.defineTheme('hurl', theme);
    };

    const handleEditorDidMount = (editor, monaco) =>
    {
        editorRef.current = editor;
    };

    const handleEditorChange = (value, event) =>
    {
        console.log(value);
    };

    return <Editor defaultLanguage={'hurl'}
                   theme={'hurl'}
                   defaultValue={`GET https://api.skitsanos.com/api/utils/headers\n#hello\n[Asserts]`}
                   onChange={handleEditorChange}
                   beforeMount={handleEditorWillMount}
                   onMount={handleEditorDidMount}/>;
};

export default Monaco;