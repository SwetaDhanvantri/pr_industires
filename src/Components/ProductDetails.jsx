import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

 function ProductDetails(props){
  
   const {id} = useParams();
    return (
        <div>
 <h1>Name:{id}</h1>
    
    </div>
    );
   }


   export default ProductDetails;