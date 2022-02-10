import React, { useContext } from 'react';
import './App.css';

//Rooms
import Room1A from './assets/img/portfolio/Room1-1.webp';
import Room1B from './assets/img/portfolio/Room1-2.webp';
import Room1C from './assets/img/portfolio/Room1-3.webp';
import Room2A from './assets/img/portfolio/Room2A.webp';
import Room2B from './assets/img/portfolio/Room2B.webp';
import Room2C from './assets/img/portfolio/Room2C.webp';
import Room3A from './assets/img/portfolio/Room3A.webp';
import Room3B from './assets/img/portfolio/Room3B.webp';
import Room3C from './assets/img/portfolio/Room3C.webp';

//Gallery
import Gallery1 from './assets/img/portfolio/gallery1.webp';
import Gallery2 from './assets/img/portfolio/gallery2.webp';
import Gallery3 from './assets/img/portfolio/gallery3.webp';
import Gallery4 from './assets/img/portfolio/gallery4.webp';
import Gallery5 from './assets/img/portfolio/gallery5.webp';
import Gallery6 from './assets/img/portfolio/gallery6.webp';

//Icon section
import trivagoIcon from './assets/img/portfolio/trivago.png'
import bookingIcon from './assets/img/portfolio/booking.png'
import tripadvisorIcon from './assets/img/portfolio/tripadvisor.png'
import agodaIcon from './assets/img/portfolio/agoda.png'
import airbnbIcon from './assets/img/portfolio/airbnb.png'
import hotelsIcon from './assets/img/portfolio/hotels.png'

import logo from './assets/img/portfolio/logo.png';
import ContactForm from './ContactForm';

// Language Selector
import './i18next';
import { useTranslation } from "react-i18next";
import { LangContext } from './LangContext';

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

