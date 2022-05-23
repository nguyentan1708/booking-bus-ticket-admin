import "../styles/dashboard.css";
import "../styles/reset.css";
import home_img_logo from "../assets/images/home-img-logo.png";
import side_mini_logo from "../assets/images/sidebar-mini-logo.png";
export  default function Sidebar(){
    return(
        <section className="sidebar">
        <a href="#" className="sidebar-logo">
            <img src={home_img_logo} alt="" className="sidebar-logo-img"/>
            <img src={side_mini_logo} alt="" className="sidebar-logo-mini"/>
        </a>
        <ul className="sidebar-list">
            <li className="sidebar-item sidebar-active">
                <a href="#" className="sidebar-link">
                    <i className='bx bxs-dashboard sidebar-link-icon'></i>
                    <span className="sidebar-link-text">dashboard</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className='bx bxs-user-account sidebar-link-icon'></i>
                    <span className="sidebar-link-text">customer</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className='bx bxs-credit-card-front sidebar-link-icon'></i>
                    <span className="sidebar-link-text">ticket</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className='bx bxs-business sidebar-link-icon'></i>
                    <span className="sidebar-link-text">route</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className='fa-solid fa-calendar-days sidebar-link-icon'></i>
                    <span className="sidebar-link-text">schedule</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className='fa-solid fa-bus sidebar-link-icon'></i>
                    <span className="sidebar-link-text">futa bus</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className='bx bxs-bar-chart-alt-2 sidebar-link-icon'></i>
                    <span className="sidebar-link-text">analytics</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className='bx bxs-user-pin sidebar-link-icon'></i>
                    <span className="sidebar-link-text">staff</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className='bx bxs-cog sidebar-link-icon'></i>
                    <span className="sidebar-link-text">settings</span>
                </a>
            </li>
        </ul>
    </section>
    )
}