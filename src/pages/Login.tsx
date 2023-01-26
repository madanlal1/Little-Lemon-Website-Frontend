const AboutPage = () => {
    return (
      <>
      <div className="row g-0">
           
            <div style={{paddingLeft:'500px', paddingRight:'500px', paddingTop:'80px'}} className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <br/><br/>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Username</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="username"/>
                    </div><br/>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput2">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="Password"/>
                    </div><br/>
                    <center>
                      <button type="submit" className="btn btn-primary">Login</button>
                    </center>
                </form>
            </div>
        </div>
      </>
    );
  };
  
  export default AboutPage;
  