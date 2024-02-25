import React, { useState } from "react";
const INITIAL_STATE = [
  { movieName: "Inception", directorName: "Christopher Nolan" },
  { movieName: "Deadpool", directorName: "Deadpool" },
  { movieName: "Iron Man", directorName: "JOhn favreau" },
];

const Table = () => {
  const [tableData, setTableData] = useState(INITIAL_STATE);
  const [movieName, setMovieName] = useState("")
  const [directorName, setDirectorName] = useState("");
  const [editedMoveiName, setEditedMovieName] = useState("");
  const [editedDirectorName, setEditedDirectorName] = useState("")
  const handleAdd = ()=>{
    if(movieName && directorName){
        setTableData((prev)=>[...prev,{movieName:movieName, directorName:directorName}])
        setMovieName("");
        setDirectorName("")
    }else{
        alert("please fill both the fields to add items")
    }
  }
  const handleRemove=(newIndex)=>{
    const tempTableData = tableData.filter((item,index)=>index !== newIndex)
    setTableData([...tempTableData])
  }

  const handleEdit=(index)=>{
    const tempTableData = [...tableData];
    tempTableData[index].edit = true
    setEditedMovieName(tempTableData[index].movieName)
    setEditedDirectorName(tempTableData[index].directorName)
    setTableData([...tempTableData])
  }

  const handleUpdate = (index)=>{
    const tempTableData = [...tableData]
    tempTableData[index].movieName = editedMoveiName;
    tempTableData[index].directorName = editedDirectorName;
    tempTableData[index].edit = false
    setTableData([...tempTableData])
    
  }
  return (
    <div>
      <table >
        <tr>
          <th>
            <div>
              <p>Movie Name</p>
              <input value={movieName} onChange={(e)=>setMovieName(e.target.value)}/>
            </div>
          </th>
      
            <th>
              <div>
                <p>director Name</p>
                <input value={directorName} onChange={(e)=>setDirectorName(e.target.value)}/>
              </div>
            </th>
            <tr>
                <div style={{paddingTop:"50px"}}>
                <button onClick={handleAdd}>Add</button>
                </div>
            </tr>
        
        </tr>
        {tableData.map((item, index)=>{
            return<tr>
                <td>
                    {item.edit ? <input value={editedMoveiName} onChange={(e)=>setEditedMovieName(e.target.value)}/> : item.movieName}
                    
                </td>
                <td>
                    {item.edit ? <input value={editedDirectorName} onChange={(e)=>setEditedDirectorName(e.target.value)}/> : item.directorName}
                </td>
                <td>
                    {item.edit ? <button onClick={()=>handleUpdate(index)}>update</button> : <div><button onClick={()=>handleRemove(index)}>remove</button><button onClick={()=>handleEdit(index)}>edit</button></div>}
                </td>
            </tr>
        })}
      </table>
    </div>
  )
};

export default Table;