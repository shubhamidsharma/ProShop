import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import { LoginScreen } from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/register' element={<RegisterScreen/>}></Route>
            <Route path='/profile' element={<ProfileScreen/>}></Route>
            <Route path='/' element={<HomeScreen />} exact></Route>
            <Route path='/product/:id' element={<ProductScreen />}></Route>
            <Route path='/cart/:id' element={<CartScreen />}></Route>
            <Route path='/cart' element={<CartScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
