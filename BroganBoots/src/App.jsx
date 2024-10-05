import './index.css'
import './App.css'
import Navbar from './Component/navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Context from './context'
import { useDispatch } from 'react-redux'
import SummaryApi from './common/SummaryApi'
import { setUserDetails } from './store/userSlice'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);
  // const fetchUserDetails = async () => {
  //   const dataResponse = await fetch(SummaryApi.current_user.url, {
  //     method: SummaryApi.current_user.method,
  //     credentials: "include",
  //   });

  //   const dataApi = await dataResponse.json();

  //   if (dataApi.success) {
  //     dispatch(setUserDetails(dataApi.data));
  //   }
  // };
  const fetchUserAddtoCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();
    setCartProductCount(dataApi?.data?.count);
  };
  useEffect(() => {
    // user details
    // fetchUserDetails();
    fetchUserAddtoCart();
  }, []);

  return (
    <>
    <Context.Provider
      value={{
       //user detail fetch
        cartProductCount, //current use add to cartproduct count
        fetchUserAddtoCart,
      }}
    >
      <ToastContainer position="top-center" />
    <Navbar/>
    <Outlet/>
    <Footer/>
    </Context.Provider>
    </>
  ) 
}

export default App
