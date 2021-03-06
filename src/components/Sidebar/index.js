import React from "react";
import useUser from "../../hooks/useUser";
import User from "./User";
import Suggestions from "./Suggestions";

const Sidebar = () => {
  const {
    user: { docId, fullName, username, userId, following },
  } = useUser();
  return (
    <div className="p-4">
      <User username={username} fullname={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserdocId={docId}
      />
    </div>
  );
};

export default Sidebar;
