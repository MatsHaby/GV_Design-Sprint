import React from 'react'
import { useState } from 'react'

const Form = () => {

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [address, setAddress] = useState('');
 const [phone, setPhone] = useState('');

 return (
  <div className="hero-background">
   <div className='hero-igor'>
    <h3>Beställ smakprov på årets glögg</h3>
    <form>
     <input className='inputs' type="text" placeholder='Namn' id="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
     <input className='inputs' type="text" placeholder='E-mail' id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
     <input className='inputs' type="text" placeholder='Adress' id="address" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
     <input className='inputs' type="text" placeholder='Telefonnummer' id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
    </form>
    <button id="order-btn">Beställ</button>
   </div>
  </div>
 )
}

export default Form
