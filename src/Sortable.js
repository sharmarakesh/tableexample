import React from 'react';

const Sortedtable = (props) => {
    const dd = { ...props.elm };
    return (<div>
     <table border="1">
     <thead>
         <tr>
         <th>   Id   </th>
              <th>   Name   </th>
              <th>   Country   </th>
              <th>   Company   </th>
              <th>   Zipcode   </th>
              <th>   Salary   </th>
         </tr>        
     </thead>
     <tbody>
     {Object.keys(dd).map((v, i) => {
        return (<tr key={i}>
            <td>{dd[v].Id}</td>
            <td>{dd[v].Name}</td>
            <td>{dd[v].Country}</td>
            <td>{dd[v].Company}</td>
            <td>{dd[v].ZipCode}</td>
            <td>{dd[v].Salary}</td>
        </tr>)
     })}      
    </tbody>
    </table>
  
   </div>);
}

export default Sortedtable;