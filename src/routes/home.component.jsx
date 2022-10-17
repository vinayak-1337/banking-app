import RegisterForm from "../components/register-form.component";
import { Outlet, Link} from "react-router-dom";
 
export default function Home() {
	return (
		<>
			<header className="App-header">
				<Link to="/">
      	  <h1 id="title">Some Bank</h1>
      	</Link>
      </header>
      <main>
        <Outlet/>
      </main>
      {/*<Link className="nav-link" to="../">
				Back
			</Link>*/}
		</>
	)
}