import React, { useContext } from 'react';
import './App.css';

//Rooms
import Room1A from './assets/img/portfolio/Room1-1.jpg';
import Room1B from './assets/img/portfolio/Room1-2.jpg';
import Room1C from './assets/img/portfolio/Room1-3.jpeg';
import Room2A from './assets/img/portfolio/Room2A.jpg';
import Room2B from './assets/img/portfolio/Room2B.jpg';
import Room2C from './assets/img/portfolio/Room2C.jpg';
import Room3A from './assets/img/portfolio/Room3A.jpg';
import Room3B from './assets/img/portfolio/Room3B.jpg';
import Room3C from './assets/img/portfolio/Room3C.jpeg';

//Gallery
import Gallery1 from './assets/img/portfolio/gallery1.jpeg';
import Gallery2 from './assets/img/portfolio/gallery2.JPG';
import Gallery3 from './assets/img/portfolio/gallery3.JPG';
import Gallery4 from './assets/img/portfolio/gallery4.JPG';
import Gallery5 from './assets/img/portfolio/gallery5.jpg';
import Gallery6 from './assets/img/portfolio/gallery6.jpeg';


import logo from './assets/img/portfolio/logo.png';
import ContactForm from './ContactForm';
import LanguageSelector from './components/LanguageSelector';

//Explore implement
import { Text, LanguageContext } from './containers/Language';

