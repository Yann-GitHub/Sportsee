import { useParams, Navigate } from "react-router-dom"
import Banner from "../../components/Banner"
// import { useFetch } from "../../services/useFetch"
// import Loader from "../../components/Loader"
// import ErrorImg from "../../assets/server_down.svg"
// import { useEffect, useState } from "react"
import ChartActivity from "../../components/ChartActivity"
import ChartAverage from "../../components/ChartAverage"
import ChartPerformance from "../../components/ChartPerformance"
import ChartScore from "../../components/ChartScore"
import KeyWrapper from "../../components/KeyWrapper"

function Dashboard() {
  const { id } = useParams()

  if (id !== "12" && id !== "18" && id !== "22" && id !== "28") {
    return <Navigate to="/error" />
  }

  // In case of API call from Dashboard page
  // const error = true
  // if (error) {
  //   return (
  //     <div className="dashboard-content__errorWrapper">
  //       <img
  //         src={ErrorImg}
  //         alt="erreur"
  //         className="dashboard-content__errorImg"
  //       />
  //       <span className="dashboard-content__errorTxt">
  //         Désolé, une erreur s'est produite. Veuillez réessayer plus tard.
  //       </span>
  //     </div>
  //   )
  // }

  return (
    <div className="dashboard-content">
      <Banner />
      <div className="dashboard-content__chartsWrapper">
        <div className="dashboard-content__chartsWrapperLeft">
          <div className="dashboard-content__wrapperLeftTop">
            <ChartActivity />
          </div>
          <div className="dashboard-content__wrapperLeftBottom">
            <ChartAverage />
            <ChartPerformance />
            <ChartScore />
          </div>
        </div>
        <div className="dashboard-content__chartsWrapperRight">
          <KeyWrapper />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
