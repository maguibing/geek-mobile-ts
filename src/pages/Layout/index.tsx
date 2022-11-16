import styles from './index.module.scss'
import { TabBar } from 'antd-mobile'

import Home from '@/pages/Home'
import Profile from '@/pages/Profile'

import Icon from '@/components/Icon'
import { useHistory, useLocation, Switch, Route } from 'react-router-dom'

const Layout = () => {
    const locationPath = useLocation()
    const history = useHistory()

    const tabs = [
        { path: '/home', icon: 'iconbtn_home', text: '首页' },
        { path: '/home/profile', icon: 'iconbtn_mine', text: '我的' },
    ]

    const changeRoute = (key: string) => {
        history.push(key)
    }

    return (
        <div className={styles.root}>
            <Switch>
                <Route path="/home" exact>
                    <Home></Home>
                </Route>
                <Route path="/home/profile" exact>
                    <Profile></Profile>
                </Route>
            </Switch>

            <TabBar className="tab-bar" activeKey={locationPath.pathname} onChange={key => changeRoute(key)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.path} icon={(active: boolean) => <Icon type={active ? `${item.icon}_sel` : item.icon}></Icon>} title={item.text} />
                ))}
            </TabBar>
        </div>
    )
}

export default Layout
