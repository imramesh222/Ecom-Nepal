import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg">
      <div className="collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        </ul>
      </div>
    </nav> */}
      <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Ecommerce Site</a>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            {/* <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>

<h3 className="	font-weight: 900;">Lorem ipsum dolor sit amet.</h3>
      <h1>My name is Ramesh Rawat</h1>

    </>
  );
}

export default App;
