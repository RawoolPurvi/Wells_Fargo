import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Sign_img from './Sign_img';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const [inpval,setInpval] = useState({
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

        const getUserArray = localStorage.getItem("user");
        console.log(getUserArray);

        const {email,password} = inpval;

        if(email === ""){
            alert("Email field is required")
        }else if(!email.includes("@")){
            alert("Please enter valid email address")
        }else if(password === ""){
            alert("Password field is required")
        }else if(password.length < 5){
            alert("Password should contain more than 5 characters")
        }else{
            if(getUserArray && getUserArray.length){
                const userdata = JSON.parse(getUserArray); //converting the data into object
                const userLogin = userdata.filter((el,k)=>{
                    return el.email === email && el.password === password
                });

                if(userLogin.length === 0){
                    alert("Invalid details");
                }else{
                    console.log("User login successfully");
                    // localStorage.setItem.("user_login",JSON.stringify(getUserArray))
                    history("/details")
                }
            }
        }
    }
    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_side mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Login In</h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className="col-lg-6" onClick={addData} style={{ background: "rgb(67,185,127" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>New Registration? <span><NavLink path to="/">Sign Up</NavLink></span></p>
                    </div>
                    <Sign_img></Sign_img>
                </section>
            </div>

        </>
    )
}

export default Login