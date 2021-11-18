import React, { Component } from 'react'
import Users from "../src/Usercard";
import './App.css';

	
class App extends Component {
  constructor(props){
	super(props)
		
	this.state = {info_data :[],
                waiting : true                
  }
  

	this.infoState = this.infoState.bind(this)
  }
    
  infoState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({info_data :users.data,
                        waiting: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (
    <React.Fragment>
      
         <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#" >Cards</a>
            </div>
            
            <ul class="nav navbar-nav navbar-right">
            <li onClick={this.infoState}><a href="#">Get User</a></li>
            </ul>
          </div>
        </nav>
        

      <div className="userbox">
        <Users waiting={this.state.waiting} users={this.state.info_data}/>
      </div> 
  
    </React.Fragment>
    )
  }
}
	
export default App;