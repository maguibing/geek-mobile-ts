import { login } from '@/store/actions/login'
import { loginForm } from '@/types/data'
import { Button, NavBar, Form, Input, Toast } from 'antd-mobile'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import styles from './index.module.scss'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const onFinish = async (data: loginForm) => {
        if (!data.code) return
        await dispatch(login(data))
        Toast.show({
            content: '登录成功',
            afterClose() {
                history.push('/home')
            },
        })
    }

    return (
        <div className={styles.root}>
            <NavBar></NavBar>
            <div className="login-form">
                <h2 className="title">账号登录</h2>
                <Form
                    onFinish={onFinish}
                    initialValues={{
                        mobile: '15979973954',
                        code: '246810',
                    }}
                >
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
