import jwt from "jsonwebtoken"

const secret="adhjgsgfjdgdfjhgsf";


export function setUser(user) {
  const token=jwt.sign(
    {
      id:user._id,
      ...user
    },secret
  )
  return token;
}

export function getUser(token) {
  try{
    const user=jwt.verify(token,secret);
    return user;
  }catch(err){
    console.log(err);
    return null;
  }
}
