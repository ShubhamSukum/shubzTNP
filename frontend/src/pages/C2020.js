import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../App.css";

export const C2020 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/pict/2020")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <center>
      <h1 style={{ marginBottom: "1vh" }}>2020</h1>
      <div id="table-wrapper">
        <div id="table-scroll">
          <table>
            <thead>
              <tr>
                <th className="sticky-header">Company</th>
                <th className="sticky-header">Pointer</th>
                <th className="sticky-header">Branch</th>
                <th className="sticky-header">Total</th>
                <th className="sticky-header">Salary</th>
                <th className="sticky-header">Date</th>
                <th className="sticky-header">Investment</th>
              </tr>
            </thead>

            <tbody>
                  {
                    data.map((info)=>{
                      const dateString = info.date;
                      const dateObject = new Date(dateString);
                      const year = dateObject.getFullYear();
                      const month = dateObject.getMonth() + 1;
                      const day = dateObject.getDate();

                      const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
                        return(
                          <tr key={info._id}>
                              <td>{info.company}</td>
                              <td>{info.pointer}</td>
                              <td>{info.branch}</td>
                              <td>{info.total}</td>
                              <td>{info.salary}</td>
                              <td>{formattedDate}</td>
                              <td>{info.investment}</td>
                          </tr>
                        )
                    })
                  }
            </tbody>

          {/* {data.map((info) => {
            // your existing code for rendering table rows
              })} */}
          </table>
        </div>
      </div>
    </center>
  );
};

// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import "../App.css";

// export const C2020 = () => {
//   const [data,setData]=useState([]);

//   useEffect(()=>{

//     axios.get("http://localhost:3001/pict/2020")
//     .then((res)=>{
//       setData(res.data);
//       // console.log(res.data);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })

//   },[]);

//   return (<>
//       <center>
//         <h1 style={{marginBottom:"1vh"}}>2020</h1>
//         <div id="table-wrapper">
//           <div id="table-scroll">

//           <table>
//               {/* <thead>
//                 <tr>
//                     <th>Company</th>
//                     <th>Pointer</th>
//                     <th>Branch</th>
//                     <th>Total</th>
//                     <th>Salary</th>
//                     <th>Date</th>
//                     <th>Investment</th>
//                 </tr>
//               </thead> */}

//               <thead>
//                   <tr>
//                       <th className="sticky-header">Company</th>
//                       <th className="sticky-header">Pointer</th>
//                       <th className="sticky-header">Branch</th>
//                       <th className="sticky-header">Total</th>
//                       <th className="sticky-header">Salary</th>
//                       <th className="sticky-header">Date</th>
//                       <th className="sticky-header">Investment</th>
//                   </tr>
//               </thead>

//               <tbody>
//                   {
//                     data.map((info)=>{
//                       const dateString = info.date;
//                       const dateObject = new Date(dateString);
//                       const year = dateObject.getFullYear();
//                       const month = dateObject.getMonth() + 1;
//                       const day = dateObject.getDate();

//                       const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
//                         return(
//                           <tr key={info._id}>
//                               <td>{info.company}</td>
//                               <td>{info.pointer}</td>
//                               <td>{info.branch}</td>
//                               <td>{info.total}</td>
//                               <td>{info.salary}</td>
//                               <td>{formattedDate}</td>
//                               <td>{info.investment}</td>
//                           </tr>
//                         )
//                     })
//                   }
//               </tbody>
//             </table>


//           </div>
//         </div>
//       </center>
//   </>)
//   // <div key={index} className='company-data'>
//   //   <div>{info.company}</div>
//   //   <div>{info.pointer}</div>
//   //   <div>{info.branch}</div>
//   //   <div>{info.total}</div>
//   //   <div>{info.salary}</div>
//   //   <div>{formattedDate}</div>
//   //   <div>{info.investment}</div>
//   // </div>
// }

