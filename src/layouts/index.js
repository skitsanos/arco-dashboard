import Footer from '@/components/Footer';

import {ReactComponent as AppLogo} from '@/components/Icons/logo.svg';
import {Button, Layout, Menu, Message, PageHeader} from '@arco-design/web-react';
import {IconCalendar, IconCaretLeft, IconCaretRight, IconHome, IconUser} from '@arco-design/web-react/icon';
import {useState} from 'react';
import {Outlet, history} from 'umi';

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
                      Message.info({
                          content: `You select ${key}`,
                          showIcon: true
                      });

                      history.push(key);
                  }}
                  style={{width: '100%'}}>
                <MenuItem key="0_1"
                          disabled>
                    <IconHome/>
                    Menu 1
                </MenuItem>
                <MenuItem key="0_2">
                    <IconCalendar/>
                    Menu 2
                </MenuItem>
                <MenuItem key="0_3">
                    <IconCalendar/>
                    Menu 3
                </MenuItem>
                <SubMenu key="1"
                         title={
                             <span>
                  <IconCalendar/>
                  Navigation 1
                </span>
                         }>
                    <MenuItem key="1_1">Menu 1</MenuItem>
                    <MenuItem key="1_2">Menu 2</MenuItem>
                    <SubMenu key="2"
                             title="Navigation 2">
                        <MenuItem key="2_1">Menu 1</MenuItem>
                        <MenuItem key="2_2">Menu 2</MenuItem>
                    </SubMenu>
                    <SubMenu key="3"
                             title="Navigation 3">
                        <MenuItem key="3_1">Menu 1</MenuItem>
                        <MenuItem key="3_2">Menu 2</MenuItem>
                        <MenuItem key="3_3">Menu 3</MenuItem>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="4"
                    title={
                        <span>
                  <IconCalendar/>
                  Navigation 4
                </span>
                    }>
                    <MenuItem key="4_1">Menu 1</MenuItem>
                    <MenuItem key="4_2">Menu 2</MenuItem>
                    <MenuItem key="4_3">Menu 3</MenuItem>
                </SubMenu>
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