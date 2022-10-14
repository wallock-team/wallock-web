import { useRouter } from 'next/router';
import { useEffect } from "react"
import { useAppContext } from "../../pages/context"

const useAuth = () => {
    const {refreshUser} = useAppContext()
    const route = useRouter()
    useEffect(() => {
        refreshUser()
    },[])
}

export default useAuth