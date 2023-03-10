import React from "react";

const cardMaker = (data) => {
  console.log("data");
  console.log(data);
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
    </div>
  );
}

export default cardMaker;