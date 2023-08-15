import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

const UseUser = ()=>{
    const {user} = useContext(AuthContext)
    const { data: currentUser = [] , isLoading, refetch} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://oru-phones-server2-mirhasankhan.vercel.app/users?email=${user?.email}`)
            return res.json()
        }        
    })
    return [currentUser, isLoading, refetch]
}
export default UseUser;