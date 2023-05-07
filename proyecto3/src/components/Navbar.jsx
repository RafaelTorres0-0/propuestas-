
import "../styles/Navbar.css"

function Navbar () {
    
    return(
        <nav className="nav-bar">
  <div className="nav-hold">
    <div className="nav-logo">
      <a href="#">LogoDCYT</a>
    </div>
    <div className="nav-menu" id="nav">
      ☰
    </div>
    <ul className="nav-items">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">About me</a>
      </li>
      <li>
        <a href="#">Lorem Ipsum</a>
      </li>
    </ul>
  </div>
</nav>
    )
    
}

export default Navbar