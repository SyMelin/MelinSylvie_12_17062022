import { useEffect, useState } from "react"
import Welcome from "../../components/Welcome"
import NumbersWrapper from "../../components/NumbersWrapper"
import urls from "../../utils/constantes/urls"
import { useFetch } from '../../utils/hooks'
import '../../styles/Profile.css'

function Profile() {
    const { userId } = {userId: 12} //to be substituted by " const {userId}  = useParams() " when the router is set
    const { data, isLoading, error } = useFetch(Object.values(urls(userId)))

    // EVENT ON RESIZE :
    // Recharts' ResponsiveContainer not working
    // so use the state variable 'dimensions' and fonction 'handleResize() in useEffect
    const [windowDimensions, setWindowDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    
    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
            height: window.innerHeight,
            width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })


    if (error) {
        return <div>Error: Something went wrong</div>
    }
    
    if (!isLoading) {
        const [ mainData, activity, averageSessions, activities, todayScore, keyData ] = data
        const user = { mainData, activity, averageSessions, activities, todayScore, keyData }

        return (
            <div className="dashboard">
                <div className="dashboardInner">
                    <Welcome
                        userName={user.mainData.userInfos.firstName}
                        todayScore={user.todayScore}
                    />
                    <NumbersWrapper
                        user={user}
                        windowDimensions={windowDimensions}
                    />
                </div>
            </div>
        )
    } 
}

export default Profile