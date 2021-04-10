import React, { useContext, useState } from 'react';
import './App.css';
import cabin from './assets/img/portfolio/cabin.png';
import cake from './assets/img/portfolio/cake.png';
import circus from './assets/img/portfolio/circus.png';
import game from './assets/img/portfolio/game.png';
import safe from './assets/img/portfolio/safe.png';
import submarine from './assets/img/portfolio/submarine.png';
import logo from './assets/img/portfolio/logo.png';
import ContactForm from './ContactForm';

import { LanguageProvider } from './containers/Language'; 
import LanguageSelector from './components/LanguageSelector';
import Explore from './components/Explore';

//Explore implement
import { Text, LanguageContext } from './containers/Language';


export default function App() {
    const [clickText, setClickText] = useState();
    const [selectedOption, setSelectedOption] = useState();
    const { dictionary } = useContext(LanguageContext);
  
    const handleClick = () => {
      setClickText(<Text tid="buttonClicked" />);
    }
  
    const handleOptionChange = e => {
      setSelectedOption(e.target.value);
    }


  return (
    <LanguageProvider>

    <div className="body">
      <div id="page-top">
        {/* <!-- Navigation--> */}
        <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
            <div class="container">
                <img className="logo" src={logo} alt="NO IMG" />
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Casa Vital</a>
                <LanguageSelector />
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#services"><Text tid="OurServicesNav" /></a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio"><Text tid="OurRoomsNav" /></a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about"><Text tid="AboutUsNav" /></a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact"><Text tid="ContactUsNav" /></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
      
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                {/* <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />  */}
                {/* <!-- Masthead Heading--> */}

                <h1 class="masthead-heading text-capitalize mb-0">Casa Vital</h1>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p class="masthead-subheading mb-0">Luxury Hospitality</p>

            </div>  
            <div>
                <a href="https://wa.me/972527026632" class="float" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp my-float"></i>
                </a>

           </div>
        </header>
      
        {/* class="page-section bg-primary text-white mb-0" */}

        <section id="services">
           <div className="services">
            <h1><Text tid="OurServices" /></h1>
                <div className="cen">
                    <div className="service">
                     <i class="fas fa-shuttle-van"></i> 
                     <h2>SERVICE1</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, mattis vitae iaculis vel.</p>
                    </div>

                    <div className="service">
                     <i class="fas fa-tshirt"></i> 
                     <h2>SERVICE2</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, mattis vitae iaculis vel.</p>
                    </div>

                    <div className="service">
                     <i class="fas fa-suitcase-rolling"></i> 
                     <h2>SERVICE3</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, mattis vitae iaculis vel.</p>
                    </div>

                    <div className="service">
                     <i class="fas fa-camera-retro"></i>   
                     <h2>SERVICE4</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, mattis vitae iaculis vel.</p>
                    </div>

                    <div className="service">
                     <i class="fas fa-pen-fancy"></i>   
                     <h2>SERVICE5</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, mattis vitae iaculis vel.</p>
                    </div>

                    <div className="service">
                    <i class="fas fa-user-tie"></i>   
                     <h2>SERVICE6</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, mattis vitae iaculis vel.</p>
                    </div>
                </div>
           </div>
           
        </section>


        {/* <!-- Our Rooms Section--> */}
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <div class="ourrooms">
                    <h1 class="ourroomsh1">Our Rooms</h1>
                </div>
               
              
                <div class="divider-custom">
                    {/* <!-- <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div> --> */}
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div class="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white" id="features"><p>Features</p></div>
                            </div>
                            <img class="img-fluid" src= {cabin} alt="CABIN" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white" id="features"><p>Features</p></div>
                            </div>
                            <img class="img-fluid" src={cake} alt="NOIMG" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white" id="features"><p>Features</p></div>
                            </div>
                            <img class="img-fluid" src={circus} alt="NOIMG" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 4--> */}
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white" id="features"><p>Features</p></div>
                            </div>
                            <img class="img-fluid" src={game} alt="NOIMG" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 5--> */}
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white" id="features"><p>Features</p></div>
                            </div>
                            <img class="img-fluid" src={safe} alt="NOIMG" />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 6--> */}
                    <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white" id="features"><p>Features</p></div>
                            </div>
                            <img class="img-fluid" src={submarine} alt="NOIMG" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Section--> */}
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                {/* <!-- About Section Heading--> */}
                <div id="About">
                   <h2 class="page-section-heading text-center text-uppercase text-white">About</h2> 
                </div>
                
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div class="row">
                    <div class="col-lg-4 ml-auto"><p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, mattis vitae iaculis vel, dictum non libero. Vivamus.</p></div>
                    <div class="col-lg-4 mr-auto"><p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vel odio vitae pulvinar. Integer orci tortor, mattis vitae iaculis vel, dictum non libero.</p></div>
                </div>
               
            </div>
        </section>
        {/* <!-- Contact Section--> */}
        <section class="page-section" id="contact">
             <div class="contact-head">
                <h1>Contact Us</h1>
             </div>
                {/* <div class="row"> */}
                    {/* <div class="col-lg-8 mx-auto"> */}
                        {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
                       <ContactForm />
                    {/* </div> */}
                {/* </div> */}
            
        </section>
        {/* <!-- Footer--> */}
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    {/* <!-- Footer Location--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="mb-4">Location</h4>
                        <p class="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Israel, Rehovot
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-airbnb fa-2x"></i></a> 
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        {/* <!-- <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a> --> */}
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div class="col-lg-4">
                        <h4 class="mb-4">About Casa Vital</h4>
                        <p class="lead mb-0">Luxury Boutique Hotel.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Copyright Section--> */}
        <div class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright © NirArgil 2021</small></div>
        </div>
        {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
        <div class="scroll-to-top d-lg-none position-fixed">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
        </div>
        {/* <!-- Portfolio Modals--> */}
        {/* <!-- Portfolio Modal 1--> */}
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Log Cabin</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img class="img-fluid rounded mb-5" src={cabin} alt="asd" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 2--> */}
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Label">Tasty Cake</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img class="img-fluid rounded mb-5" src={cake} alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 3--> */}
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal3Label">Circus Tent</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img class="img-fluid rounded mb-5" src={circus} alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 4--> */}
        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label">Controller</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img class="img-fluid rounded mb-5" src={game} alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 5--> */}
        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal5Label">Locked Safe</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img class="img-fluid rounded mb-5" src={safe} alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio Modal 6--> */}
        <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">Submarine</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img class="img-fluid rounded mb-5" src={submarine} alt="" />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </div>

    </LanguageProvider>
  );
}
