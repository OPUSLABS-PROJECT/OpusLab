import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

/*components*/
import ContactForm from './component/Contact.jsx'
import Video from './component/Video.jsx'
import Footer from './component/Footer.jsx'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      companyName: '',
      description: '',
      dateDue: '',
      phone: '',
      email: ''
    }
    this.addMessage = this.addMessage.bind(this);

  }
  addMessage(name, companyName, description, dateDue, phone, email){
    $.ajax({
      method:'POST',
      url:'/sendMessage',
      contentType:'application/json',
      data:JSON.stringify({
        name: name,
        companyName: companyName,
        description: description,
        dateDue: dateDue,
        phone: phone,
        email: email
      })
    })
  }

  render(){
  return (
  <div>
  <h1 text-align='center'>PROXIMAMENTE</h1>
  <br />
  <Video />
  <br />
  <br />
  <br />
  <br />
  <ContactForm addMessage={this.addMessage}/>
  <Footer />
  </div>)
}
}

ReactDOM.render(<App />, document.getElementById('app'));
