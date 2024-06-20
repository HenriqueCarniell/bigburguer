//react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//useContext
import { SearchProduct } from './context/searchContext';

//Components
import Header from './components/header/Header';
import FormCreateAccount from './components/forms/formcreateaccount/Formcreateaccount';
import FormLoginAccount from './components/forms/formlogin/Formloginaccount';
import Main from './components/main/Main';
import DetailsHamburguer from './components/detailshamburguer/Detailshamburguer';
import Cart from './components/cart/Cart';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <SearchProduct>
                    <Routes>
                        <Route path='/' element={
                            <div>
                                <Header />
                                <Main />
                            </div>
                        } />
                        <Route path='/criarconta' element={<FormCreateAccount />} />
                        <Route path='/login' element={<FormLoginAccount />} />
                        <Route path={'/hamburguer/:idproduto'} element={<DetailsHamburguer />} />
                        <Route path={'/carrinho'} element={<Cart />} />
                    </Routes>
                </SearchProduct>
            </BrowserRouter>
        </div>
    );
}

export default App;
