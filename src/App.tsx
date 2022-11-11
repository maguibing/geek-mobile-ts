import './App.scss'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Layout from './pages/Layout'

const App = () => {
	return (
		<>
			<Router>
				<div className="app">
					<Switch>
						<Redirect exact from="/" to="/login"></Redirect>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/home">
							<Layout></Layout>
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	)
}

export default App
