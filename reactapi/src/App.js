import React, { Component } from 'react';



class App extends Component {

 constructor(props) {
  super(props);
  this.state = {
    items: [],
    isLoaded: false,
  }
 }

  componentDidMount() {
    //insert the url inside the fetch function
    fetch('https://your link here.com')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json, 
        })
      })

  }
  render () {

    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {


      //Insert items to be fetch inside the li for example Name and Email
      return (
            <div className="App">
             
             <ul>

               {items.map(item => (

                 <li key={item.id}>
                   
                      Name: {item.name} | Email: {item.email}
                  </li>
               ))};


             </ul>


            </div>
    );  
  }
}
}

export default App;
