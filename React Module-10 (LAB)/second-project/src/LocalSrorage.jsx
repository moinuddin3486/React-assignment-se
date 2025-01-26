import React, { useState } from 'react'

const LocalStorage = () => {
  let [name, setname] = useState("")
  let [age, setage] = useState("")
  let [data, setdata] = useState([])
  let [id, setid] = useState("")
  let handleChange = (e) => {
    setage(e.target.value)
  }
  let savedata = (e) => {
    e.preventDefault()
    if (id != "") {
      let res = data.map((i, index) => {
        if (id == index) {
          i.name = name
          i.age = age
        }
        return i
      })
      setdata(res)


    } else {
      let obj = {
        name: name,
        age: age
      }
      data.push(obj)
      setdata(data)
    }
    setname("")
    setage("")
    setid("")
    //  console.log(data);
  }
  let del = (id) => {
    let res = data.filter((i, index) => {
      return index != id
    })
    setdata(res)
  }
  let upd = (id) => {
    let res = data.find((i, index) => {
      return index == id
    })
    setname(res.name)
    setage(res.age)
    setid(id)
  }

  return (
    <div>
      <form className='frm' action="#" method='post' name="frm" onSubmit={savedata}>
        <h3>USer From</h3>
        <label htmlFor="">Name : </label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => {
          setname(e.target.value)
          // console.log(name);

        }} /><br /><br />
        <label htmlFor="">Age :</label>
        <input type="number" id='age' name='age' value={age} onChange={handleChange} /><br /><br />
        <input type="submit" name="save" id="save" value="save"  style={{height:"30px",width:"70px"}}/>
      </form><br /><br />
      <table border={2}>
        <thead >
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age </td>
            <td colSpan={2}>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((i, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td ><button onClick={() => upd(index)} >Update</button></td>
                  <td ><button onClick={() => del(index)}>Delete</button></td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}
export default LocalStorage;
