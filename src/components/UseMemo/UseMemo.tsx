import React, { useMemo } from "react";
 
type User = {
    id: number;
    name: string;
}
type Props = {
    users: User[];
    selectedUserId: number;
}
export function UserList({ users, selectedUserId }: Props) {
   const selectedUser = useMemo(() => {
     return users.find((user) => user.id === selectedUserId);
   }, [users, selectedUserId]);

    return (
      <div>
        {selectedUser && <p>Selected User is {selectedUser.name}</p>}
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
}