import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        password:""
    })
    const [data,setData] = useState([]);
    
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);

        const {value,name} = e.target; //object destructuring
        // console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]:value
            } 
        })
    }  

    const addData = (e) => {
        e.preventDefault(); 

        const {name,email,password} = inpval;

        if(name === ""){
            alert("Name field is required")
        
        }else if(email === ""){
            alert("Email field is required")
        }else if(!email.includes("@")){
            alert("Please enter valid email address")
        }else if(password === ""){
            alert("Password field is required")
        }else if(password.length < 5){
            alert("Password should contain more than 5 characters")
        }else{
            console.log("User added successfully");
            localStorage.setItem("user",JSON.stringify([...data,inpval]));

        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_side mt-3 p-3" style={{width:"100%"}}>
                    <h3 className='text-center col-lg-6'>Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicName ">
                            <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary"className="col-lg-6" onClick={addData} style={{background:"rgb(67,185,127"}} type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='mt-3'>Already have an Account? <span><NavLink to='/login'>Sign In</NavLink></span></p>
                    </div>
                    <Sign_img></Sign_img>
                </section>
            </div>

        </>
    )
}

export default Home;