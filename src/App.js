import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';

import CartContextProvider from "./context/CartContext.js";

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js";
import Brand from "./Components/Brand/Brand.js";
import CartList from "./Components/CartList/CartList.js";



function App() {
return (

   <BrowserRouter>
      <CartContextProvider>
         <div className="App">

         <NavBar/>
         <Brand/>

         <Routes>
            <Route path="/" element = 
               {<ItemListContainer/>}/>

            <Route path="/category/:categoryId" element= 
               {<ItemListContainer/>} />

            <Route path="/categoryArticle/:categoryArticleId" element= 
               {<ItemListContainer/>} />

            <Route path="/detail/:detailId" element=
               {<ItemDetailContainer/>}/> 

            <Route path="/cart" element={<CartList/>}/>

            <Route path="/*" element= {<Navigate to='/' replace />} />
         </Routes>
                              
         </div> 
      </CartContextProvider>
   </BrowserRouter>
   

);
}

export default App;
