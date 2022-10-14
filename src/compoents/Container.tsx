import {ContainerProps} from './Container.type'
// {{color:"red", padding:"1rem", background-color:"#282c34"}}
export const Container = (props:ContainerProps) => {
  return (
    <div style={props.styles}>Container</div>
  )
}
