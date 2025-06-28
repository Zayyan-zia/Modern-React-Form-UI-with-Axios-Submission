import { useState } from 'react';
import axios from 'axios';
import Loader from './loader';
function App(){
  const [page,setpage]=useState({
    fullname:'',
    email:'',
    password:''
  });
  const [loader,setloader]=useState()
  const [res,setres]=useState();
  const changing=(e)=>{
        const {name,value}=e.target;
        const data={...page,[name]:value}
        setpage(data)
  }
  const Btn=(e)=>{
    setloader(<Loader/>)
    e.preventDefault();
    axios.post(your_routes,page)
    .then((res)=>{
      setloader('');
          setres(res.data);
           setpage({ fullname: '', email: '', password: '' });
    })
    .catch((err)=>{
      setres(err.message);
    })
     }
  return<>
  <div className="form-wrapper">
    <h1>Welcome 👋 Fill the Form</h1>
    <form className="form" onSubmit={Btn}>
      <div className="container">
        <input type="text" onChange={changing} value={page.fullname} name="fullname" placeholder="Enter your name" required />
        <input type="email" onChange={changing} value={page.email} name="email" placeholder="Enter your email" required />
        <input type="password" onChange={changing} value={page.password} name="password" placeholder="Enter your password" required />
        <button type="submit">Submit</button>
        {loader}
      </div>
      <div className={`response ${res ? 'show' : ''}`}>
        <p>{res}</p>
      </div>
    </form>
  </div>
  </>
}
export default App;
