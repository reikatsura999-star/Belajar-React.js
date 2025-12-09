import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn === true){
        return <UserGreeting />;
    }else if (isLoggedIn === false){
        return <GuestGreeting />;
    }else{
        return <h1>Status Login Tidak Diketahui</h1>
    }
   
    
}
export default Greeting;