import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './componets/Auth/Login'
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componets/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  // useEffect(() => {
  //   //setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user,setUser]=useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] =  useContext(AuthContext)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser=localStorage.getItem('loggedInUser');
  //     if(loggedInUser){
  //       setUser(loggedInUser.role);
  //     }
  //   } 
  // }, [authData])
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
  },[])
  
  const handleLogin = (email,password) => {
    if( email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email==e.email&&password==e.password);
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))  
      }
      }
      else{
      alert('invalid');
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> :(user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
    </>
  )
}

export default App

//2:42
