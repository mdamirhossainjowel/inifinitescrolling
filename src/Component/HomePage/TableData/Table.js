import React, { useEffect, useState } from 'react'

const Table = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=500")
        .then((res) => res.json())
        .then((data) => setUsers(data.results));
        
    }, []);
    return (
        <div className="overflow-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody >
    { users?.map((user, index) => (
     
            <tr key={index}>
              <th>{index + 1}</th>
              <th><div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.picture?.medium} alt="user" />
          </div>
        </div></th>
              <td>{user?.name?.title +" "+ user?.name?.first+" "+user?.name?.last}</td>
              <td>
                {user?.email}
              </td>
              <td>
                {user?.location?.street?.number+"-"+user?.location?.street?.name+"," +user?.location?.city+","+user?.location?.state+","+user?.location?.country+"."}
              </td>
            </tr>
          )) }
    </tbody>
  </table>
</div>
    )
}

export default Table