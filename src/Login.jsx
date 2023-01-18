import React, { useState } from 'react';
import validator from 'validator';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errEmail, setErrEmail] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      var emailInput = e.target.value;

      if (validator.isEmail(emailInput)) {
         setErrEmail('Valid Email :)');
      } else {
         setErrEmail('Enter valid Email!');
      }
   };

   //jwt 
   //loginnya pake api

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {<span>{errEmail}</span>}
            <label htmlFor="password">password</label>
            <input
               type="password"
               placeholder="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
            />
            <button type="submit">Login</button>
         </form>
      </div>
   );
};

export default Login;
