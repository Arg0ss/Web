import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'
import { UserContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { push } = useRouter()
  const { user, isAuth, handleSingOut } = useContext(UserContext);

  // useEffect(() => {
  //   if(!user) return push('/')
  // }, [])

  if(!isAuth) return <></>
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
