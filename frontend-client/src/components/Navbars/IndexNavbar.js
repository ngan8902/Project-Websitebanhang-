import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ClientAxios from '../../utils/fetch.utils'
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Badge
} from "reactstrap";

export default function IndexNavbar({ authen }) {
  // console.log(authen)
  console.log(authen);
  //{id: 3, email: 'nhatanh@gmail.com'}
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const [cart, setCart] = React.useState({})
  // const { className } = props;
const[findproducts,setFindproduct] = useState({})
  const [modal, setModal] = useState(false);
const [text,setText] =useState({})
  const toggle = () => setModal(!modal);
  React.useEffect(() => {
    const cartSession = sessionStorage.getItem('usercart')
    if(cartSession) {
      setCart(JSON.parse(cartSession))
    }

    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login-page");
  };
  const handleSearch =()=>{
    ClientAxios.get(`/api/product/search?text=${text}`).then(
      (res) => {
          const data = res.data.data
         
         console.log(data)
          setFindproduct(data)
        
      }
  )
  }
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span style={{ border: "1px solid" }}>MANGO</span>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Creative Tim
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        {/* MENU CATEGORY */}
        <Nav navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              data-toggle="dropdown"
              href="#pablo"
              nav
              onClick={(e) => e.preventDefault()}
            >
              MAN
            </DropdownToggle>
            <DropdownMenu className="dropdown-with-icons">
              <DropdownItem tag={Link} to="/manshirt-page">
                Shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">
                T-shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">
                Coat
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">
                Accessory
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              data-toggle="dropdown"
              href="#pablo"
              nav
              onClick={(e) => e.preventDefault()}
            >
              WOMAN
            </DropdownToggle>
            <DropdownMenu className="dropdown-with-icons">
              <DropdownItem tag={Link} to="/manshirt-page">
                Shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">
                T-shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">
                Coat
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">
                Accessory
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              data-toggle="dropdown"
              href="#pablo"
              nav
              onClick={(e) => e.preventDefault()}
            >
              KID
            </DropdownToggle>
            <DropdownMenu className="dropdown-with-icons">
              <DropdownItem tag={Link} to="/manshirt-page">
                Shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">
                T-shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">
                Coat
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">
                Accessory
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={(e)=>setText(e.target.value)}
          />
          <button
            className="btn  my-2 my-sm-0"
            style={{ backgroundColor: "purple" }}
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row></Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                onClick={toggle}
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa-sharp fa-solid fa-cart-shopping" />
                <Badge color="danger" pill style={{ position: 'absolute', top: -5, right: -5 }}>
                  {
                    cart && cart.totalQuantity ? cart.totalQuantity : 0
                  }
                </Badge>
              </NavLink>
            </NavItem>

            {/* Modalheader */}
            <div className="modalheader">
              <Modal
                isOpen={modal}
                modalTransition={{ timeout: 700 }}
                backdropTransition={{ timeout: 1300 }}
                toggle={toggle}
                style={{ padding: "30px" }}
              >
                <ModalHeader
                  toggle={toggle}
                  style={{
                    textAlign: "center",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  CARD SHOPPING
                </ModalHeader>
                <ModalBody>
                  <Row>
                    <Col sm="4">
                      <img
                        width="100%"
                        src= {cart ? cart.ImagePath : null}
                        alt="Card image cap"
                      ></img>
                    </Col>
                    <Col sm="4" style={{ margin: "auto" }}>
                      <h5>{cart.Name}</h5>
                      <p>{cart.Price}</p>
                    </Col>
                    <Col sm="4" style={{ margin: "auto" }}>
                      <Button color="danger">Delete</Button>
                    </Col>
                  </Row>

                </ModalBody>
                <ModalFooter>
                  <Button color="success" tag={Link} to="/profile-page">
                    Payment
                  </Button>{" "}
                  <Button color="danger" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
            {authen && !authen.email ? (
              <NavLink style={{ color: "white" }} tag={Link} to="/login-page">
                Login{" "}
              </NavLink>
            ) : (
              <>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-cogs d-lg-none d-xl-none" />
                    {authen && <p>{authen.email}</p>}
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-with-icons">
                    <DropdownItem tag={Link} to="/">
                      <i className="tim-icons icon-bullet-list-67" />
                      Home Page
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/register-page">
                      <i className="tim-icons icon-bullet-list-67" />
                      Register Page
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/profile-page">
                      <i className="tim-icons icon-single-02" />
                      Payment Page
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/login-page"
                      onClick={handleLogout}
                    >
                      <i className="tim-icons icon-single-02" />
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
