import React from "react";
import Layout from "./core/Layout";

const App = () => {
  return (
    <Layout>
      <div className="col-md-6 offset-md-3 text-center">
        <h1 className="p-5">
          MERN Stack Authentication <b>Boilerplate</b>
        </h1>
        <h2>MERN STACK</h2>
        <hr />
        <p className="lead">
          MERN stack login register system with <b>account activation</b>,{" "}
          <b>forgot password</b>, <b>reset password</b>, <b>login</b>
          with <b>facebook</b> & <b>google</b> as well as private and protected
          routes for authenticated user and users with the role of admin.
        </p>
        <h4 className="p2">Bonus</h4>
        <p className="lead">
          Profile update & deployment to digital ocean cloud servers
        </p>
      </div>
    </Layout>
  );
};

export default App;
