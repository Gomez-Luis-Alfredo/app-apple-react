

export const Singup = () => {
  return (
    <><button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal"><span className="fa fa-user-plus me-1"/>
    Register
  </button>
  
  
  <div className="modal fade" id="signupModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Register</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <button className="btn btn-primary w-100 mb-2"><span className="fa fa-google me-4"/>Sign up With Google</button>
          <button className="btn btn-primary w-100 mb-2"><span className="fa fa-facebook me-4"/>Sign up With facebook</button>
          
        <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
      <input type="text" className="form-control" id="exampleInput" />
      <div id="emailHelp" className="form-text">We ll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
  </form>
        </div>
        
      </div>
    </div>
  </div>
    </>
  )
}
