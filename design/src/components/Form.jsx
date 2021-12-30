import React from 'react'
import { useState } from 'react'

const Form = () => {

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [address, setAddress] = useState('');
 const [phone, setPhone] = useState('');

 return (
  <div>
   <div>Beställ smakprov på årets glögg</div>
   <form>
    <input type="text" placeholder='Namn' id="name" value={name} onChange={(e) => setName(e.target.value)} />
    <input type="text" placeholder='E-mail' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <input type="text" placeholder='Adress' id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
    <input type="text" placeholder='Telefonnummer' id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
   </form>
   <button id="order-btn">Beställ</button>
  </div>
 )
}

export default Form
