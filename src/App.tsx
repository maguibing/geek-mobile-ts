import './App.scss'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Layout from './pages/Layout'
import NotFound from './pages/404'

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
						<Route>
							<NotFound></NotFound>
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	)
}

export default App
