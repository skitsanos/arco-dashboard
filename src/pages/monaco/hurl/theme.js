const theme = {
    base: 'vs',
    inherit: false,
    colors: {
        'editor.foreground': '#000000'
    },
    rules: [
        {
            token: 'comment',
            foreground: '#5a8a8a',
            fontStyle: 'italic'
        },
        {
            token: 'string',
            foreground: '#314b4b'
        },

        {
            token: 'digit',
            foreground: '#0a4fa6'
        },

        {
            token: 'brackets',
            foreground: '#6244aa',
            fontStyle: 'bold'
        },

        {
            token: 'http-method',
            foreground: '#4472aa',
            fontStyle: 'bold'
        },

        {
            token: 'http-request',
            foreground: '#4472aa',
            fontStyle: 'normal'
        },

        {
            token: 'section',
            foreground: '#ff6600'
        },

        {
            token: 'variable',
            foreground: '#aa4472'
        },

        {
            token: 'functions',
            foreground: '#046cea'
        }
    ]
};

export default theme;