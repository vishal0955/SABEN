import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Daskboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/performance">Performance</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/candidatecard">Candidate  Score Card</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/recruitment">Recruitment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/composition">Composition</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/myissues">My Issues</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/orgnization">Orgnization</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
