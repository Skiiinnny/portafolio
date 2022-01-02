import Link from 'next/link'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
        <Link href="/"><a className="navbar-brand" >
        Nataniel Soto
      </a></Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          
          <li className="nav-item">
              <Link  href="/github"><a className="nav-link">
              Github
            </a></Link>
            
          </li>
          <li className="nav-item">
              <Link  href="/sobreMi"><a className="nav-link">
              Sobre mi
            </a></Link>
            
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;
