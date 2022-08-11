import Footer from '@/components/Footer';

import {ReactComponent as AppLogo} from '@/components/Icons/logo.svg';
import {Button, Layout, Menu, PageHeader} from '@arco-design/web-react';
import {
    IconCaretLeft,
    IconCaretRight, IconCommand,
    IconHome,
    IconSelectAll,
    IconSettings,
    IconUser
} from '@arco-design/web-react/icon';
import {useState} from 'react';
import {history, Outlet} from 'umi';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

const layouts = () =>
{
    const [collapsed, setCollapsed] = useState(false);
    const [title, setTitle] = useState('Arco app');
    const [subTitle, setSubTitle] = useState('Demonstration app');

    const handleCollapsed = () =>
    {
        setCollapsed(!collapsed);
    };

    return <Layout className="app-layout">
        <Sider
            collapsed={collapsed}
            onCollapse={handleCollapsed}
            collapsible
            trigger={collapsed ? <IconCaretRight/> : <IconCaretLeft/>}
            breakpoint="xl">
            <div className="logo"
                 style={{
                     ...!collapsed && {marginTop: '2ch'}
                 }}><AppLogo width={!collapsed ? 48 : 24}/></div>
            <Menu defaultOpenKeys={['1']}
                  defaultSelectedKeys={['0_3']}
                  onClickMenuItem={key =>
                  {
                      history.push(key);
                  }}
                  style={{width: '100%'}}>
                <MenuItem key={'/'}><IconHome/>Home</MenuItem>

                <MenuItem key="/users"><IconUser/>Users</MenuItem>

                <MenuItem key="/tests"><IconSelectAll/>Tests</MenuItem>

                <SubMenu
                    key="4"
                    title={
                        <><IconSettings/>Settings</>
                    }>
                    <MenuItem key="4_1">Menu 1</MenuItem>
                    <MenuItem key="4_2">Menu 2</MenuItem>
                    <MenuItem key="4_3">Menu 3</MenuItem>
                </SubMenu>

                <MenuItem key={'/terminal'}><IconCommand/>Terminal</MenuItem>
            </Menu>
        </Sider>

        <Layout className={'app-workspace'}>
            <Header style={{paddingLeft: 20}}>
                <PageHeader title={title}
                            subTitle={subTitle}
                            breadcrumb={{
                                routes: [
                                    {
                                        path: '/',
                                        breadcrumbName: 'Home'
                                    },
                                    {
                                        path: '/channel',
                                        breadcrumbName: 'Channel'
                                    },
                                    {
                                        path: '/news',
                                        breadcrumbName: 'News'
                                    }
                                ]
                            }}
                            extra={<>
                                <Button type={'primary'}
                                        shape={'circle'}
                                        icon={<IconUser/>}/>
                            </>}
                />
            </Header>
            <Layout className={'app-content'}>
                <Content><Outlet context={{
                    setTitle,
                    setSubTitle
                }}/></Content>
                <Footer>arco.design demo app | https://github.com/skitsanos</Footer>
            </Layout>
        </Layout>
    </Layout>;
};

export default layouts;