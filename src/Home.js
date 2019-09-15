import React, { Component } from "react";
import  { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import tests from "./tests.png";
import ques from "./ques.png";
import article from "./article.png";
import Selection from "./selection.js"
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import AppointmentButton from "./AppointmentButton"
import {NavLink, Route, HashRouter} from "react-router-dom"
import About from "./About"
class Home extends Component {
constructor(props) {
  super(props);

   this.handleChange = this.handleChange.bind(this);
  this.fetchData = this.fetchData.bind(this)
  this.routeChange = this.routeChange.bind(this);
  this.state = {
  "city": 'Karachi', "specialization": 'ENT',
  users: [],

  }
 }
 getApiUrl() {
const {city, specialization} = this.state;
 //const host = '/posts';
return "/posts/" + city + '/' + specialization ;}

handleChange(newState) {
  this.setState(newState);
}

routeChange() {
 
  this.props.history.push("/AppointmentButton");
}

fetchData(){
fetch(this.getApiUrl())
.then(res => res.json())
 .then(users => this.setState({users}))
  
  }
  render() {
    const apiUrl = this.getApiUrl();
    return ( 
       <div className="homediv">
   
         {/*banner*/}
         <header>
         <h2 className="home">Need to See a Doctor?</h2>
         <h5>Book your next doctor's appointment here...</h5>
     
          <div>
        <Selection
          onFormChange={this.handleChange}
        />
        {/* <code>{apiUrl}</code> */}
      </div>
             
             <br />

             {/*button*/}

             <Fragment className="btn">
             <MDBBtn color="blue" onClick ={this.fetchData} >Find</MDBBtn></Fragment>
             </header>
             <p>{this.state.name}</p>
       {/*body*/}      


       <ul>
           {this.state.users.map(user =>
            <li key={user.id}>{user.name} <br/> Education :{user.Education} <br/> Rating :{user.Rating} <br/> Specialization :{user.specialization}<br/> 
            <Fragment className="btn">
             <MDBBtn color="blue" onClick ={this.routeChange} >Book Appointment</MDBBtn></Fragment> </li>  )}   
        </ul>
         
         
     <MDBContainer className="mt-5">
     <h2>Find more...</h2><br />
       <MDBRow>
        <MDBCol md="4">
            <MDBView hover zoom text-center>
              <img
                src={tests}
                className="test"
                alt=""
              />
              <p>Book Medical Test</p>
             
            </MDBView>
         </MDBCol>
         <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src={article}
                className="article"
                alt=""
              />
               <p>Read Health Articles</p>
            </MDBView>
         </MDBCol>
         <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src={ques}
                className="question"
                alt=""
              />
                <p>Have a Question?</p>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />

      {/*Rating*/}
      <div className="ratingContainer">

        <h3>Rate the website...
        </h3>
        <br />
        <p>Rate the website for doctors, specialities, treatments, hospitals and services.<br />
           Find doctor reviews and book appointment online.
</p>
        <div className="row">
        <div className="rating">
          <input type="radio" id="star10" name="rating" value="10" /><label for="star10" title="Rocks!">5 stars</label>
          <input type="radio" id="star9" name="rating" value="9" /><label for="star9" title="Rocks!">4 stars</label>
          <input type="radio" id="star8" name="rating" value="8" /><label for="star8" title="Pretty good">3 stars</label>
          <input type="radio" id="star7" name="rating" value="7" /><label for="star7" title="Pretty good">2 stars</label>
          <input type="radio" id="star6" name="rating" value="6" /><label for="star6" title="Meh">1 star</label>
          <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Meh">5 stars</label>
          <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Kinda bad">4 stars</label>
          <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Kinda bad">3 stars</label>
          <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Sucks big tim">2 stars</label>
          <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
        </div>
        </div>
    </div>

{/*Footer*/}

<footer className="page-footer font-small stylish-color-dark pt-4">

  <div className="container text-center text-md-left">

    <div className="row">

      <div className="col-md-4 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Utopia</h5>
        <p>Book appointments with the best Doctors and Specialists such as Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc. in Pakistan conveniently.</p>

      </div>
      <hr className="clearfix w-100 d-md-none" />
      <div className="col-md-2 mx-auto">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Cities</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!">Karachi</a>
          </li>
          <li>
            <a href="#!">Lahore</a>
          </li>
          <li>
            <a href="#!">Islamabad</a>
          </li>
          <li>
            <a href="#!">Peshawar</a>
          </li>
          <li>
            <a href="#!">Quetta</a>
          </li>
        </ul>

      </div>
   <hr className="clearfix w-100 d-md-none" />
      <div className="col-md-2 mx-auto">
      <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Specialities</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!">Child Specialist</a>
          </li>
          <li>
            <a href="#!">Dermatologist</a>
          </li>
          <li>
            <a href="#!">ENT Specialist</a>
          </li>
          <li>
            <a href="#!">Neurologist</a>
          </li>
          <li>
            <a href="#!">Cardiologists</a>
          </li>
          <li>
            <a href="#!">Eye Specialist</a>
          </li>
          <li>
            <a href="#!">Gynecologist</a>
          </li>
        </ul>

      </div>
  

    </div>
  </div>
  
  <ul className="list-unstyled list-inline text-center py-2">
    <li className="list-inline-item">
      <h5 className="mb-1">Register for free</h5>
    </li>
    <li className="list-inline-item">
      <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
    </li>
  </ul>

  
  <ul className="list-unstyled list-inline text-center">
    <li className="list-inline-item">
      <a className="btn-floating btn-fb mx-1">
        <i className="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-tw mx-1">
        <i className="fab fa-twitter"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-gplus mx-1">
        <i className="fab fa-google-plus-g"> </i>
      </a>
    </li>
  
  </ul>

  <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="#"> MediConnect Services</a>
  </div>

</footer>



           </div>
           
           
    );
  }
}
 
export default Home;