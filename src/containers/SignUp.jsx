import React, { Component } from 'react';
import '../styles/style.css';
import {FiUser, FiPhone, FiMail, FiLock} from 'react-icons/fi'

class SignUp extends Component {
    state={
        fullname: '',
        phone: '',
        email: '',
        password: '',
        errors: {
            nameError: '',
            phoneError: '',
            emailError: '',
            passError: ''
        }
    }

    inputHandler = e =>{
        e.preventDefault();
        console.log(e.target);
        const {name, value} =e.target
        this.setState({ [name]: value})
    }
    formHandler = e =>{
        e.preventDefault();
        const {fullname,phone, email, password} =this.state
        if(fullname === ''){
            this.setState({errors: {nameError:"ism yozilmadi !"}})
        } else if(phone === ''){
            this.setState({errors: {phoneError: 'raqam yozilmadi !'}})
        }else if(email === ''){
            this.setState({errors: {emailError: 'email yozilmadi !'}})
        }
         else if (password ===''){
            this.setState({errors: {passError: 'parol yozilmadi !'}})
        }
    }

    render() {
        console.log(this.state);
        const {fullname, email, password,phone, errors} =this.state
        return (
            
                <form action="" onSubmit={this.formHandler}>
                    <h1>SignUp</h1>
                    <div className="form-group">
                    <label htmlFor="name">Name</label>  <br/> 

                    <div className="input"> <div><FiUser/></div>
                    <input type="text" name="fullname" value={fullname} onChange={this.inputHandler} placeholder="Full Name"/> </div> <span>{errors.nameError}</span>
                    
                             
                    </div>

                    <div className="form-group" >
                    <label htmlFor="phone">Phone</label> <br/>
                    <div className="input"> <div><FiPhone/></div> <input type="number" name="phone" value={phone} onChange={this.inputHandler} placeholder="Phone number..." /></div> <span>{errors.phoneError}</span>
                    
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email</label> <br/>
                    <div className="input"><div><FiMail/></div> <input type="email" name="email" value={email} onChange={this.inputHandler} placeholder="Email..."/> </div><span>{errors.emailError}</span>
                    
                    </div>

                    <div className="form-group">
                    <label htmlFor="password">Password</label> <br/>
                    <div className="input"> <div><FiLock/></div> <input type="password" name="password" value={password} onChange={this.inputHandler} placeholder="Password"/></div> <span>{errors.passError}</span>
                   
                    </div>

                    <button>Submit</button>
                </form>
          
        );
    }
}

export default SignUp;
