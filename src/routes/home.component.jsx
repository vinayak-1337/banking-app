import { Outlet, Link } from "react-router-dom";
// import logo1 from '../assets/icon-1.png';
// import logo2 from '../assets/icon-2.png';
// import logo3 from '../assets/icon-3.png';

export default function Home() {
  return (
    <>
      <header className="App-header">
        <Link to="/">
          <h1 id="title">Some Bank</h1>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      {/*      <footer>
      	<div className="companies-container">
      		<img className="logo" src={logo1}/>
      		<img className="logo" src={logo2}/>
    		  <img className="logo" src={logo3}/>
      	</div>
      </footer>*/}
      {/*<Link className="nav-link" to="../">
				Back
			</Link>*/}
    </>
  );
}
