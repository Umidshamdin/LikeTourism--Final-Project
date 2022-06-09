// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import "../../assets/sass/hoteldetail/rooms.scss";

// function Rooms() {
//   const [room, setRooms] = useState([]);
//   const [resrooms, setResRooms] = useState([]);

//   useEffect(() => {
//     loadRooms();
//     setResRooms(JSON.parse(localStorage.getItem("test")));
//   }, [room]);

//   async function loadRooms() {
//     await axios
//       .get(`https://localhost:44363/api/Reservation/GetAll`)
//       .then((res) => {
//         const result = res.data;
//         setRooms(result);
//       });
//   }

//   const [test, setTest] = useState([]);

//   const handle = (x) => {
//     setTest([...test, x]);
//     localStorage.setItem("test", JSON.stringify(test));
//   };
//   return (
//     <div>
//       <div className="container">
//         <div className="row mt-5">
//           {room.map((rooms) => (
//             <div className="col-7 roominfo mt-3">
//               <img
//                 className="roomimg"
//                 src={`data:image/jpeg;base64,${rooms.image}`}
//                 alt=""
//               />
//               <div className="infoss">
//                 <h5>{rooms.roomType}</h5>
//                 <hr />
//                 <span>Otaga daxildir:</span> <span>{rooms.breakfast}</span>
//                 <div className="iconinfo">
//                   <ul>
//                     <li>
//                       <i class="fas fa-parking">Parking</i>
//                     </li>
//                     <li>
//                       <i class="fas fa-parking">Parking</i>
//                     </li>
//                     <li>
//                       <i class="fas fa-parking">Parking</i>
//                     </li>
//                     <li>
//                       <i class="fas fa-parking">Parking</i>
//                     </li>
//                   </ul>
//                   <ul>
//                     <li>
//                       <i class="fas fa-parking">Parking</i>
//                     </li>
//                     <li>
//                       <i class="fas fa-parking">Parking</i>
//                     </li>
//                     <li>
//                       <i class="fas fa-parking">Parking</i>
//                     </li>
//                     <li>
//                       <i class="fas fa-parking">Parking</i>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="choise">
//                 <h6>Otaq sec</h6>
//                 <select>
//                   <option>1 otaq</option>
//                   <option>2 otaq</option>
//                   <option>3 otaq</option>
//                   <option>4 otaq</option>
//                 </select>
//               </div>

//               <div className="price">
//                 <h6>Qiymet</h6>

//                 <p>{rooms.roomPrise} AZN</p>
//               </div>
//               <div className="but">
//                 <button
//                   onClick={() => handle(rooms)}
//                   className="btn btn-primary"
//                 >
//                   Rezervasiya et
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="col-5">
//             {resrooms &&
//               resrooms.map((e) => {
//                 return (
//                   <tr>
//                     <td>{e.breakfast}</td>
//                     <td>{e.roomType}</td>
//                     <td>{e.roomPrise}</td>
//                   </tr>
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Rooms;
