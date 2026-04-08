import { useEffect, useState } from "react";
import { getAllUsers } from "../api/users";

interface User {
  username: string;
  userId: number;
}

const MainContent = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        console.log("data: ", data[0].username);
        setUsers(data);
      })
      .catch(console.error);
  }, []);

  const Messages = [{ uuid: 1, user: "Sam", content: "See you Space Cowboy" }];

  return (
    <div className="w-full h-9/10 bg-sky-50 content-center p-4">
      <div className="w-full h-screen bg-white rounded-xl m-4 p-4">
        {users.length > 0 && <p>{users[0].username}</p>}
        <div>
          {Messages.map((message) => (
            <div
              key={message.uuid}
              className="w-2/5 h-20 bg-blue-400 rounded-xl p-4 m-4"
            >
              <div className="text-white text-lg font-bold">{message.user}</div>
              <div className="text-white text-md">{message.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
