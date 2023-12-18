const getUsers = async () => {
    const res = await fetch('https://estate-api-0bne.onrender.com/users')
    return res.json()
}

export default getUsers
