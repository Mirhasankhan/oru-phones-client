import { toast } from "react-hot-toast"

const UseUpdate = (id, value) => {
    // currentUser[0]._id}
    const url = `https://oru-phones-server2-mirhasankhan.vercel.app/updateProfile/${id}`
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(value)
    })
        .then(() => {
            toast.success("User Detail Updated")
        })
        .catch((error) => {
            toast.error(error.message)
        })
}

export default UseUpdate;