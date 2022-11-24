import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'


const Card = () => {

  const [contact, setContact] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   setIsLoading(true)
  //   try {
  //     axios.get('https://random-data-api.com/api/v2/users')
  //     .then((res) => {
  //       console.log(res.data);
  //     if (res.data) {
  //       setContact(res.data)
  //       setIsLoading(false)
  //     }
  //     })
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(true)
  //   }
  // },[])
  useEffect(() => {
    setIsLoading(true)
    fetchData()
  },[])

  async function fetchData () {
    const { data } = await axios.get('https://random-data-api.com/api/v2/users');
    if (data) {
      setContact(data)
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }

  return !isLoading ? ( 
    <div className="master-container">
       <img className="img-container" src={contact?.avatar} alt="avatar" />
      <section className="container">
        <h1 className="contact-fullname">{contact.first_name}&nbsp;{contact.last_name}</h1>
        <article className="contact-detail">
          <i className="fa-regular fa-envelope"></i>
          <span style={{paddingLeft: "5px"}}>{contact?.email}</span>
        </article>
        <article className="contact-detail">
        <i class="fa-solid fa-location-dot"></i>
        <span style={{paddingLeft: "5px"}}>{contact.address?.city},&nbsp;{contact.address?.state}</span>
        </article>
        <article className="contact-detail">
          <i className="fa-regular fa-calendar-days"></i>
          <span style={{paddingLeft: "5px"}}>{contact?.date_of_birth}</span>
        </article>
        <button className="contact-button">Contact</button>
      </section>
    </div>
   ) : (
    <div className="master-container">
      <h1>Loading...</h1>
    </div>
   );
}
 
export default Card;