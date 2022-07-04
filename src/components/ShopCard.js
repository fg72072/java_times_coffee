import { Druppar } from '../components/Images'
import { Link } from 'react-router-dom'
function ShopCard() {
    return <>
        <div className='shop-item'>
            <Link to={"#"}>
                <div className='image-section'>
                <img src={Druppar} />
                {/* <button className='custom-btn secondary-btn'>View</button> */}
                </div>
                <h3 className='shop-title'>GREEN CONTI SUPER DRUPPER</h3>
                <p>$85.00</p>
            </Link>
        </div>
    </>
}

export default ShopCard;