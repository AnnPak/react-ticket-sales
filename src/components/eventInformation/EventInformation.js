import React from 'react';
import bannerImg from '../../assets/images/banner.png'

const EventInformation = () => {
    return(
        <section className='event-information-wrapper'>

            <div className='event-information-wrapper__banner-wrap' 
                 style={{'backgroundImage': `url(${bannerImg})`}}>

                    <div className='event-information-wrapper__blur'>

                        <img src={bannerImg} 
                             className="event-information-wrapper__banner" 
                             alt="banner" />

                    </div>


            </div>
            
            <EventInformationBlock/>
        </section>
    )
}

const EventInformationBlock = () => {
    return(
        <div className='event-information'>
            <h2 className='event-information__title'>Event Naming Multiline Header </h2>
            <p className='event-information__city'>City, Adress Number</p>

            <div className='event-information__btns-wrap'>
                <p class="event-information__btns-wrap__day">Month, Day</p>
                <p class="event-information__btns-wrap__time">Time Start - Time End</p>
            </div>
            

        </div>
    )
}

export default EventInformation;