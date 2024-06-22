import React from "react";
import FormButtons from "./FormButtons";

const ListItem = ({ data }) => {
  return (
    <div>
      {data.map((data) => (
        <div className="list-items">
          <p key={data.name}>
            {data.name}
          </p>
          <p key={data.age}>{data.age}</p>
          <FormButtons />
        </div>
      ))}
    </div>
  );
};

export default ListItem;
