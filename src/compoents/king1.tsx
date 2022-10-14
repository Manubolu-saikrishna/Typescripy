type personName={
  name: {
    name:string,
    place:string,
  }
}

const King1 = (props: personName) => {
  return (
    <div>
      <h1>
        {props.name.name} is the{props.name.place}
        {/* {
          props.isLoggedIn ? `welcome${props.name}to the ${props.place} `:"stay in hyd"
        } */}
        </h1>
        </div>
  )
}

export default King1