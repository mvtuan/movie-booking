import React from "react";

const NotFound = () => {
  return (
    <section>
      <div className="container">
        <div className="text">
          <h1>Page Not Found</h1>
          <p>
            We can't seem to find the page you're looking for. Please check the
            URL for any typos.
          </p>
        </div>
        <div>{/* <img className="image" src="errorimg.png" alt="" /> */}</div>
      </div>
    </section>
  );
};

export default NotFound;
