function LoginButton(props) {
  const isLoggedIn = props.isLoggedIn;
  return(
    <>
    <button onClick={props.onClick}>{isLoggedIn ? "logout" : "login"} </button>
    </>
  )
}
export default LoginButton;