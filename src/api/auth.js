// Saved user API 
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

};

// Make Admin API

export const makeAdmin = async (id) =>{
    const res = await fetch (`${import.meta.env.VITE_LOCAL_HOST}/users/admin/${id}`,{
        method: "PATCH"
    })
    const data = await res.json()
    return data; 
}
// Make Admin API

export const makeTeacher = async (id) =>{
    const res = await fetch (`${import.meta.env.VITE_LOCAL_HOST}/users/teacher/${id}`,{
        method: "PATCH"
    })
    const data = await res.json()
    return data; 
}