export default function App() {
    const { t } = useTranslation();
    const { currentLang, changeLanguage } = useContext(LangContext);

    return (

        <div className="body">
            <div id="page-top">
                {/* <!-- Navigation--> */}
                <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                    <div class="container">
                        <a href="#page-top">  <img className="logo" src={logo} alt="Logo casa vital" /> </a>
                        {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">Casa Vital</a> */}

                        <button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            {t("MenuToggleBtn")}<i class="fas fa-bars"></i>
                        </button>
                        <div className={currentLang === 'en' ? 'navbarEn' : 'navbarHeb'}>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#services">{t("OurServicesNav")}</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">{t("OurRoomsNav")}</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#gallery">{t("GalleryNav")}</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">{t("AboutUsNav")}</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">{t("ContactUsNav")}</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://youtu.be/gvbuaqhjj60">{t("videoLink")}</a></li>
                                </ul>
                            </div>

                        </div>
                        <ToggleButtonGroup className="langBtn" onChange={() => changeLanguage('en')} aria-label="text formatting">
                            <ToggleButton aria-label="languages">

                                <span>{currentLang === 'עברית' ? <p>Eng</p> : <p>עברית</p>}</span>

                            </ToggleButton>
                        </ToggleButtonGroup>

                    </div>
                </nav>
                {/* <!-- Masthead--> */}

                <header class="masthead bg-primary text-white text-center" id="HeadScroll">
                    <div class="container d-flex align-items-center flex-column" id="headerContent">
                        <h1 class="masthead-heading text-capitalize mb-0">{t("TitleOfWebsite")}</h1>

                        <p class="masthead-subheading mb-0" id="subHeading">{t("SubTitleOfWebsite")}</p>

                        <p class="masthead-subheading mb-0">050-5272382</p>

                        <p class="masthead-subheading mb-0" id="specialprices">{t("specialprices")}</p>

                        <div>
                            <span class="iContact">
                             {/* eslint-disable-next-line */}
                                <a href="mailto:hotelrehovot@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                            </span>

                            <span class="iContact">
                                <a href="tel:+972505272382" target="_blank" rel="noopener noreferrer" alt="WhatsApptogetcasavitalisrael">
                                    <i class="fas fa-phone-alt headFloat"></i>
                                </a>
                            </span>
                        </div>

                    </div>

                    <div>
                        <a href="https://wa.me/972505272382" class="float" target="_blank" rel="noopener noreferrer" alt="WhatsApptogetcasavitalisrael">
                            <i class="fab fa-whatsapp my-float"></i>
                        </a>

                    </div>

                </header>

                {/* class="page-section bg-primary text-white mb-0" */}
                <div class="py-5">
                    <div class="container">
                        <div class="row align-items-center">

                            <div class="col-md-2 col-sm-6 my-3">
                                <a href="http://www.booking.com/Share-QyCZZf" target="_blank" rel="noopener noreferrer">
                                    <img class="img-Fluid img-brand d-block mx-auto" src={bookingIcon} alt="bookingcom" /></a>
                            </div>

                            <div class="col-md-2 col-sm-6 my-3">
                                <a href="https://www.tripadvisor.co.il/Hotel_Review-g1868435-d1912004-Reviews-Casa_de_Vital-Rehovot_Central_District.html?m=19905" target="_blank" rel="noopener noreferrer">
                                    <img class="img-Fluid img-brand d-block mx-auto" src={tripadvisorIcon} alt="tripadvisor" /></a>
                            </div>

                            <div class="col-md-2 col-sm-6 my-3">
                                <a href="https://www.trivago.co.il/רחובות-84890/hotel/הבית-של-ויטל-1375391" target="_blank" rel="noopener noreferrer">
                                    <img class="img-Fluid img-brand d-block mx-auto" src={trivagoIcon} alt="trivagoLink" /></a>
                            </div>

                            <div class="col-md-2 col-sm-6 my-3">
                                <a href="https://www.agoda.com/casa-vital-boutique-hotel/hotel/rehovot-il.html" target="_blank" rel="noopener noreferrer">
                                    <img class="img-Fluid img-brand d-block mx-auto" src={agodaIcon} alt="agoda" /></a>
                            </div>

                            <div class="col-md-2 col-sm-6 my-3">
                                <a href="https://he.airbnb.com/rooms/14049154" target="_blank" rel="noopener noreferrer">
                                    <img class="img-Fluid img-brand d-block mx-auto" src={airbnbIcon} alt="airbnb" /></a>
                            </div>

                            <div class="col-md-2 col-sm-6 my-3">
                                <a href="https://www.hotelscombined.co.il" target="_blank" rel="noopener noreferrer">
                                    <img class="img-Fluid img-brand d-block mx-auto" src={hotelsIcon} alt="hotelsbutique" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="services">
                    <div className="services">
                        <h1>{t("OurServices")}</h1>
                        <div className="cen">

                            <div className="service">
                                <i class="fas fa-car-side"></i>
                                <h2>{t("OurServicesH1")}</h2>
                                <p>{t("OurServicesP1")}</p>
                            </div>

                            <div className="service">
                                <i class="fas fa-globe-europe"></i>
                                <h2>{t("OurServicesH2")}</h2>
                                <p>{t("OurServicesP2")}</p>
                            </div>

                            <div className="service">
                                <i class="fas fa-tshirt"></i>
                                <h2>{t("OurServicesH3")}</h2>
                                <p>{t("OurServicesP3")}</p>
                            </div>

                            <div className="service">
                                <i class="fas fa-crop-alt"></i>
                                <h2>{t("OurServicesH6")}</h2>
                                <p>{t("OurServicesP6")}</p>
                            </div>

                            <div className="service">
                                <i class="fas fa-map-marked-alt"></i>
                                <h2>{t("OurServicesH5")}</h2>
                                <p>{t("OurServicesP5")}</p>
                            </div>

                            <div className="service">
                                <i class="fas fa-user-tie"></i>
                                <h2>{t("OurServicesH4")}</h2>
                                <p>{t("OurServicesP4")}</p>
                            </div>
                        </div>
                    </div>

                </section>


                {/* <!-- Our Rooms Section--> */}
                <section class="page-section portfolio" id="portfolio">
                    <div class="container">
                        <div class="ourrooms">
                            <h1 class="ourroomsh1">{t("OurRoomsNav")}</h1>
                        </div>

                        <div class="divider-custom"></div>

                        {/* <!-- Portfolio Grid Items--> */}
                        <div class="row justify-content-center">
                            {/* <!-- Portfolio Item 1--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"> <p className="roomText">{t("RoomsHeadSingle")}</p> </div>
                                    </div>
                                    <img class="img-fluid" src={Room1A} alt="HotelRoominRehovot" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 2--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><p className="roomText">{t("RoomsHeadDeluxe")}</p> </div>
                                    </div>
                                    <img class="img-fluid" src={Room2A} alt="ApartmentsHotelinrehovot" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 3--> */}
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><p className="roomText">{t("RoomsHeadLuxury")}</p> </div>
                                    </div>
                                    <img class="img-fluid" src={Room3A} alt="Hotelroominrehovotisrael" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="page-section portfolio" id="gallery">
                    <div class="container">
                        <div class="gallery">
                            <h1>{t("GalleryNav")}</h1>
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
                            <h1>{t("AboutUsNav")}</h1>
                        </div>

                        {/* <!-- About Section Content--> */}
                        <div class="row">
                            <div className={currentLang === 'en' ? 'EnAbout' : 'HebAbout'}>
                                <p>{t("AboutInfo1")}<br />
                                    {t("AboutInfo2")}<br />
                                    {t("AboutInfo3")}<br /><br />
                                    {t("AboutInfo4")}<br /><br />
                                    <div className="AboutInfo4">
                                        {t("AboutInfo5")}
                                    </div>
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- Contact Section--> */}
                <section class="page-section" id="contact">
                    <div class="contact-head">
                        <h1>{t("ContactUsNav")}</h1>
                    </div>
                    <ContactForm />
                </section>
                {/* <!-- Footer--> */}
                <footer class="footer text-center">
                    <div class="container">
                        <div class="row">
                            {/* <!-- Footer Location--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="mb-1">{t("FooterLeft1")}</h4>
                                <p class="lead mb-0">
                                    <a href="#services"> {t("FooterLeft2")}</a> <br />
                                    <a href="#portfolio"> {t("FooterLeft3")}</a> <br />
                                    <a href="#gallery"> {t("FooterLeft4")}</a> <br />
                                    <a href="#about"> {t("FooterLeft5")}</a> <br />
                                    <a href="#contact"> {t("FooterLeft6")}</a>
                                </p>
                            </div>
                            {/* <!-- Footer Social Icons--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="mb-2">{t("FooterCenter")}</h4>
                                <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                                {/* <a class="btn btn-outline-light btn-social mx-1" href="https://he.airbnb.com/rooms/14049154?_set_bev_on_new_domain=1619006328_NzM2MGE3OGUwZWI2&source_impression_id=p3_1619006734_9ziCjMd5xGMk56aY&guests=1&adults=1" target="_blank" rel="noopener noreferrer"><i class="fab fa-airbnb"></i></a> */}
                                {/* <a class="btn btn-outline-light btn-social mx-1" href="https://www.tripadvisor.co.il/Hotel_Review-g1868435-d1912004-Reviews-Casa_de_Vital-Rehovot_Central_District.html" target="_blank" rel="noopener noreferrer"><i class="fab fa-tripadvisor"></i></a> */}
                            </div>
                            {/* <!-- Footer About Text--> */}
                            <div class="col-lg-4">
                                <h4 class="mb-1">{t("FooterRight1")}</h4>
                                <p class="lead mb-0">{t("FooterRight2")}
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- Copyright Section--> */}
                <div class="copyright py-3 text-center text-white">
                    <div class="container">
                        <small> <span class="AccessibilitySpan"> {t("AccessibilityP")}</span>  <br />
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
                                            <h2 class="portfolio-modal-title text-secondary mb-3" id="portfolioModal1Label">{t("RoomsHeadSingle")}</h2>
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
                                            <p class="mb-3"> {t("RoomInfo1")}</p>
                                            <div className="ulRoomLeft">
                                                <ul >
                                                    <li> {t("RoomInfo1Li1")}</li>
                                                    <li> {t("RoomInfo1Li2")}</li>
                                                    <li> {t("RoomInfo1Li3")}</li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomCenter">
                                                <ul >
                                                    <li> {t("RoomInfo1Li4")}</li>
                                                    <li> {t("RoomInfo1Li5")}</li>
                                                    <li> {t("RoomInfo1Li6")}</li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomRight">
                                                <ul >
                                                    <li> {t("RoomInfo1Li7")}</li>
                                                    <li> {t("RoomInfo1Li8")}</li>
                                                    <li> {t("RoomInfo1Li9")}</li>

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
                                            <h2 class="portfolio-modal-title text-secondary mb-3" id="portfolioModal1Label">{t("RoomsHeadDeluxe")}</h2>
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

                                            <p class="mb-3"> {t("RoomInfo2")}</p>
                                            <div className="ulRoomLeft">
                                                <ul >
                                                    <li> {t("RoomInfo1Li1")}</li>
                                                    <li> {t("RoomInfo1Li2")}</li>
                                                    <li> {t("RoomInfo1Li3")}</li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomCenter">
                                                <ul >
                                                    <li> {t("RoomInfo1Li4")}</li>
                                                    <li> {t("RoomInfo1Li5")}</li>
                                                    <li> {t("RoomInfo1Li6")}</li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomRight">
                                                <ul >
                                                    <li> {t("RoomInfo1Li7")}</li>
                                                    <li> {t("RoomInfo1Li8")}</li>
                                                    <li> {t("RoomInfo1Li9")}</li>

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
                                            <h2 class="portfolio-modal-title text-secondary mb-3" id="portfolioModal1Label"> {t("RoomsHeadLuxury")}</h2>
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

                                            <p class="mb-3"> {t("RoomInfo3")}</p>
                                            <div className="ulRoomLeft">
                                                <ul >
                                                    <li> {t("RoomInfo1Li1")}</li>
                                                    <li> {t("RoomInfo1Li2")}</li>
                                                    <li> {t("RoomInfo1Li3")}</li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomCenter">
                                                <ul >
                                                    <li> {t("RoomInfo1Li4")}</li>
                                                    <li> {t("RoomInfo1Li5")}</li>
                                                    <li> {t("RoomInfo1Li6")}</li>

                                                </ul>
                                            </div>

                                            <div className="ulRoomRight">
                                                <ul >
                                                    <li> {t("RoomInfo1Li7")}</li>
                                                    <li> {t("RoomInfo1Li8")}</li>
                                                    <li> {t("RoomInfo1Li9")}</li>

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
