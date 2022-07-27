(async () =>
{
    const rpcHeaders = await fetch('https://api.skitsanos.com/api/utils/headers', {
        cache: 'no-cache',
        mode: 'cors'
    })
    .then(response => response.json());

    const {result} = rpcHeaders;

    Typebot.initBubble({
        url: 'https://viewer.typebot.io/skitsanos-intro',
        button: {
            color: 'rgb(var(--primary-6))'
        },
        hiddenVariables: {
            '$country': result.headers['x-country'],
            '$language': result.headers['x-language'],
            '$ip': result.headers['x-nf-client-connection-ip']
        }
    });
})();