import {Name} from './GreetProps.type'
type GreetProps={
name:Name[]    

}
export const Greet = ({name,messageCount,isLoggedIn}:Name) => {
    return (
    <div>
{isLoggedIn?`${name}${messageCount}`:"not greet"}

    </div>
  )
}
