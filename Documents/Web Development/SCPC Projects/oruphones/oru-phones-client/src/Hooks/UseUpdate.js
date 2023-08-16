import { toast } from "react-hot-toast"

const UseUpdate = (id, value, refetch) => {  
    const url = `https://oru-phones-server2-mirhasankhan.vercel.app/updateProfile/${id}`
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(value)
    })
        .then(() => {
            refetch()            
            toast.success('User Detail Updated', {
                position: 'top-right',
                style: { backgroundColor: 'blue', color: 'white' }
            })
        })
        .catch((error) => {
            toast.error(error.message)
        })
}

export default UseUpdate;