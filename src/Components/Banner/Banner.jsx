import banner from '../../assets/bg-shadow.png'
import bannerimg from '../../assets/banner-main.png'
import PropTypes from 'prop-types';
const Banner = ({handleCoin}) => {
    return (
        <div className='my-5'>
            <div className='rounded-xl h-[100vh] py-64 bg-black flex items-center justify-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${banner})`}}>
                <div className='text-white text-center space-y-3'>
                    <img className='ml-auto mr-auto' src={bannerimg} alt="" />
                    <h1 className='text-xl lg:text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-md opacity-60'>Beyond Boundaries Beyond Limits</p>
                    <button onClick={handleCoin} className='btn bg-[#E7FE29] border-4'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes ={
    handleCoin:PropTypes.number,
}
export default Banner;