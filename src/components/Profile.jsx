const Profile = ({name, email, address}) => {
    return(
        <div style={{border : "1px solid black", padding : "20px", borderRadius : "8px", marginTop : "6px"}}>
            <h1>name : {name}</h1>
            <h1>email : {email}</h1>
            <h1>address : {address}</h1>
            <p>This is functional component</p>
        </div>
    )
}
export default Profile;