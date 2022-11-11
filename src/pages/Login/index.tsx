import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Style from './index.module.scss'

const Login = () => {
	const store = useSelector(state => state)

	useEffect(() => {
		console.log(store)
	})

	return (
		<>
			<div className={Style.root}>
				登陆
				<span>测试</span>
				<svg className="icon" aria-hidden="true">
					{/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
					<use xlinkHref="#iconbtn_like_sel"></use>
				</svg>
			</div>
		</>
	)
}

export default Login
