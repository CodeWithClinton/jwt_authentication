import React from 'react'

const Error = ({error}) => {
  return (
    <div className="alert alert-danger" role="alert">
    {error}
  </div>
  )
}

export default Error






// # api endpoints:

// # get and create notes - http://127.0.0.1:8000/notes/
// # user login - http://127.0.0.1:8000/token/
// # refresh token - http://127.0.0.1:8000/token/refresh/
// # user registration - http://127.0.0.1:8000/register/
// # get username - http://127.0.0.1:8000/get-username/