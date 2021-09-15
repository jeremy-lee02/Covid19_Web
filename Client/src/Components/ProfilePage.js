import React,{useState} from 'react'
import { Row } from 'react-bootstrap';
import '../style/profile.css'

export default function ProfilePage() {
  const [data,setData] = useState([])
  // const [newData,setNewData] = useState([])
  const endPoint = 'http://localhost:4000/users/'
  React.useEffect(() => {
    fetch(endPoint)
      .then(response => response.json())
      .then(data => setData(data));
    // for(let i = 0;i<data.length;i++){
    //   const setNewData(data.indexOf(i))
    //   if



    // }
  }, [])
 
  
    return (
      <div className="container" style={{background:'#292b2c'}}>
        {/* <img src={img}className="img-circle" /><br/>
        <input type="file" value={img} onChange={(e)=>setImg(e.target.value)}/><br /> */}
        <Row sm='1'>
          <h3>Full Name:</h3>{data.map(a=>{
            if(a.email === localStorage.getItem("email"))
            return(<p className="information">{a.name}</p>)
          })}
        </Row>
        <Row sm='1'>
        <h3>Date of birth:</h3>{data.map(a=>{
            if(a.email === localStorage.getItem("email"))
            return(<p className="information">{a.dob}</p>)
          })}
        </Row>
        <Row sm='1'>
        <h3>Email:</h3>{data.map(a=>{
            if(a.email === localStorage.getItem("email"))
            return(<p className="information">{a.email}</p>)
          })}
        </Row>
        <Row sm='1'>
        <h3>Phone:</h3>{data.map(a=>{
            if(a.email === localStorage.getItem("email"))
            return(<p className="information">{a.phone}</p>)
          })}
        </Row>
        <Row sm='1'>
        <h3>Address:</h3>{data.map(a=>{
            if(a.email === localStorage.getItem("email"))
            return(<p className="information">{a.address}</p>)
          })}
        </Row>
      </div>
    )
}

{/* <div><h3>Email:</h3><p className="information">example@gmail.com</p></div>
<div><h3>Date of birth:</h3><p className="information">02/01/2000</p></div>
          <div><h3>Phone:</h3><p className="information">123456789</p></div>
          <div><h3>Address:</h3><p className="information">123abc</p></div>
          <div><h3>Address:</h3><p className="information">123abc</p></div> */}