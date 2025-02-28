import React from 'react';


const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-sm p-4">
                            <h3 className="text-center mb-4">Login</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" onClick={() => navigate("")}>Login</button>
                                
                            </form>
                            <p className="text-center mt-3"><a href="#">Forgot password?</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
