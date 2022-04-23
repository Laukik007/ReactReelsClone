import Signup from './Components/Signup';
import './App.css';
import PrivateRoute from './Components/PrivateRoute';
import Feed from './Components/Feed';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgetPassowrd';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import{AuthProvider} from './Context/AuthContext'
import Profile from './Components/Profile'
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes forceRefresh={true}>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path="/profile/:id" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path ='/' element={<PrivateRoute><Feed/></PrivateRoute>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;