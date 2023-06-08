export const savedUser = async (user)=>{
    const userInfo = {
        name: user?.displayName,
        email: user?.email,
        role: "student",
        photo: user?.photoURL,
    }
    const res = await fetch (`${import.meta.env.VITE_LOCAL_HOST}/users`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
    })
    const data = await res.json()
    return data

}