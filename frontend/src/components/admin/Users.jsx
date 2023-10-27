import React from "react";
import me from "../../assets/profile pic.jpg";

const Users = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#sdfsfdfsfd</td>
                <td>Jeet</td>
                <td>
                  <img src={me} alt="profile_pic" />
                </td>
                <td>Admin</td>
                <td>{"23-03-2002"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
