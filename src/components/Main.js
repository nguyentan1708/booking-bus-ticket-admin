import { BxBell,BxMenu} from "@bx-design/react-icons";
import "../styles/dashboard.css";
import "../styles/reset.css";
export default function Main(){
    return(
        <div className="main">
        <div className="main-overlay"></div>
        <header className="header">
            <div className="header-toggle">
                <BxMenu className="bx bx-menu"/>
                {/* <i className='bx bx-menu'></i> */}
            </div>
            <div className="header-search">
                <input type="text" className="header-search-input" placeholder="Tìm kiếm ở đây ..."/>
                <i className='bx bx-search header-search-icon'></i>
            </div>
            <div className="header-user">
                <img src="https://media.istockphoto.com/photos/steamed-octopus-for-sashimi-picture-id1165598498?b=1&k=20&m=1165598498&s=170667a&w=0&h=8-oKrycjOj5wqzNyTuKrP3aJ6faLbFq2y80QvCJ37Z0="
                    alt="" className="header-user-avatar"/>
                <div className="header-user-info">
                    <h3 className="header-user-name">Sin Takodachi</h3>
                    <p className="header-user-position">Member Tentacles</p>
                </div>
                <div className="header-user-notify">
                    <div className="header-user-notify-number">5</div>
                    {/* <i className='bx bxs-bell'></i> */}
                    <BxBell className="bx bxs-bell"/>
                </div>
                <div className="header-profile">
                    <div className="header-profile-top">
                        <div className="header-profile-wel">
                            <p className="header-profile-hi">Hi Takodachi</p>
                            <p className="header-profile-subhi">Good Morning!</p>
                        </div>
                        <div className="header-profile-cog"><i className='bx bx-cog'></i></div>
                    </div>
                    <div className="header-profile-avatar">
                        <img src="https://media.istockphoto.com/photos/steamed-octopus-for-sashimi-picture-id1165598498?b=1&k=20&m=1165598498&s=170667a&w=0&h=8-oKrycjOj5wqzNyTuKrP3aJ6faLbFq2y80QvCJ37Z0="
                            alt=""/>
                        <p className="header-profile-name">Sin Takodachi</p>
                        <p className="header-profile-position">UX/UI Design - Front Dev</p>
                    </div>
                    <ul className="header-profile-notify">
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                        <li className="header-profile-item">
                            <h5 className="header-profile-n-title">Lorem, ipsum dolor.</h5>
                            <p className="header-profile-n-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, vel!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <section className="performance">
            <div className="performance-top">
                <h4 className="dashboard-title">dashboard</h4>
                <ul className="performance-list">
                    <li className="performance-item">
                        <i className='bx bx-group performance-item-icon'></i>
                        <div className="performance-item-content">
                            <p className="performance-item-number">549,99</p>
                            <p className="performance-item-des">Total Takodachi</p>
                        </div>
                    </li>
                    <li className="performance-item">
                        <i className='bx bx-credit-card-front performance-item-icon'></i>
                        <div className="performance-item-content">
                            <p className="performance-item-number">549,99</p>
                            <p className="performance-item-des">Total Takodachi</p>
                        </div>
                    </li>
                    <li className="performance-item">
                        <i className='bx bx-bus performance-item-icon'></i>
                        <div className="performance-item-content">
                            <p className="performance-item-number">549,99</p>
                            <p className="performance-item-des">Total Takodachi</p>
                        </div>
                    </li>
                    <li className="performance-item">
                        <i className='bx bx-buildings performance-item-icon'></i>
                        <div className="performance-item-content">
                            <p className="performance-item-number">549,99</p>
                            <p className="performance-item-des">Total Takodachi</p>
                        </div>
                    </li>
                </ul>
                <div className="performance-statistic">
                    <div className="performance-chart"></div>
                    <div className="performance-pie"></div>
                </div>
            </div>
        </section>
        <section className="access access-table">
            <h4 className="dashboard-title">process tasks</h4>
            <div className="access-table-wrapper">
                <table className="access-tasks">
                    <tr className="access-head">
                        <th className="access-head-id">task id</th>
                        <th className="access-head-staff">staff</th>
                        <th className="access-head-point">total point</th>
                        <th className="access-head-date">date</th>
                        <th className="access-head-status">status</th>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO08</td>
                        <td className="access-row-staff">Calliope Mori</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-process"><span>Process</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO09</td>
                        <td className="access-row-staff">Takanashi Kiara</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-pending"><span>pending</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO10</td>
                        <td className="access-row-staff">Gawr Gura</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-review"><span>review</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO11</td>
                        <td className="access-row-staff">Ninomae Ina'nis</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-completed"><span>completed</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO12</td>
                        <td className="access-row-staff">Amelia Waston</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-cancel"><span>cancel</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO08</td>
                        <td className="access-row-staff">Calliope Mori</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-process"><span>Process</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO09</td>
                        <td className="access-row-staff">Takanashi Kiara</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-pending"><span>pending</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO10</td>
                        <td className="access-row-staff">Gawr Gura</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-review"><span>review</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO11</td>
                        <td className="access-row-staff">Ninomae Ina'nis</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-completed"><span>completed</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO12</td>
                        <td className="access-row-staff">Amelia Waston</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-cancel"><span>cancel</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO08</td>
                        <td className="access-row-staff">Calliope Mori</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-process"><span>Process</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO09</td>
                        <td className="access-row-staff">Takanashi Kiara</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-pending"><span>pending</span></td>
                    </tr>
                    <tr className="access-row">
                        <td className="access-row-id">TAKO10</td>
                        <td className="access-row-staff">Gawr Gura</td>
                        <td className="access-row-point">$549.99</td>
                        <td className="access-row-date">25 March 2022</td>
                        <td className="access-row-status status-on-review"><span>review</span></td>
                    </tr>
                </table>
            </div>
        </section>
    </div>
    )
}