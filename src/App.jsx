import './App.css'
import Demo from './components/Demo'
import Login from './components/Login'
import Profile from './components/Profile'
import CustomerContextProvider from './context/CustomerContextProvider'

function App() {
  return (
    <CustomerContextProvider>
      <Login />
      <Profile />
      <Demo/>
    </CustomerContextProvider>
  )
}

export default App
