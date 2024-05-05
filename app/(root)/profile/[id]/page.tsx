
const Profile = ({params} : any) => {

    console.log(params);

    return (
        <div>
        {params.id}        
        </div>
    )

}
export default Profile;