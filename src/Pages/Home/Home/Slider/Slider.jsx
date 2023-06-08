import slide1 from '../../../../assets/slider/slide1.jpg';
import slide2 from '../../../../assets/slider/slide2.jpg';
import slide3 from '../../../../assets/slider/slide3.jpg';
import slide4 from '../../../../assets/slider/slide4.png';
import slide5 from '../../../../assets/slider/slide5.jpg';

const Slider = () => {
    return (
        <div className='mt-16'>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <div className='w-1/2 mx-auto text-white '>
                            <h3 className='text-3xl text-center font-bold'>Harmonium</h3>
                            <p className='mt-8 text-center'>A keyboard instrument with a hand-pumped bellows that produces sound by forcing air through reeds, commonly used in Indian classical music and religious ceremonies.</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className='w-1/2 mx-auto text-white '>
                            <h3 className='text-3xl text-center font-bold'>Guitar</h3>
                            <p className='mt-8 text-center'>A stringed musical instrument played by plucking or strumming its strings, featuring a flat body and a neck with frets, producing a versatile range of melodic and harmonic sounds across various genres.</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className='w-1/2 mx-auto text-white '>
                            <h3 className='text-3xl text-center font-bold'>Harmonium</h3>
                            <p className='mt-8 text-center'>A keyboard instrument with a hand-pumped bellows that produces sound by forcing air through reeds, commonly used in Indian classical music and religious ceremonies.</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className='w-1/2 mx-auto text-white '>
                            <h3 className='text-3xl text-center font-bold'>Sitar</h3>
                            <p className='mt-8 text-center'>A traditional Indian stringed instrument with a long neck, a resonating gourd, and movable frets, known for its unique twangy sound and prominent role in Hindustani classical music.</p>
                        </div>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={slide5} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className='w-1/2 mx-auto text-white '>
                            <h3 className='text-3xl text-center font-bold'>Dhol</h3>
                            <p className='mt-8 text-center'>A double-headed barrel-shaped drum from South Asia, played with sticks or hands, producing a deep, resonant sound commonly used in folk music, celebrations, and traditional dances.</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;