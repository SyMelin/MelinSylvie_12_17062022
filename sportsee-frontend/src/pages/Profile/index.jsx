import { useEffect, useState } from "react"
import Welcome from "../../components/Welcome"
import NumbersWrapper from "../../components/NumbersWrapper"
import urls from "../../utils/constantes/urls"
import { useFetch, useHandleResize } from '../../utils/hooks'
import { User } from '../../models/user'
import '../../styles/Profile.css'


/**
 * React component: Page profile of the user
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function Profile() {
    const { userId } = {userId: 12} //to be substituted by " const {userId}  = useParams() " when the router is set
    const { data, isLoading, error } = useFetch(Object.values(urls(userId)))
    
    // EVENT ON RESIZE :
    // Recharts' ResponsiveContainer not working
    // so use the state variable 'windowDimensions' and th e hook useHandleResize()
    const { windowDimensions } = useHandleResize()


    if (error) {
        return <div>Error: Something went wrong</div>
    }
    
    if (!isLoading) {
        /* Correction of : 
            //const [ mainData, activity, averageSessions, activities, todayScore, keyData ] = data
            //const user = { mainData, activity, averageSessions, activities, todayScore, keyData }
        */
        const user = new User(data) // modification following the project's presentation

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