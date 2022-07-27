import React from 'react';

const Section = ({users}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.age} y.o.</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Section;