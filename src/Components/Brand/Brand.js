import { Link } from "react-router-dom";

import '../Brand/Brand.css';

function Brand(){
    return(
        <div className="brand-logo">
            <Link to='/'><img src="https://essential.vteximg.com.br/arquivos/grid_logo_header.png?v=636588804222430000" alt='' className="img-itemContainer"/></Link>
        </div>
    )
}

export default Brand