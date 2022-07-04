import '../assets/css/footer.css'
function Footer()
{
    return<>
    <footer>
        <h3 className='text-white'>Subscribe to receive our news.</h3>
        <div className="join-section">
        <input className="custom-input" placeholder='ENTER YOUR CORE'/>
        <button className="btn secondary-btn">JOIN</button>
        </div>
        <div className='footer-social'>
            <h3 className='common-heading text-white'>Follow us.</h3>
            <ul>
                <li>
                    <a href='#' target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href='#' target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href='#' target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a href='#' target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div className='last-section'>
            <h2>Java Times Caffe</h2>
            <p>©2022 JAVA TIMES CAFÉ. ALL RIGHTS RESERVED. </p>
        </div>
    </footer>
    </>
}

export default Footer;