import {javascript} from '@codemirror/lang-javascript';
import {EditorState, StateField} from '@codemirror/state';

import {EditorView} from '@codemirror/view';
import {basicSetup} from 'codemirror';
import {useEffect, useRef, useState} from 'react';

const CodeEditor = ({autoFocus, readOnly, onChange, value}) =>
{
    const ref = useRef();

    const [editorState, setEditorState] = useState(undefined);
    const [editorView, setEditorView] = useState(undefined);

    useEffect(() =>
    {
        if (ref.current && !editorState)
        {
            const theme = EditorView.theme({
                '&': {
                    fontSize: '14px',
                    font: '\'IBM Plex Mono\', monospace !important'
                },
                '.cm-activeLine': {
                    backgroundColor: '#eef4f4'
                },
                '.cm-gutters': {
                    backgroundColor: '#f3f4f4',
                    color: '#666',
                    border: 'none'
                },
                '&.cm-focused .cm-cursor': {
                    borderLeftColor: '#0e9'
                }
            });

            const updatesTracker = EditorView.updateListener.of(viewUpdate =>
            {
                if (viewUpdate.docChanged && typeof onChange === 'function')
                {
                    const {doc} = viewUpdate.state;
                    onChange(doc.toString());
                }
            });

            const state = EditorState.create({
                doc: value,
                extensions: [
                    theme,
                    updatesTracker,
                    basicSetup,
                    javascript()
                ]
            });

            setEditorState(state);

            const view = new EditorView({
                state,
                parent: ref.current
            });

            if (autoFocus)
            {
                view.focus();
            }

            setEditorView(view);
        }

        return () =>
        {
            if (editorView)
            {
                setEditorState(undefined);
                setEditorView(undefined);
            }
        };
    }, [editorState]);

    useEffect(
        () => () =>
        {
            if (editorView)
            {
                editorView.destroy();
                setEditorView(undefined);
            }
        },
        [editorView]
    );

    return <div ref={ref}
                className={'code-editor'}/>;
};

CodeEditor.defaultProps = {
    autoFocus: false,
    readOnly: false,
    value: ''
};

export default CodeEditor;