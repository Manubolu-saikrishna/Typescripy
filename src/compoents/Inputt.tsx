
type InputtProps={
value:string,
handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
export const Inputt = (props:InputtProps) => {
  return (
    <div>
      <input type="text"value={props.value} onChange={props.handleChange}/>
    </div>
  )
}
