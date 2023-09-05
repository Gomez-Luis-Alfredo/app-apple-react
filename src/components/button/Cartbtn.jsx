import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"



export const Cartbtn = () => {
  const state = useSelector((state) => state.addItem)
  return (
    <NavLink to="/cart"className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"/> Cart({state.length})
    </NavLink>
    
  )
}
