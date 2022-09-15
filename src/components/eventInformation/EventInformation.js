import React from 'react';
import bannerImg from '../../assets/images/banner.png'

const EventInformationBanner = () => {
    return (
        <div className='event-information-wrapper__banner-wrap'
            style={{ 'backgroundImage': `url(${bannerImg})` }}>

            <div className='event-information-wrapper__blur'>

                <img src={bannerImg}
                    className="event-information-wrapper__banner"
                    alt="banner" />

            </div>
        </div>
    )
}

const EventInformationBlock = (data) => {
    const { title, description } = data.data;

    return (
        <div className='event-information'>
            <h2 className='event-information__title'>{title} </h2>

            <div className='event-information__city'>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.9">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57145 9.85639C9.74226 8.4887 10.5 7.11503 10.5 5.9787C10.5 3.38842 8.41171 1.41787 6 1.41787C3.58829 1.41787 1.5 3.38842 1.5 5.9787C1.5 7.11503 2.25774 8.4887 3.42855 9.85639C4.30909 10.885 5.2977 11.7663 6 12.3441C6.7023 11.7663 7.69091 10.885 8.57145 9.85639ZM6.43813 13.8503C7.82065 12.7801 12 9.27238 12 5.9787C12 2.67676 9.31371 0 6 0C2.68629 0 0 2.67676 0 5.9787C0 9.27238 4.17935 12.78 5.56187 13.8503C5.81976 14.0499 6.18024 14.0499 6.43813 13.8503Z" fill="white" />
                        <path d="M7.5 5.67178C7.5 6.45485 6.82843 7.08965 6 7.08965C5.17157 7.08965 4.5 6.45485 4.5 5.67178C4.5 4.88871 5.17157 4.25391 6 4.25391C6.82843 4.25391 7.5 4.88871 7.5 5.67178Z" fill="white" />
                    </g>
                </svg>

                <p>City, Adress Number</p>

            </div>

            <div className='event-information__btns-wrap'>
                <div className="event-information__btns-wrap__day">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.9">
                            <rect x="0.5" y="1.6322" width="11" height="10.3684" rx="1.5" stroke="#A1FFF4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.5 5.99939H11" stroke="#A1FFF4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 0.49939V3.02571" stroke="#A1FFF4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 0.49939V3.02571" stroke="#A1FFF4" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>

                    <p>Month, Day</p>
                </div>

                <div className="event-information__btns-wrap__time">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.9">
                            <circle cx="6" cy="6.5" r="5.5" stroke="#A1FFF4" />
                            <path d="M6 2.90039V6.50039H7.8" stroke="#A1FFF4" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>

                    <p>Time Start - Time End</p>

                </div>
            </div>


        </div>
    )
}


const EventInformation = ({ data }) => {
    const { title, description } = data;
    return (
        <section className='event-information-wrapper'>
            <EventInformationBanner data={data} />
            <EventInformationBlock data={data} />

        </section>
    )
}

export default EventInformation;