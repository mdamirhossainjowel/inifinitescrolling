import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadData from "../../Shared/LoadData";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [Hasmore, setHasmore] = useState(true);
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=500")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  const fetchMoreData = () => {
    if (users.length >= 500) {
      setHasmore(false);
      return;
    }

    setTimeout(() => {
      setData(users.slice(Data.length, Data.length + 100));
    }, 500);
  };
  return (
    <div className="overflow-x-auto">
      <InfiniteScroll
        dataLength={Data.length}
        next={fetchMoreData}
        hasMore={Hasmore}
        loader={<LoadData></LoadData>}
      >
        <table className="table w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th>
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.picture?.medium} alt="user" />
                    </div>
                  </div>
                </th>
                <td>
                  {user?.name?.title +
                    " " +
                    user?.name?.first +
                    " " +
                    user?.name?.last}
                </td>
                <td>{user?.email}</td>
                <td>
                  {user?.location?.street?.number +
                    "-" +
                    user?.location?.street?.name +
                    "," +
                    user?.location?.city +
                    "," +
                    user?.location?.state +
                    "," +
                    user?.location?.country +
                    "."}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};

export default Table;
