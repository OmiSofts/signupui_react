import React from 'react'
import './signup.css'
import User from '../assets/user1.png'

const login = () => {
  return (
    <>
    <div class="container hover">
        <div class="jumbotron mb-0">
            <h5 class="display-4 text-center">Create New Account</h5>
        </div>
        <img src={User} class="rounded mx-auto d-block profile-img" alt="user"/>
        {/* Form Start Hover */}
        <form class="center p-1">
            <div class="form-group">
                {/* Name Section */}
                <div class="d-flex">
                    <div class="w-50">
                        <label for="formGroupExampleInput">First Name</label>
                        <input type="text" class="form-control roundborder" autofocus="1" placeholder="Enter First Name"/>
                    </div>

                    <div class="w-50">
                        <label for="formGroupExampleInput">Last Name</label>
                        <input type="text" class="form-control roundborder" placeholder="Enter Last Name"/>
                    </div>
                </div>
                {/* <!-- Email Section --> */}
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control roundborder" id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                </div>
                {/* <!-- Password Section --> */}
                <div class="form-group d-flex">
                    <div class="w-50">
                        <label>Password</label>
                        <input type="password" class="form-control roundborder" placeholder="Password"/>
                    </div>
                    <div class="w-50">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control roundborder" placeholder="Password"/>
                    </div>
                </div>
                {/* <!-- Department section --> */}
                <div class="form-group">
                    <label>Departments</label>
                    <select class="form-select container-fluid h-50 roundborder" aria-label="Default select example">
                        <option selected>Choose...</option>
                        <option value="CS">Computer Science Department</option>
                        <option value="MD">Mathimatics Department</option>
                        <option value="CVE">Civil Engineering Department</option>
                        <option value="BD">Biology Department</option>
                        <option value="CD">Chemistry Department</option>
                    </select>
                </div>
                {/* <!-- Mobile Number --> */}
                <div class="form-group d-flex">
                    <div class="w-25">
                        <label for="formGroupExampleInput">Country Code</label>
                        {/* <!-- <input type="text" class="form-control" placeholder="Enter First Name"> --> */}
                        <select class="form-select container-fluid h-50 roundborder" aria-label="Default select example">
                            <option selected>Choose...</option>
                            <option value="+91">+91 India</option>
                            <option value="+92">+92 Pakistan</option>
                            <option value="+93">+93 Afghanistan</option>
                            <option value="+94">+94 Srilanka</option>
                        </select>
                    </div>
                    <div class="w-75">
                        <label for="formGroupExampleInput">Number</label>
                        <input type="text" class="form-control roundborder" placeholder="Enter Mobile Number"/>
                    </div>
                </div>
                {/* <!-- DOB and Age --> */}
                <div class="form-group d-flex">
                    <div class="w-50">
                        <label for="formGroupExampleInput">D.O.B</label>
                        <input type="date" class="form-control roundborder" placeholder="Enter First Name"/>
                    </div>

                    <div class="w-50">
                        <label for="formGroupExampleInput">Age</label><br/>
                        <input type="range" class="form-range container-fluid mt-2" min="0" max="100" id="customRange1"/>
                    </div>
                </div>
                {/* <!-- Gender Section --> */}
                <div class="form-group ">
                    <label for="formGroupExampleInput">Gender</label>
                    <div class="form-group row">
                        <div class="col-sm">
                            <input class="form-check-input ml-2" type="radio" name="exampleRadios" id="exampleRadios1"
                                value="option1"/>
                            <label class="form-check-label ml-4" for="exampleRadios1">Male</label>
                        </div>
                        <div class="col-sm">
                            <input class="form-check-input ml-2" type="radio" name="exampleRadios" id="exampleRadios1"
                                value="option1"/>
                            <label class="form-check-label ml-4" for="exampleRadios1">Female</label>
                        </div>
                        <div class="col-sm">
                            <input class="form-check-input ml-2" type="radio" name="exampleRadios" id="exampleRadios1"
                                value="option1"/>
                            <label class="form-check-label ml-4" for="exampleRadios1">Others</label>
                        </div>
                        <div class="col-sm"></div>
                    </div>
                </div>
                <div class="pt-3">
                    <button type="submit" class="btn btn-outline-primary container-fluid roundborder">SignUp</button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default login