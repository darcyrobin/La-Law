import React from "react";
import AddFriend from "./AditionalSideComponent/AddFriend";

function AddProfileBox() {
  return (
    <>
      <div
        style={{
          width: "280px",
          height: "150px",
          backgroundColor: "#F0F2F5",
          display: "flex",
          alignItems: "center",
          borderRadius: "12px",
          margin: "10px",
        }}
      >
        <AddFriend />
      </div>
    </>
  );
}

export default AddProfileBox;
