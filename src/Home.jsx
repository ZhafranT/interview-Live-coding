import React, { useState, useEffect } from 'react';

const Home = () => {
   const [dataUser, setDataUser] = useState('');

   const getData = async (req, res) => {
      const dataUser = await fetch('https://reqres.in/api/login');
      const value = await dataUser.json();

      console.log(value);
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <div>
         <span>{dataUser}</span>
      </div>
   );
};

export default Home;
