import React from "react";

function Register() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-5">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h4>Register Here</h4>
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>

                <button className="btn btn-primary w-100">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
  );
}

export default Register;