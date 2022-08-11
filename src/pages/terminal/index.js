import {Terminal} from 'primereact/terminal';
import {TerminalService} from 'primereact/terminalservice';
import {useEffect} from 'react';

const page = () =>
{
    const commandHandler = (text) =>
    {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command)
        {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = `Hola ${text.substring(argsIndex + 1)}!`;
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response)
        {
            TerminalService.emit('response', response);
        }
        else
        {
            TerminalService.emit('clear');
        }
    };

    useEffect(() =>
    {
        TerminalService.on('command', commandHandler);

        return () =>
        {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return <div className={'app-terminal'}>
        <Terminal welcomeMessage={'arcoOS. Welcome'}
                  prompt={'demo$'}/>
    </div>;
};

export default page;