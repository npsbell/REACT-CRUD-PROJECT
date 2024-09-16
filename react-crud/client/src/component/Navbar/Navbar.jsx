import './navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = ({title}) => {

    const navigate = useNavigate()

  return (
    <div className="nav">
        <h1>{title}</h1>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  )
}

export default Navbar