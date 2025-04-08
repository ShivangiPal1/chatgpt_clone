import './chatPage.css'
import NewPrompt from '../../components/newPrompt/NewPrompt'

const Chatpage = () => {
  

    return (
        <div className='chatPage'>
            {/* Glows */}
            <div className="glow glow-top-right"></div>
            <div className="glow glow-bottom-left"></div>
            
            <div className="wrapper">
                <div className="chat">
                <div className="message user">Hey, what's the weather like in India today?</div>
                <div className="messsage">India's weather varies a lot depending on the region. In the north, places like Delhi are experiencing a heatwave with temperatures soaring above 40°C. In contrast, southern states like Kerala and Tamil Nadu have relatively moderate temperatures with occasional pre-monsoon showers.</div>

                <div className="message user">Wow, a heatwave? How bad is it?</div>
                <div className="messsage">Yes, it's quite severe in some areas. The northern plains, including cities like Delhi, Rajasthan, and Uttar Pradesh, are facing extreme heat, with temperatures reaching up to 45°C in some places. The heat is making it difficult for people to step outside during the day.</div>

                <div className="message user">What about Mumbai? Is it just as hot?</div>
                <div className="messsage">Mumbai is warm, but the humidity makes it feel even hotter. The temperatures are hovering around 32-35°C, but the high humidity levels, often above 70%, make it feel much more uncomfortable. People there are relying on sea breezes for some relief.</div>

                <div className="message user">Is there any chance of rain soon?</div>
                <div className="messsage">It depends on the region. The southern states like Kerala and Karnataka might see some pre-monsoon showers. However, northern and central India will likely remain dry for now. The monsoon is expected to arrive in early June, starting from the southwest and gradually covering the entire country.</div>

                <div className="message user">How do people deal with such high temperatures?</div>
                <div className="messsage">People take various precautions, like staying indoors during peak heat hours, drinking plenty of water, and wearing light, breathable clothing. In urban areas, air conditioning and coolers help, while in rural areas, people rely on natural cooling methods like mud houses and drinking buttermilk.</div>

                <div className="message user">When does the monsoon usually arrive?</div>
                <div className="messsage">The monsoon generally starts in early June from Kerala and gradually moves northwards, covering most of the country by July. It brings much-needed relief from the summer heat and is crucial for agriculture.</div>

                <div className="message user">That’s interesting! Is this year’s monsoon expected to be normal?</div>
                <div className="messsage">According to meteorological reports, this year’s monsoon is expected to be near normal. However, factors like El Niño or La Niña can influence rainfall patterns. A normal monsoon is crucial for farmers and the overall economy, as a large part of India relies on monsoon rains for agriculture.</div>

                <div className="message user">Thanks for the information! Stay cool!</div>
                <div className="messsage">You're welcome! Stay hydrated and take care!</div>
                
                   
                </div>
                
            </div>
            <NewPrompt />
        </div>
    )
}

export default Chatpage
