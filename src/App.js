import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Footer from './Footer.js'
import Contact from './Contact.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
	<Header></Header>

	<Router>
		<Switch>
			<Route path="/contact">
				<Contact />	
			</Route>

			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</Router>

	<Footer />
    </div>
  );
}

export default App;
