import React from 'react'

const Card = ({user}) => {
  return (
	<div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
			      <object data={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} width="300" height="300"> </object>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p> <span>{user.name} </span> </p>
                <p> <span>Email: </span> <span>{user.email} </span> </p>
                <p> <span>Phone: </span> <span>{user.phone} </span> </p>
                <p> <span>Company: </span> <span>{user.company.name} </span> </p>
                <p> <span>Website: </span> <span>{user.website} </span> </p>
                <p> <span>Address: </span> <span>{`${user.address.street}` } </span> </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card