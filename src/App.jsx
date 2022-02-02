import React, { useEffect } from 'react'
import HomePage from './page/HomePage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import SingleCategoryProducts from './page/SingleCategoryProducts';
import ProductDetails from './page/ProductDetails';
import SingleBrandProducts from './page/SingleBrandProducts';
import SearchResultPage from './page/SearchResultPage';
import AuthPage from './page/AuthPage';
import axios from 'axios';
import { domain, getheader } from './env';
import {useStateValue} from './state/stateProvider'
import OrderPage from './page/OrderPage';
import ProfilePage from './page/ProfilePage';

const App = () => {

  const [{profile},dispatch] = useStateValue();

  useEffect(()=>{
    const getProfile = async () => {
      await axios({
        method:'get',
        url:`${domain}/api/profile/`,
        headers:getheader
      }).then(res => {
        console.log(res.data,'profile');
        dispatch({
          type:'PROFILE',
          value:res.data
        })
      }).catch(_=>{
        dispatch({
          type:'PROFILE',
          value:null
        })
      })
    }
    getProfile()
  },[])

  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/category-:title-:id' element={<SingleCategoryProducts />} />
      <Route path='/brand-:title-:id' element={<SingleBrandProducts />} />
      <Route path='/details-:title-:id' element={<ProductDetails />} />
      <Route path="/q-:q" element={<SearchResultPage />} />
      <Route path="/login" element={<AuthPage />} />
      {
        profile !== null &&
        <>
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/profile-:username" element={<ProfilePage />} />

        </>
      }
      <Route path="*" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
