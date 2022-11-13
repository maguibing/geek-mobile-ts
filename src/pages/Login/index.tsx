import { login } from '@/store/actions/login'
import { loginForm } from '@/types/data'
import { Button, NavBar, Form, Input } from 'antd-mobile'
import { useDispatch } from 'react-redux'

import styles from './index.module.scss'

const Login = () => {
    const dispatch = useDispatch()
    const onFinish = (data: loginForm) => {
        if (!data.code) return
        dispatch(login(data))
    }

    return (
        <div className={styles.root}>
            <NavBar></NavBar>

            <div className="login-form">
                <h2 className="title">账号登录</h2>

                <Form onFinish={onFinish}>
                    <Form.Item className="login-item" name="mobile">
                        <Input placeholder="请输入手机号" />
                    </Form.Item>

                    <Form.Item className="login-item" name="code">
                        <Input placeholder="请输入验证码" autoComplete="off" />
                    </Form.Item>

                    <Form.Item noStyle>
                        <Button block type="submit" color="primary" className="login-submit">
                            登 录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
