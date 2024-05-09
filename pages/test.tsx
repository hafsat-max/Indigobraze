
// import React, { useState } from 'react';

// function EditableDataList() {
//   const [data, setData] = useState([
//     "Data item 1",
//     "Data item 2",
//     "Data item 3"
//   ]);

//   const [editIndex, setEditIndex] = useState(null); // State to track the index being edited

//   const handleEdit = (index) => {
//     setEditIndex(index); // Set the index being edited
//   };

// // Reset editIndex after saving
//   };

//   return (
//     <div>
//       {data.map((item, index) => (
//         <div key={index} className="data-item">
//           {editIndex === index ? (
//             <input
//               type="text"
//               value={item}
//               onChange={(e) =>e.target.value}
//             />
//           ) : (
//             <span>{item}</span>
//           )}
//           {editIndex !== index && (
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default EditableDataList;
