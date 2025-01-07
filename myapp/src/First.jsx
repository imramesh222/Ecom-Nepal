import { Link } from "react-router-dom"

function First(){
  return(
    <>
      <div>
        <h1 style={{color:'red',backgroundColor:'yellow'}}>
          My name is Ronaldo.
        </h1>
        <h3 className="text-danger text-center fs-">
          Hello
        </h3>
      </div>
      <Link to={'/second'} className="second">Go to second page.</Link>
    </>
  )
}

export default First