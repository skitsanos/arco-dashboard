export default {
    title: 'Arco Design demo app',

    styles: [
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&display=swap',
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap'
    ],

    headScripts: [
        'console.log("arco-dashboard, https://github.com/skitsanos/arco-dashboard")'
    ],

    scripts: [
        'https://unpkg.com/typebot-js@2.2',
        '/typebot.js'
    ],

    svgr: {},

    proxy: {
        '/api': {
            target: 'https://api.skitsanos.com/',
            changeOrigin: true
        }
    },

    copy: [
    ]
};