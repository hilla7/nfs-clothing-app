import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { setCurrentUser } from "./redux/user/user.action";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import { createUserDocumentFromAuth, onAuthStateChangeListener } from "./utils/firebase/firebase.util";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async (userAuth) => {
      let user = null;
      if (userAuth) {
        user = await createUserDocumentFromAuth(userAuth);
      }
      dispatch(setCurrentUser(user));
      console.log('logged-in user:', userAuth?.email);
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={< Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
