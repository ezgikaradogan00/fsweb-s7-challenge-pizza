import React, {Switch, useState }  from 'react';
import "./Success.css";


const success = () => {

    return (
        <>
         <div className='success'>
          
          <div className="text">
            
            <h1 id="text">
               TEBRİKLER!
               <br />
               <br />
               SİPARİŞİNİZ ALINDI!
            </h1>

          </div>

          <div className='loader'></div>

          <h4>HAZIRLANIYOR...</h4>

         </div>

        
        </>

       
                                
      
    );

};

export default success;