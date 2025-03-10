import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Home() {
    return (
        <div className="background">
             <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand>Abyon Ausar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <NavDropdown title="Resumes" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://docs.google.com/document/d/1R3vjehY55V9Kma0rHOP_HlB2u69No3oDtBN66UQ9VdA/edit">Actor Resume</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Where to Find Me" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/abyonmcinnis/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.facebook.com/oSwiftt/">Facebook</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/oswiftt/">Instagram</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.imdb.com/name/nm11718272/">IMDB</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.acclaimtalent.com/profiles/abyon-ausar/">Acclaim Talent</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Corp">Corporate</Nav.Link>
            <Nav.Link href="#Fashion">Fashion</Nav.Link>
            <Nav.Link href="#Fitness">Fitness Modeling</Nav.Link>
            <Nav.Link className="staticLink" href="#Videos">Videos</Nav.Link>
            <Nav.Link href="#Headshots">Headshots</Nav.Link>
            <Nav.Link href="#Published">Published Print Content</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon09@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area">


      <div className="mt-3">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3Bokskx6qT0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="mt-3">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sDK6onFjQm8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>


      <div className="mt-3">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BYlwpB0VTsY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="mt-3">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qIi8_DMqfpU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>



      <div className="mt-3">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_YaJpkEX4FU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="mt-3">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JaZACzvxQxU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>


      <div className="mt-3 mb-3">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0EAvO4hLVow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#/">A</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:abyon09@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}
