import React from 'react'

function Content2() {
  return (
    <div className='row '>
        <div className='col-md m-auto zoom bg-dark p-2 height'>
            <img className='opacity ' src="https://packersandmoversblr.com/wp-content/uploads/2021/07/thsnsign-15.png" alt="" />
            <div className='overlay1'>
                
                <ul>
            <li className="p-2 text-white fs-3"><i className="fa fa-check text-white p-1 rounded-circle bg-primary p-1 mr-3"></i > 100% Safe and Secure</li>
            <li className="p-2 text-white fs-3"><i className="fa fa-check text-white p-1 rounded-circle bg-primary p-1 mr-3"></i > 100% Safe and Secure</li>
            <li className="p-2 text-white fs-3"><i className="fa fa-check text-white p-1 rounded-circle bg-primary p-1 mr-3"></i > 100% Safe and Secure</li>
            <li className="p-2 text-white fs-3"><i className="fa fa-check text-white p-1 rounded-circle bg-primary p-1 mr-3"></i > 100% Safe and Secure</li>
            <button className='btn btn-danger p-2 m-5'>9976466766</button>
           </ul>
            
            


            </div>
        </div>

        <div className='col-md p-5'>
            <h1 className='text-warning text-center mt-4'>Request a call back</h1>

            <form action="">
                <div className='row'>
                    
                <div className='col'>
                   <label htmlFor="movingfrom">moving from</label>
                    <input className='formwidth border' type="text" name='movingfrom' placeholder='Moving From' />
                </div>

                <div className='col'>
                    <label htmlFor="movingto"> Moving to</label>
                    <input className='formwidth border' type="text" name='movingto' placeholder='Moving to' />
                </div>

                </div>

                <div className='row p-2'>
                    <div className='col '>
                        <label className='m-1' htmlFor="beds">beds</label>
                        <input type="checkbox" name="beds" id="beds" />
                    </div>
                    <div className='col'>
                    <label className='m-1' htmlFor="tables">table</label>
                        <input type="checkbox" name="tables" id="tables" />
                    </div>
                    <div className='col'>
                    <label className='m-1' htmlFor="sofa">sofa</label>
                        <input type="checkbox" name="sofa" id="sofa" />
                    </div>
                    <div className='col'>
                    <label className='m-1' htmlFor="tv">tv</label>
                        <input type="checkbox" name="tv" id="tv" />
                    </div>
                    <div className='col'>
                    <label className='m-1' htmlFor="Acs">Acs</label>
                        <input type="checkbox" name="Acs" id="Acs" />
                    </div>
                </div>

                <div className='row p-2'>
                    <div className='col'>
                        <label className='m-1' htmlFor="machine">machine</label>
                        <input type="checkbox" name="beds" id="machine" />
                    </div>
                    <div className='col'>
                    <label className='m-1' htmlFor="fridge">fridge</label>
                        <input type="checkbox" name="fridge" id="fridge" />
                    </div>
                    <div className='col'>
                    <label className='m-1' htmlFor="books">books</label>
                        <input type="checkbox" name="books" id="books" />
                    </div>
                    <div className='col'>
                    <label className='m-1' htmlFor="others">others</label>
                        <input type="checkbox" name="others" id="others" />
                    </div>
                   
                </div>


                <div className='row'>
                    
                <div className='col'>
                   <label htmlFor="username">User Name</label>
                    <input className='formwidth border' type="text" name='username' placeholder='User Name' />
                </div>

                <div className='col'>
                    <label htmlFor="number"> Number</label>
                    <input className='formwidth border' type="number" name='number' placeholder='Number' />
                </div>

                </div>

                
                <div className='row'>
                    
                <div className='col'>
                   <label htmlFor="pickdate">Pick Date</label>
                    <input className='formwidth border' type="date" name='pickdate' placeholder='Pick Date' />
                </div>

                <div className='col'>
                    <label htmlFor="email"> Email</label>
                    <input className='formwidth border' type="email" name='email' placeholder='Email' />
                </div>

                </div>
                
                <button className='formwidth btn btn-danger mt-5' type="submit">send</button>
               





            </form> 

        </div>


    </div>
  )
}

export default Content2