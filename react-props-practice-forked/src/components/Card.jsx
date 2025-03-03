import React from "react";
import contacts from "../contacts";

function ContactList() {
  return (
    <div>
      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

function Card({ name, imgURL, phone, email }) {
  //   console.log("Name::" + name);
  //   console.log("Img::" + imgURL);
  //   console.log("Ph::" + phone);
  //   console.log("Email::" + email);
  return (
    <div className="../../public/card">
      <div className="../../public/top">
        <h2>{name}</h2>
        <img src={imgURL} alt="avatar_img" />
      </div>
      <div className="../../public/bottom">
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default ContactList;
