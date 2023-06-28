import React from "react";

export default function UsersList({ users,onDelete,onSallaryUp,onSallaryDoWn}) {
  return (
    <div>
      <h3>UserList</h3>
      <table border={"1px solid"}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surename</th>
            <th>salry</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elm) => {
            return (
              <tr key={elm.id}>
                <td>{elm.id}</td>
                <td>{elm.name}</td>
                <td>{elm.surename}</td>
                <td>{elm.salary}</td>
                <td>
                    <button onClick={() => onSallaryUp(elm.id)}>salary up</button>
                    <button onClick={() => onSallaryDoWn(elm.id)}>salary down</button>
                    <button onClick={() => onDelete(elm.id)}>delete</button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
