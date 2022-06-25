import { useContext } from 'react'
import { UserContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { user, handleSingOut } = useContext(UserContext);
  
  return (
    <div>
      <img draggable={false} src={`https://ui-avatars.com/api/?name=${user.username}?bold=true?background=0D8ABC&color=000`} alt="avatar_profile" />
          <h3>{user.username}</h3>
          <button onClick={() => handleSingOut()}>
            SingOut
          </button>
    </div>
  )
}
