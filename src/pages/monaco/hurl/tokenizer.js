//https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages
const tokenizer = {
    root: [
        [/".*?"/, 'string'],

        [/\d+/, 'digit'],

        [/#.*$/, 'comment'],

        /*[
         /@?[a-zA-Z][\w$]*!/,
         {
         cases: {
         '@keywords': 'keyword',
         '@default': 'variable'
         }
         }
         ],*/

        [/^(CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PUT|TRACE)/, 'http-method'],

        [/^(CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PUT|TRACE).*\n/, 'http-request'],

        [/^(^HTTP\/.*$)/, 'http-version'],

        [/\[.*]$/, 'section'],

        [/{{.*}}/, 'variable'],

        [/[{}]/, 'brackets'],

        [/\s(base64|body|bytes|cookie|csrf_token|duration|exists|file|header|hex|jsonpath|regex|screencapability|sha256|status|variable|xpath)\s/, 'functions'],

        [/\s(startsWith|endsWith|contains|not contains|includes|matches|exists|isInteger|isFloat|isBoolean|isString|isCollection)\s/, 'predicates']
    ]
};

export default tokenizer;