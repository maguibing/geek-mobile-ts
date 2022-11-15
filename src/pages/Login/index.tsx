import { login } from '@/store/actions/login'
import { loginForm } from '@/types/data'
import { Button, NavBar, Form, Input, Toast, InputRef } from 'antd-mobile'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useRef } from 'react'
import styles from './index.module.scss'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    // 定时器相关
    // const [time, setTime] = useState(0)
    // const timerRef = useRef(-1)

    const moibleRef = useRef<InputRef>(null)
    const [form] = Form.useForm()

    // 提交表单
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

    // 获取验证码
    // const getCode = async () => {
    // const mobile = form.getFieldValue('mobile')
    // const errMsg = form.getFieldError('mobile')
    // if (!mobile || errMsg.length > 0) {
    //     moibleRef.current?.focus()
    //     return
    // }
    // await dispatch(ongetCode(mobile))
    // setTime(5)
    // timerRef.current = window.setInterval(() => {
    //     setTime(time => time - 1)
    // }, 1000)
    // }
    // 清除定时器
    // useEffect(() => {
    //     if (time === 0) {
    //         clearInterval(timerRef.current)
    //     }
    // }, [time])

    return (
        <div className={styles.root}>
            {/* <span onClick={getCode}>{time === 0 ? '发送' : `${time}`}</span> */}

            <NavBar></NavBar>
            <div className="login-form">
                <h2 className="title">账号登录</h2>
                <Form
                    form={form}
                    onFinish={onFinish}
                    initialValues={{
                        mobile: '15979973954',
                        code: '246810',
                    }}
                >
                    <Form.Item className="login-item" name="mobile">
                        <Input placeholder="请输入手机号" ref={moibleRef} />
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
