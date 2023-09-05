import { NavLink } from "react-router-dom"


export const Footer = () => {
  return (
    <>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src="./logotipo-de-apple.png" alt="" height={30} width={30}/>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><NavLink to={"/"} className="nav-link px-2 text-body-secondary">Home</NavLink></li>
      <li className="nav-item"><NavLink to={"/product"} className="nav-link px-2 text-body-secondary">Product</NavLink></li>
      <li className="nav-item"><NavLink to={"/about"} className="nav-link px-2 text-body-secondary">About</NavLink></li>
      <li className="nav-item"><NavLink to={"/contact"} className="nav-link px-2 text-body-secondary">Contact</NavLink></li>
    </ul>
  </footer>
    </>
  )
}
