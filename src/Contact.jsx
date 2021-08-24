import React from 'react'

export default function Contact(props) {
    

    return (
        <>
            <div className="my-5">
            <h1 className="text-center">Contact  Us</h1>
            <div className="container contact">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" className="form-control" id="fullname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" className="form-control" id="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
