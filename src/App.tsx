import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from './components/header/header';
import FormCreateAccount from './components/forms/form-create-account/FormCreateAccount';
import FormLoginAccount from './components/forms/form-login/FormLoginAccount';
import Main from './components/main/main';
import DetailsHamburguer from './components/DetailsHamburguer/DetailsHamburguer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
