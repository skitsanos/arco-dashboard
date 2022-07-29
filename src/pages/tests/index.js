import {Card, Space, Avatar} from '@arco-design/web-react';
import {IconArrowRight, IconCode} from '@arco-design/web-react/icon';
import {useEffect} from 'react';
import {Link, useOutletContext} from 'umi';
import chance from 'chance';

const cards = Array.from({length: 25}, () => ({
    id: chance().guid()
}));

const Content = ({item, icon, children}) =>
{
    return <Space
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
        <Space>
            <Avatar style={{
                backgroundColor: 'rgb(var(--primary-3))'
            }}>{icon}</Avatar>
            {children}
        </Space>

        <span className="icon-hover">
            <Link to={item.id}>
                <IconArrowRight style={{
                    cursor: 'pointer'
                }}/>
            </Link>
          </span>

    </Space>;
};

export default () =>
{
    const {setTitle, setSubTitle} = useOutletContext();

    useEffect(() =>
    {
        setTitle('Arco App / Tests');
        setSubTitle('Demonstrating flexible grid');
    }, []);

    return <div className={'cards-grid'}>
        {cards.map((card, key) => <Card key={key}
                                        className={'card-item'}
                                        hoverable={'true'}>
                <Content item={card}
                         icon={<IconCode/>}>
                    {card.id}
                </Content>
            </Card>
        )}
    </div>;
};