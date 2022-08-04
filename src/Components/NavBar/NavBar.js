import {useState } from "react";
import { Link } from "react-router-dom";

import {SiNike} from "react-icons/si";
import {SiPuma} from "react-icons/si";
import {SiJordan} from "react-icons/si";
import {SiAdidas} from "react-icons/si";

import CartWidget from "../CartWidget/CartWidget";

import './NavBar.css'


function NavBar(){
  const [ok,setOk] = useState(false)

  const showNavbar=()=>{
      setOk(!ok)
  }

  return(
      <div> 

          <div className={ok ? 'nav__info-container nav__info-container-deploy' : 'nav__info-container'}>
              <div className="nav__title-category">
                  <p>Nuestros Productos</p>
              </div>
              <div className="nav__category">
                  <Link to='/categoryArticle/zapatillas' className='info__item' >ZAPATILLAS</Link>
                  <Link to='/categoryArticle/remera' className='info__item' >REMERAS</Link>
                  <Link to='/categoryArticle/campera' className='info__item' >CAMPERAS</Link>
                  <Link to='/categoryArticle/accesorios' className='info__item' >ACCESORIOS</Link>   
              </div>    
          </div>

          <nav className="nav"> 
            <div className='nav__brands-container'>
              <Link to='/cart'><CartWidget/></Link>
              <Link to='/category/nike' className='brand__item'><SiNike/></Link>
              <Link to='/category/adidas' className='brand__item'><SiAdidas/></Link>

              <div className="button-navbar">
                <input type='checkbox' className='btn-animated' onClick={()=> showNavbar()}></input>
                <label className='animated'></label>
              </div>
              
              <Link to='/category/jordan' className='brand__item'><SiJordan/></Link>
              <Link to='/category/puma' className='brand__item'><SiPuma/></Link>
            </div>
          </nav>

      </div>
  )
}

export default NavBar