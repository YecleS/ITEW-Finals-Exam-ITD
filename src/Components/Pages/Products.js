import React from 'react';
import '../Styles/Products.css';
import DucatiV2 from '../Assets/ducatiV2.jpg'
import DucatiV3 from '../Assets/ducatiV3.jpg'
import DucatiV4 from '../Assets/ducatiV4.jpg'
import DucatiV4s from '../Assets/ducatiV4S.jpg'
import DucatiAllTerrain from '../Assets/ducatiAllterrain.jpg'
import Nike1 from '../Assets/nikeShoes1.jpg';
import Nike2 from '../Assets/nikeShoes2.jpg';
import Nike3 from '../Assets/nikeShoes3.jpg';
import Nike4 from '../Assets/nikeShoes4.jpg';
import Nike5 from '../Assets/nikeShoes5.jpg'

function Products() {
  return (
    <section className='products' id='products'>
        <div className='products__container'>
            <div className='products__card-wrapper'>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={Nike1} className='products__card-img'></img>
                    </div>
                    <p className='products__card-description'>The Nike Air Max 270 is designed with comfort and style in mind, featuring the largest Air unit in the heel for a super-soft ride. </p>
                </div>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={Nike2} className='products__card-img'></img>
                    </div>
                    <p className='products__card-description'>The Nike Air Zoom Pegasus 39 is a versatile running shoe known for its responsive cushioning and lightweight feel.</p>
                </div>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={Nike3} className='products__card-img'></img>
                    </div>
                    <p className='products__card-description'>The Nike Air Force 1 is an iconic sneaker that has stood the test of time since its debut in 1982. Known for its classic design and durable construction.</p>
                </div>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={Nike4} className='products__card-img'></img>
                    </div>
                    <p className='products__card-description'>The Nike Free RN 5.0 is a lightweight running shoe designed to mimic the natural motion of barefoot running.</p>
                </div>

                
                <div className='products__goals-card'>
                    <div className='products__goals-card-img-wrapper'>
                        <img src={Nike5} className='products__goals-card-img'/>
                    </div>
                    <div className='products__goals-card-description-wrapper'>
                        <p className='products__goals-card-description'>The Nike React Infinity Run Flyknit is engineered to reduce the risk of injury and keep runners on the road. It features a lightweight Flyknit upper that provides breathability and a secure fit, while the wide.</p>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Products