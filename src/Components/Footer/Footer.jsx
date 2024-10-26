import banner from '../../assets/bg-shadow.png'
import footerLogo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className="bg-black text-white mt-52 relative">
            <img className='ml-auto mr-auto pt-64' src={footerLogo} alt="" />
            <footer className="footer w-10/12 mx-auto py-16">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p>We are a passionate team dedicated to <br />providing the best services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Link</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <form className="text-center">
                    <h6 className="footer-title">Subscribe</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="enter your email"
                                className="input input-bordered join-item w-32 lg:w-full" />
                            <button className="btn text-black join-item bg-gradient-to-r from-[#ECD0A5] to-[#E38787]">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>

            <div className='w-10/12 mx-auto absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                {/* <div className='h-80 p-5 border-2 text-center border-white bg-white text-black flex items-center justify-center flex-col space-y-3 rounded-xl' style={{ backgroundImage: `url(${banner})`,backgroundRepeat:'no-repeat' }}> */}
                <div className='h-80 p-5 border-2 text-center border-white bg-white text-black flex items-center justify-center flex-col space-y-3 rounded-xl bg-gradient-to-r from-[#c2ecf7] to-[#FDF2D8]' >
                    <h1 className='text-4xl font-bold'>Subscribe to our Newsletter</h1>
                    <p className='text-sm opacity-60'>Get the latest updates and news right in your inbox!</p>
                    <div>
                        <input type="text" className='input md:w-64 w-full border-black' placeholder='enter your email' />
                        <button className="btn md:w-32 w-full text-black join-item ml-0 mt-2 lg:ml-4 bg-gradient-to-r from-[#ECD0A5] to-[#E38787]">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='text-center text-sm opacity-60'>
                <hr />
                <p className='py-5'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;