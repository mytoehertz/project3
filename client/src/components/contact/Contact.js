import React, { Component } from "react";
import axios from "axios";
class Contact extends Component {
  render() {
    return (
      <form
        id="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" id="message" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    document.getElementById("contact-form").reset();
  }
}
export default Contact;
