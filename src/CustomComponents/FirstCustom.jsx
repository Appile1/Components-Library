import React, { useState } from "react";
import useCallAPI from "../CustomHooks/CallAPI";
import { Audio } from "react-loader-spinner";

export default function FirstCustom() {
  const [isLoading, isError, data, fetchApi] = useCallAPI();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = async () => {
    setButtonClicked(true);
    await fetchApi("https://api.github.com/users");
  };

  if (!buttonClicked) {
    return <button onClick={handleButtonClick}>Load GitHub Users</button>;
  }

  if (isLoading) {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return (
    <div>
      <h2>Data Loaded Successfully:</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}
