type StatusProps={
    status:'loading'|'success'|'error'
}


export const Status = (props:StatusProps) => {
  
let message;
if(props.status=="loading"){
    message="loading"
}
else if(props.status=="success"){
    message="success"
} 
else{
    message="failed"
}
    return (
    <div>
<h3>status-{message}</h3>

    </div>
  )
}
