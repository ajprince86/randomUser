import { useState } from "react";

function UserSummary(props) {
  const [showMore, setShowMore] = useState(false);
  const data = props.userData ? props.userData : "there is no user data";
  console.log(data);
  function toggleState() {
    setShowMore((prevState) => !prevState);
  }

  return (
    <div>
      {
        <div>
          <h1>
            {data.name.first} {data.name.last}
          </h1>
          <p>{data.email}</p>
        </div>
      }
      {showMore ? (
        <div>
          <h4>More Information Below</h4>
          <p>Street Num: {data.location.street.number}</p>
          <p>Street Name: {data.location.street.name}</p>
          <p>City: {data.location.city}</p>
          <p>State: {data.location.state}</p>
          <p>Username: {data.login.username}</p>
          <img src={data.picture.medium} alt="image" />
        </div>
      ) : (
        ""
      )}
      <button onClick={toggleState}>
        {showMore ? "Less Info" : "Show More"}
      </button>
    </div>
  );
}

export default UserSummary;
