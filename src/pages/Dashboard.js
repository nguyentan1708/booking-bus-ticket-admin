import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import {Helmet} from "react-helmet";
export default function Dashboard() {
    return (
        <div className="wrapper">
            <Sidebar />
            <Main />
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.33.2/apexcharts.min.js"
                    integrity="sha512-iBEfFld2z1SAXCPmgoA40VQtqGP0cEJw4fy+t3ARW30uEfzf8hyrmm4mc5qdth3wZRPdKTv/auk5WH52klRVDg=="
                    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script src="./../vendors/apexcharts.js"></script>
                {/* <script src="./../scripts/dashboardMenu.js"></script> */}
                <script src="../scripts/dashboardMenu.js"></script>
            </Helmet>
        </div>
    )
}