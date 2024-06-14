import React from 'react'
import '../Styles/Background.css';
import NikeLogo from '../Assets/nikeLogo.png';
import NikeLocation from '../Assets/nikeLocation.png';
import NikeCeo from '../Assets/nikeCeo.jpg';
import NikeBuilding from '../Assets/nikeBuilding.jpg'

function Background() {
  return (
    <section className='background' id='background'>
        <div className='background__container'>
            <div className='background__left-content'>

                <div className='background__banner-logo-wrapper'>
                    <div className='background__banner-logo-card'>
                        <div className='background__banner-logo-card-img-wrapper'>
                            <img src={NikeLogo} className='background__banner-logo'/>
                        </div>  
                        <p className='background__banner-logo-description'>The Nike logo represents the globally recognized sportswear and equipment manufacturer, known for its innovative and high-quality products. The emblem, often referred to as the "Swoosh," features a simple, yet dynamic design.</p>
                    </div>
                </div>

                <div className='background__card-wrapper'>
                    <div className='background__card'>
                        <div className='background__card-img-wrapper'>
                            <img src={NikeLocation} className='background__card-img'/>
                        </div>  
                        <p className='background__card-description'>The company's headquarters are located in Beaverton, Oregon, USA, a region known for its vibrant sports culture and innovative business environment.</p>
                    </div>
                </div>

                <div className='background__card-wrapper'>
                    <div className='background__card'>
                        <div className='background__card-img-wrapper'>
                            <img src={NikeCeo} className='background__card-img'/>
                        </div>  
                        <p className='background__card-description'>John Donahoe is the current CEO of Nike. He has been with the company since 2020 and has played a significant role in its growth and success.</p>
                    </div>
                </div>
            </div>

            <div className='background__right-content'>
                <div className='background__building-card'>
                    <div className='background__building-img-wrapper'>
                        <img src={NikeBuilding} className='background__building-img'></img>
                    </div>
                    <p className='background__building-description'>The Nike headquarters building is a blend of modern design and innovative functionality. It features sleek lines, extensive use of glass, and a dynamic layout that reflects the brand's commitment to innovation and athletic excellence.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Background