export default function App() {
    const { userLanguage } = useContext(LanguageContext);

    return (

        <div className="body">
            <div id="page-top">
                {/* <!-- Navigation--> */}
                <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                    <div class="container">
                        <a href="#page-top">  <img className="logo" src={logo} alt="Logo" /> </a>
                        {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">Casa Vital</a> */}

                        <button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <Text tid="MenuToggleBtn" /><i class="fas fa-bars"></i>
                        </button>
                        <div className={userLanguage === 'en' ? 'navbarEn' : 'navbarHeb'}>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#services"><Text tid="OurServicesNav" /></a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio"><Text tid="OurRoomsNav" /></a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#gallery"><Text tid="GalleryNav" /></a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about"><Text tid="AboutUsNav" /></a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact"><Text tid="ContactUsNav" /></a></li>
                                </ul>
                            </div>

                        </div>
                        <LanguageSelector />

                    </div>
                </nav>
                {/* <!-- Masthead--> */}

                <header class="masthead bg-primary text-white text-center" id="HeadScroll">
                    <div class="container d-flex align-items-center flex-column" id="headerContent">
                        <h1 class="masthead-heading text-capitalize mb-0">Casa Vital</h1>

                        <p class="masthead-subheading mb-0">Luxury Hospitality</p>

                    </div>
                    <div>
                        <a href="https://wa.me/972527026632" class="float" target="_blank" rel="noopener noreferrer" alt="WhatsApButton">
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
                                <i class="fas fa-car-side"></i>
                                <h2><Text tid="OurServicesH1" /></h2>
                                <p><Text tid="OurServicesP1" /></p>
                            </div>

                            <div className="service">
                                <i class="fas fa-globe-europe"></i>
                                <h2><Text tid="OurServicesH2" /></h2>
                                <p><Text tid="OurServicesP2" /></p>
                            </div>

                            <div className="service">
                                <i class="fas fa-tshirt"></i>
                                <h2><Text tid="OurServicesH3" /></h2>
                                <p><Text tid="OurServicesP3" /></p>
                            </div>

                            <div className="service">
                                <i class="fas fa-crop-alt"></i>
                                <h2><Text tid="OurServicesH6" /></h2>
                                <p><Text tid="OurServicesP6" /></p>
                            </div>

                            <div className="service">
                                <i class="fas fa-map-marked-alt"></i>
                                <h2><Text tid="OurServicesH5" /></h2>
                                <p><Text tid="OurServicesP5" /></p>
                            </div>

                            <div className="service">
                                <i class="fas fa-user-tie"></i>
                                <h2><Text tid="OurServicesH4" /></h2>
                                <p><Text tid="OurServicesP4" /></p>
                            </div>
                        </div>
                    </div>

                </section>


                {/* <!-- Our Rooms Section--> */}
                <section class="page-section portfolio" id="portfolio">
                    <div class="container">
                        <div class="ourrooms">
                            <h1 class="ourroomsh1"><Text tid="OurRoomsNav" /></h1>
                        </div>


                        <div class="divider-custom"></div>

                        {/* <!-- Portfolio Grid Items--> */}
                        <div class="row justify-content-center">
                            {/* <!-- Portfolio Item 1--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"> <p className="roomText"> Single Room</p> </div>
                                    </div>
                                    <img class="img-fluid" src={Room1A} alt="Room link" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 2--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><p className="roomText"> Deluxe Room</p> </div>
                                    </div>
                                    <img class="img-fluid" src={Room2A} alt="Room link" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 3--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><p className="roomText"> Luxury Room</p> </div>
                                    </div>
                                    <img class="img-fluid" src={Room3A} alt="Room link" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="page-section portfolio" id="gallery">
                    <div class="container">
                        <div class="gallery">
                            <h1><Text tid="GalleryNav" /></h1>
                        </div>

                        <div class="divider-custom"></div>

                        {/* <!-- Gallery Grid Items--> */}
                        <div class="row justify-content-center">
                            {/* <!-- Gallery Item 1--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#galleryModal1">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Gallery1} alt="Gallery link" />
                                </div>
                            </div>
                            {/* <!-- Gallery Item 2--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#galleryModal2">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"> <i class="fas fa-expand-alt fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Gallery2} alt="Gallery link" />
                                </div>
                            </div>
                            {/* <!-- Gallery Item 3--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#galleryModal3">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"> <i class="fas fa-expand-alt fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Gallery3} alt="Gallery link" />
                                </div>
                            </div>
                            {/* <!-- Gallery Item 4--> */}
                            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#galleryModal4">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Gallery4} alt="Gallery link" />
                                </div>
                            </div>
                            {/* <!-- Gallery Item 5--> */}
                            <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#galleryModal5">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Gallery5} alt="Gallery link" />
                                </div>
                            </div>
                            {/* <!-- Gallery Item 6--> */}
                            <div class="col-md-6 col-lg-4">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#galleryModal6">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Gallery6} alt="Gallery link" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- About Section--> */}
                <section class="page-section bg-primary text-white mb-0" id="about">
                    <div class="container">
                        {/* <!-- About Section Heading--> */}
                        <div class="about">
                            <h1><Text tid="AboutUsNav" /></h1>
                        </div>

                        {/* <!-- About Section Content--> */}
                        <div class="row">
                            <div className={userLanguage === 'en' ? 'EnAbout' : 'HebAbout'}>
                                <p><Text tid="AboutInfo1" /> <br />
                                    <Text tid="AboutInfo2" /> <br />
                                    <Text tid="AboutInfo3" /> <br /><br />
                                    <div className="AboutInfo4">
                                        <Text tid="AboutInfo4" />
                                    </div>
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- Contact Section--> */}
                <section class="page-section" id="contact">
                    <div class="contact-head">
                        <h1><Text tid="ContactUsNav" /></h1>
                    </div>
                    <ContactForm />
                </section>
                {/* <!-- Footer--> */}
                <footer class="footer text-center">
                    <div class="container">
                        <div class="row">
                            {/* <!-- Footer Location--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="mb-1"><Text tid="FooterLeft1" /></h4>
                                <p class="lead mb-0">
                                    <a href="#services"> <Text tid="FooterLeft2" /> </a> <br />
                                    <a href="#portfolio"> <Text tid="FooterLeft3" /> </a> <br />
                                    <a href="#gallery"> <Text tid="FooterLeft4" />  </a> <br />
                                    <a href="#about"> <Text tid="FooterLeft5" /> </a> <br />
                                    <a href="#contact"> <Text tid="FooterLeft6" /> </a>
                                </p>
                            </div>
                            {/* <!-- Footer Social Icons--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="mb-2"><Text tid="FooterCenter" /></h4>
                                <a class="btn btn-outline-light btn-social mx-1" href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-google"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="https://he.airbnb.com/rooms/14049154?_set_bev_on_new_domain=1619006328_NzM2MGE3OGUwZWI2&source_impression_id=p3_1619006734_9ziCjMd5xGMk56aY&guests=1&adults=1" target="_blank" rel="noopener noreferrer"><i class="fab fa-airbnb"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="https://www.tripadvisor.co.il/Hotel_Review-g1868435-d1912004-Reviews-Casa_de_Vital-Rehovot_Central_District.html" target="_blank" rel="noopener noreferrer"><i class="fab fa-tripadvisor"></i></a>
                                {/* <!-- <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a> --> */}
                            </div>
                            {/* <!-- Footer About Text--> */}
                            <div class="col-lg-4">
                                <h4 class="mb-1"><Text tid="FooterRight1" /></h4>
                                <p class="lead mb-0"><Text tid="FooterRight2" />
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- Copyright Section--> */}
                <div class="copyright py-3 text-center text-white">
                    <div class="container">
                        <small> <span class="AccessibilitySpan"> <Text tid="AccessibilityP" /></span>  <br />
                     Copyright © NirArgil 2021 </small>
                    </div>
                </div>
                {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
                {/* <div class="scroll-to-top d-lg-none position-fixed">
                    <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
                </div> */}
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
                                        <div class="col-lg-12">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-3" id="portfolioModal1Label"><Text tid="RoomsHeadSingle" /></h2>
                                            <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                                                    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                                                    <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img class="carousel-img" src={Room1A} alt="First slide" />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="carousel-img" src={Room1B} alt="Second slide" />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="carousel-img" src={Room1C} alt="Third slide" />
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"> <i class="fas fa-angle-left"></i> </span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true">  <i class="fas fa-angle-right"></i>  </span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>


                                            {/* <!-- Portfolio Modal - Image--> */}
                                            {/* <img class="img-fluid rounded mb-5" src={Room3} alt="Room photo" /> */}
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            <p class="mb-3"> <Text tid="RoomInfo1" /> </p>
                                            <div className="ulRoomLeft">
                                                <ul >
                                                    <li> <Text tid="RoomInfo1Li1" /> </li>
                                                    <li> <Text tid="RoomInfo1Li2" /></li>
                                                    <li> <Text tid="RoomInfo1Li3" /></li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomCenter">
                                                <ul >
                                                    <li> <Text tid="RoomInfo1Li4" /></li>
                                                    <li> <Text tid="RoomInfo1Li5" /></li>
                                                    <li> <Text tid="RoomInfo1Li6" /></li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomRight">
                                                <ul >
                                                    <li> <Text tid="RoomInfo1Li7" /></li>
                                                    <li> <Text tid="RoomInfo1Li8" /></li>
                                                    <li> <Text tid="RoomInfo1Li9" /></li>

                                                </ul>
                                            </div>
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
                                        <div class="col-lg-12">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-3" id="portfolioModal1Label"><Text tid="RoomsHeadDeluxe" /></h2>
                                            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                                                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img class="carousel-img" src={Room2A} alt="First slide" />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="carousel-img" src={Room2B} alt="Second slide" />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="carousel-img" src={Room2C} alt="Third slide" />
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"> <i class="fas fa-angle-left"></i> </span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true">  <i class="fas fa-angle-right"></i>  </span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>

                                            <p class="mb-3"> <Text tid="RoomInfo2" /> </p>
                                            <div className="ulRoomLeft">
                                                <ul >
                                                    <li> <Text tid="RoomInfo1Li1" /> </li>
                                                    <li> <Text tid="RoomInfo1Li2" /></li>
                                                    <li> <Text tid="RoomInfo1Li3" /></li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomCenter">
                                                <ul >
                                                    <li> <Text tid="RoomInfo1Li4" /></li>
                                                    <li> <Text tid="RoomInfo1Li5" /></li>
                                                    <li> <Text tid="RoomInfo1Li6" /></li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomRight">
                                                <ul >
                                                    <li> <Text tid="RoomInfo1Li7" /></li>
                                                    <li> <Text tid="RoomInfo1Li8" /></li>
                                                    <li> <Text tid="RoomInfo1Li9" /></li>

                                                </ul>
                                            </div>
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
                                        <div class="col-lg-12">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-3" id="portfolioModal1Label"> <Text tid="RoomsHeadLuxury" /> </h2>
                                            <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
                                                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                                                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img class="carousel-img" src={Room3A} alt="First slide" />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="carousel-img" src={Room3B} alt="Second slide" />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="carousel-img" src={Room3C} alt="Third slide" />
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"> <i class="fas fa-angle-left"></i> </span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true">  <i class="fas fa-angle-right"></i>  </span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>

                                            <p class="mb-3"> <Text tid="RoomInfo3" /> </p>
                                            <div className="ulRoomLeft">
                                                <ul >
                                                    <li> <Text tid="RoomInfo1Li1" /> </li>
                                                    <li> <Text tid="RoomInfo1Li2" /></li>
                                                    <li> <Text tid="RoomInfo1Li3" /></li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomCenter">
                                                <ul >
                                                    <li> <Text tid="RoomInfo1Li4" /></li>
                                                    <li> <Text tid="RoomInfo1Li5" /></li>
                                                    <li> <Text tid="RoomInfo1Li6" /></li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomRight">
                                                <ul >
                                                    <li> <Text tid="RoomInfo1Li7" /></li>
                                                    <li> <Text tid="RoomInfo1Li8" /></li>
                                                    <li> <Text tid="RoomInfo1Li9" /></li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Gallery Modal 1--> */}
                <div class="portfolio-modal modal fade" id="galleryModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-12">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            {/* <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label">galleryModal1galleryModal1galleryModal1</h2> */}

                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-0" src={Gallery1} alt="Room one" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p> */}
                                            {/* <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Gallery Modal 2--> */}
                <div class="portfolio-modal modal fade" id="galleryModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
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
                                            {/* <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label"></h2> */}

                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-0" src={Gallery2} alt="Room two" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Gallery Modal 3--> */}
                <div class="portfolio-modal modal fade" id="galleryModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
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
                                            {/* <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label"></h2> */}

                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-0" src={Gallery3} alt="Room three" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Gallery Modal 4--> */}
                <div class="portfolio-modal modal fade" id="galleryModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
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
                                            {/* <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label"></h2> */}

                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-0" src={Gallery4} alt="Room four" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Gallery Modal 5--> */}
                <div class="portfolio-modal modal fade" id="galleryModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
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
                                            {/* <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label"></h2> */}

                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-0" src={Gallery5} alt="Room five" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Gallery Modal 6--> */}
                <div class="portfolio-modal modal fade" id="galleryModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
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
                                            {/* <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label"></h2> */}

                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-0" src={Gallery6} alt="Room six" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
