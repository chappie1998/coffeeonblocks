import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import './App.css';
import logo from './images/logo.png'
import p1 from './images/p1.svg'
import p2 from './images/p2.svg'
import p3 from './images/p3.svg'
import p4 from './images/p4.svg'
import p5 from './images/p5.svg'
import p6 from './images/p6.svg'
import p7 from './images/p7.svg'
import bl1 from './images/bl1.png'
import bl2 from './images/bl2.png'
import bl3 from './images/bl3.png'
import bl4 from './images/bl4.png'
import bl5 from './images/bl5.png'
import bl6 from './images/bl6.png'
import bl7 from './images/bl7.png'
import bl8 from './images/bl8.png'
import bl9 from './images/bl9.png'
import bl10 from './images/bl10.png'
import bl11 from './images/bl11.png'
import bl12 from './images/bl12.png'
import bl13 from './images/bl13.png'
import bl14 from './images/bl14.png'
import bl15 from './images/bl15.png'
import bl16 from './images/bl16.png'
import bl17 from './images/bl17.png'
import bl18 from './images/bl18.png'

function App() {
  return (
    <> 
        <Navbar>
            <Container>
            <Navbar.Brand href="#home" fixed='top'>
                <img
                src={logo}
                width="300"
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            </Container>
        </Navbar>
      <div id="top" className="hero wf-section">
        <div className="id cen">
          <h2 className="heading home-heading">BUILD YOUR BLOCKCHAIN APP</h2>
          <h3 className="hero__sub">Launch your MVP&nbsp;in 60 days or less and supercharge your startup.</h3>
          <a href="#contact" className="btn__holder w-inline-block"><div className="btn__text">let's talk</div></a>
        </div>
      </div>

      <div id="process" className="section process-section wf-section">
            <div className="id">
                <h3 className="accent">/Our Process</h3>
                <p className="large__callout">
                    Blockchain app development is complex. That's why we're <span className="highlight">obsessive about our process</span> and it shows in the quality of our work. Get your project delivered to scope, on time and within budget -
                    every time.
                </p>
            </div>
            <div className="processid">
                <div className="id process__id">
                    <div className="process1">
                        <div className="process__card _01">
                            <div id="w-node-edc42f96-bcf8-75a3-77f5-7310a454b165-a454b164" className="process__img">
                                <img src={p1} loading="eager" alt="" className="process__imginner" />
                            </div>
                            <div id="w-node-edc42f96-bcf8-75a3-77f5-7310a454b167-a454b164" className="process__text">
                                <div className="accent num">01</div>
                                <div className="h3">Plan</div>
                                <p className="processs__para">We’ll sit down with you (figuratively, not literally) to understand the details of your project idea and discuss how we can turn your dreams into reality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process2">
                        <div className="process__card _02">
                            <div id="w-node-_8a68bbd2-fa7c-fe22-2f10-1d2225ca99ac-25ca99ab" className="process__img">
                                <img src={p2} loading="eager" alt="" className="process__imginner" />
                            </div>
                            <div id="w-node-_8a68bbd2-fa7c-fe22-2f10-1d2225ca99ae-25ca99ab" className="process__text">
                                <div className="accent num">02</div>
                                <div className="h3">Design</div>
                                <p className="processs__para">We’ll then mock up your entire user experience from scratch in one of those fancy designer programs, so we can sculpt it into a masterpiece.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process3">
                        <div className="process__card">
                            <div id="w-node-_1801b1a7-51f3-9676-a35a-b0de1dd032af-1dd032ae" className="process__img">
                                <img src={p3} loading="eager" alt="" className="process__imginner" />
                            </div>
                            <div id="w-node-_1801b1a7-51f3-9676-a35a-b0de1dd032b1-1dd032ae" className="process__text">
                                <div className="accent num">03</div>
                                <div className="h3">Architect</div>
                                <p className="processs__para">
                                    While our designers are at work, our engineers will be working on your apps architecture. This is the invisible structure that ensures everything runs smoothly and is 100% secure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="process4">
                        <div className="process__card">
                            <div id="w-node-_369cf466-f458-5ab5-3f8d-6bfca65a7857-a65a7856" className="process__img">
                                <img src={p4} loading="eager" alt="" className="process__imginner" />
                            </div>
                            <div id="w-node-_369cf466-f458-5ab5-3f8d-6bfca65a7859-a65a7856" className="process__text">
                                <div className="accent num">04</div>
                                <div className="h3">Build</div>
                                <p className="processs__para">We'll then write some of the most beautiful code you’ve ever seen. We follow strict guidelines and everything is fully documented - giving you a solid foundation to build on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process5">
                        <div className="process__card">
                            <div id="w-node-_8545acbb-b20b-ffa3-2c01-d3d4aab00be0-aab00bdf" className="process__img">
                                <img src={p5} loading="lazy" alt="" className="process__imginner" />
                            </div>
                            <div id="w-node-_8545acbb-b20b-ffa3-2c01-d3d4aab00be2-aab00bdf" className="process__text">
                                <div className="accent num">05</div>
                                <div className="h3">Test</div>
                                <p className="processs__para">Meanwhile, we’re creating automated tests that we run to prevent any small changes from breaking the app and causing "help desk hell" for your team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process6">
                        <div className="process__card">
                            <div id="w-node-_2c3dca0d-735a-815c-b2c1-9769e4f04d4e-e4f04d4d" className="process__img">
                                <img src={p6} loading="eager" alt="" className="process__imginner" />
                            </div>
                            <div className="process__text">
                                <div className="accent num">06</div>
                                <div className="h3">Launch</div>
                                <p className="processs__para">
                                    Finally, we’re ready for deployment (aka launch). Since a good app is more than just a pile of source code on GitHub - much of the user experience comes from a proper deployment process.
                                </p>
                            </div>
                        </div>
                        <div className="process__card last">
                            <div id="w-node-_9edbb2cc-e943-c31d-32a2-44f9f3b6265c-5b2554a5" className="process__img">
                                <img src={p7} loading="eager" alt="" className="process__imginner" />
                            </div>
                            <div id="w-node-_9edbb2cc-e943-c31d-32a2-44f9f3b6265e-5b2554a5" className="process__text">
                                <div className="accent num">07</div>
                                <div className="h3">Upgrade</div>
                                <p className="processs__para">Once your product is live, it's rarely complete! The way to dominate your industry is to continually get feedback from your users and improve faster than the competition.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#contact" className="btn__holder w-inline-block"><div className="btn__text">let's talk</div></a>
            </div>
        </div>

        <div id="tech" className="section less tech-we-work wf-section">
            <div className="id">
                <div className="div-block-2 cen"><h3 className="accent">/Tech we’re working with</h3></div>
            </div>
            
            <div className="id-2 insta__id">
                <div className="main">
                    <div className="splide__track w-dyn-list">
                        <div role="list" className="splide__list w-dyn-items">
                            <div id="w-node-_4f5ecd28-ab76-85e3-0343-8695738ee5ab-5b2554a5" role="listitem" className="splide__slide w-dyn-item">
                                <div className="div-block-14">
                                    <img
                                        src="./Rapid Innovation _ Blockchain App Development &amp; Consulting_files/60f593a857484468fbeabdba_NodeJS-white.png"
                                        loading="lazy"
                                        alt="NodeJS"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 20vw, (max-width: 991px) 21vw, 13vw"
                                        srcset="
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f593a857484468fbeabdba_NodeJS-white-p-500.png   500w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f593a857484468fbeabdba_NodeJS-white-p-800.png   800w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f593a857484468fbeabdba_NodeJS-white-p-1080.png 1080w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f593a857484468fbeabdba_NodeJS-white-p-1600.png 1600w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f593a857484468fbeabdba_NodeJS-white-p-2000.png 2000w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f593a857484468fbeabdba_NodeJS-white.png        2400w
                                        "
                                        className="image-8"
                                    />
                                </div>
                            </div>
                            <div id="w-node-_4f5ecd28-ab76-85e3-0343-8695738ee5ab-5b2554a5" role="listitem" className="splide__slide w-dyn-item">
                                <div className="div-block-14">
                                    <img
                                        src="./Rapid Innovation _ Blockchain App Development &amp; Consulting_files/60f5944b300db490d4e9cd1f_React-white.png"
                                        loading="lazy"
                                        alt="React"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 20vw, (max-width: 991px) 21vw, 13vw"
                                        srcset="
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5944b300db490d4e9cd1f_React-white-p-500.png   500w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5944b300db490d4e9cd1f_React-white-p-800.png   800w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5944b300db490d4e9cd1f_React-white-p-1080.png 1080w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5944b300db490d4e9cd1f_React-white-p-1600.png 1600w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5944b300db490d4e9cd1f_React-white-p-2000.png 2000w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5944b300db490d4e9cd1f_React-white.png        2400w
                                        "
                                        className="image-8"
                                    />
                                </div>
                            </div>
                            <div id="w-node-_4f5ecd28-ab76-85e3-0343-8695738ee5ab-5b2554a5" role="listitem" className="splide__slide w-dyn-item">
                                <div className="div-block-14">
                                    <img
                                        src="./Rapid Innovation _ Blockchain App Development &amp; Consulting_files/60f594880f194f8235dcf0af_Golang-white.png"
                                        loading="lazy"
                                        alt="Go"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 20vw, (max-width: 991px) 21vw, 13vw"
                                        srcset="
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f594880f194f8235dcf0af_Golang-white-p-500.png   500w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f594880f194f8235dcf0af_Golang-white-p-800.png   800w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f594880f194f8235dcf0af_Golang-white-p-1080.png 1080w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f594880f194f8235dcf0af_Golang-white-p-1600.png 1600w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f594880f194f8235dcf0af_Golang-white-p-2000.png 2000w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f594880f194f8235dcf0af_Golang-white.png        2400w
                                        "
                                        className="image-8"
                                    />
                                </div>
                            </div>
                            <div id="w-node-_4f5ecd28-ab76-85e3-0343-8695738ee5ab-5b2554a5" role="listitem" className="splide__slide w-dyn-item">
                                <div className="div-block-14">
                                    <img
                                        src="./Rapid Innovation _ Blockchain App Development &amp; Consulting_files/60f5963086bf6b48f52d77f8_Solidity-white.png"
                                        loading="lazy"
                                        alt="Solidity"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 20vw, (max-width: 991px) 21vw, 13vw"
                                        srcset="
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5963086bf6b48f52d77f8_Solidity-white-p-500.png   500w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5963086bf6b48f52d77f8_Solidity-white-p-800.png   800w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5963086bf6b48f52d77f8_Solidity-white-p-1080.png 1080w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5963086bf6b48f52d77f8_Solidity-white-p-1600.png 1600w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5963086bf6b48f52d77f8_Solidity-white-p-2000.png 2000w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5963086bf6b48f52d77f8_Solidity-white.png        2400w
                                        "
                                        className="image-8"
                                    />
                                </div>
                            </div>
                            <div id="w-node-_4f5ecd28-ab76-85e3-0343-8695738ee5ab-5b2554a5" role="listitem" class="splide__slide w-dyn-item">
                                <div class="div-block-14">
                                    <img src="https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/61221f0b454c665c06aecf7c_image.png" loading="lazy" alt="Rust" class="image-8"/>
                                        
                                </div>
                            </div>

                            <div id="w-node-_4f5ecd28-ab76-85e3-0343-8695738ee5ab-5b2554a5" role="listitem" className="splide__slide w-dyn-item">
                                <div className="div-block-14">
                                    <img
                                        src="./Rapid Innovation _ Blockchain App Development &amp; Consulting_files/60f595c299145057abee47e6_Fabric-white.png"
                                        loading="lazy"
                                        alt="Fabric"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 20vw, (max-width: 991px) 21vw, 13vw"
                                        srcset="
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f595c299145057abee47e6_Fabric-white-p-500.png   500w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f595c299145057abee47e6_Fabric-white-p-800.png   800w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f595c299145057abee47e6_Fabric-white-p-1080.png 1080w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f595c299145057abee47e6_Fabric-white-p-1600.png 1600w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f595c299145057abee47e6_Fabric-white-p-2000.png 2000w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f595c299145057abee47e6_Fabric-white.png        2400w
                                        "
                                        className="image-8"
                                    />
                                </div>
                            </div>
                            <div id="w-node-_4f5ecd28-ab76-85e3-0343-8695738ee5ab-5b2554a5" role="listitem" className="splide__slide w-dyn-item">
                                <div className="div-block-14">
                                    <img
                                        src="./Rapid Innovation _ Blockchain App Development &amp; Consulting_files/60f5967fdd44a1b49d895929_C-white.png"
                                        loading="lazy"
                                        alt="C++"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 20vw, (max-width: 991px) 21vw, 13vw"
                                        srcset="
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5967fdd44a1b49d895929_C-white-p-500.png   500w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5967fdd44a1b49d895929_C-white-p-800.png   800w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5967fdd44a1b49d895929_C-white-p-1080.png 1080w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5967fdd44a1b49d895929_C-white-p-1600.png 1600w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5967fdd44a1b49d895929_C-white-p-2000.png 2000w,
                                            https://uploads-ssl.webflow.com/60e88f2b3c0c87253506fc01/60f5967fdd44a1b49d895929_C-white.png        2400w
                                        "
                                        className="image-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="tech" className="section less wf-section">
            <div className="id">
                <div className="div-block-2 cen"><div className="accent">/Blockchains We Build On</div></div>
            </div>
            <div className="id new-cection">
                <div className="image-container">
                    <div className="single-logo-wraper"><img src={bl1} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl2} loading="lazy" alt="" className="image-13" /></div>
                    <div className="single-logo-wraper"><img src={bl3} loading="lazy" alt="" className="image-14" /></div>
                    <div className="single-logo-wraper"><img src={bl4} loading="lazy" alt="" className="image-15" /></div>
                    <div className="single-logo-wraper"><img src={bl5} loading="lazy" alt="" className="image-16" /></div>
                    <div className="single-logo-wraper"><img src={bl6} loading="lazy" alt="" className="image-17" /></div>
                    <div className="single-logo-wraper"><img src={bl7} loading="lazy" alt="" className="image-13" /></div>
                    <div className="single-logo-wraper"><img src={bl8} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl9} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl10} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl11} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl12} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl13} loading="lazy" alt="" /></div>
                    <div className="single-logo-wraper"><img src={bl14} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl15} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl16} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl17} loading="lazy" alt="" className="image-12" /></div>
                    <div className="single-logo-wraper"><img src={bl18} loading="lazy" alt="" /></div>
                </div>
            </div>
        </div>

        
        <div className="section contactms wf-section">
            <div id="contact" className="id pruplebox contact">
                <div className="contact__inner">
                    <div className="contact_left">
                        <div className="accent">/contact us</div>
                        <p className="large__callout full">
                            Looking For Experienced Blockchain Developers?<br />
                            <br />
                            Let’s Talk
                        </p>
                    </div>
                    <div className="form-block w-form">
                    <p className="large__callout full">
                        Mail us at 
                        <br/>
                        <br/>
                        hello@coffeeonblocks.com
                        </p>
                        {/* <form id="email-form" name="email-form" data-name="Email Form" method="get" redirect="/thankyou" data-redirect="/thankyou" className="form" aria-label="Email Form">
                            <label for="name" className="fl">Name</label><input type="text" className="tf w-input" maxlength="256" name="name" data-name="Name" placeholder="Name*" id="name" />
                            <label for="Email-3" className="fl">Email Address</label><input type="email" className="tf w-input" maxlength="256" name="Email" data-name="Email" placeholder="EMAIL*" id="Email-3" required="" />
                            <label for="Phone-2" className="fl">Project Budget</label>
                            <select id="field" name="field" data-name="field" className="tf w-select">
                                <option value="PROJECT BUDGET*">PROJECT BUDGET*</option>
                                <option value="Under $100,000">Under $10,000</option>
                                <option value="Under $100,000">$10,000 - $100,000</option>
                                <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                                <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                                <option value="Above $500,000">Above $500,000</option>  
                            </select>
                            <label for="Message-3" className="fl">Message</label><textarea placeholder="Message*" maxlength="5000" id="Message-3" name="Message" data-name="Message" className="tf lg w-input"></textarea>
                            <div data-w-id="52d4c937-dfd8-b65d-d1bb-997d0179202d" className="btn__holder"><input type="submit" value="Submit" data-wait="Please wait..." className="btn__text w-button" /></div>
                        </form>
                        <div id="thankyou" className="success-message w-form-done" tabindex="-1" role="region" aria-label="Email Form success"><div>Thank you! Your submission has been received!</div></div>
                        <div className="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure"><div>Oops! Something went wrong while submitting the form.</div></div> */}
                    </div>
                </div>
            </div>
        </div>


        {/* <div className="footer__main wf-section">
            <div className="footer__id">
                <div className="footer__col logo"><img src="./Rapid Innovation _ Blockchain App Development &amp; Consulting_files/60ea1d97d5e70eded7e2f6f5_Group 111.svg" loading="lazy" alt="" className="image-4" /></div>
                <div className="footer__col">
                    <div className="footer__heading">Explore</div>
                    <a href="https://rapidinnovation.io/#about" className="footer__link li">About</a><a href="https://rapidinnovation.io/#process" className="footer__link li">Our Process</a>
                    <a href="https://rapidinnovation.io/#team" className="footer__link li">Team</a><a href="https://rapidinnovation.io/#tech" className="footer__link li">Tech</a>
                    <a href="https://www.rapidinnovation.io/blockchain-development-services" className="footer__link li">Blockchain Development Services</a>
                    <a href="https://www.rapidinnovation.io/blockchain-consulting-services" className="footer__link li">Blockchain Consulting</a><a href="https://www.rapidinnovation.io/portfolio" className="footer__link li">Portfolio</a>
                    <a href="https://blog.rapidinnovation.io/" className="footer__link li">Blog</a>
                </div>
                <div id="w-node-_00ef183c-47ed-7e06-2ed7-d0c53812a1f0-3812a1e1" className="footer__col">
                    <div className="footer__heading">Our Offices</div>
                    <div className="locations__grid">
                        <div className="location__holder">
                            <div className="accent location">United States</div>
                            <div className="footer__link">
                                2785 W Seltice Way<br />
                                Post Falls, ID 83854
                            </div>
                            <div data-w-id="577293ef-bccd-2f9d-16f6-516c83329fcd" className="footer__link"><a href="mailto:hello@rapidinnovation.io" target="_blank" className="em">hello@rapidinnovation.io</a></div>
                        </div>
                        <div className="location__holder">
                            <div className="accent location">India</div>
                            <div className="footer__link">
                                H-64, Sector 63,<br />
                                Noida, 201003
                            </div>
                            <div data-w-id="9ac744ed-1534-617e-9ca0-ce4aca87f3b9" className="footer__link"><a href="mailto:hello@rapidinnovation.io" target="_blank" className="em">hello@rapidinnovation.io</a></div>
                        </div>
                    </div>
                </div>
                <div id="w-node-_00ef183c-47ed-7e06-2ed7-d0c53812a202-3812a1e1" className="footer__col last">
                    <div className="spacer35"></div>
                    <div className="div-block-3">
                        <a href="https://www.facebook.com/rapidinnovation.io" target="_blank" className="socialink w-inline-block">
                            <div className="social__icon w-embed">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a href="https://medium.com/@rapidinnovation" target="_blank" className="socialink w-inline-block">
                            <div className="social__icon in w-embed">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="medium-m" className="svg-inline--fa fa-medium-m fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/rapid-innovation/" target="_blank" className="socialink w-inline-block">
                            <div className="social__icon in w-embed">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        fill="currentColor"
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a href="https://twitter.com/innovationrapid" target="_blank" className="socialink w-inline-block">
                            <div className="social__icon in w-embed">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/channel/UC66IEGwxNUVO2wshrUdhc8g" target="_blank" className="socialink w-inline-block">
                            <div className="social__icon youtube youtube-width w-embed">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube-f" className="svg-inline--fa fa-youtube-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path
                                        data-name="layer1"
                                        d="M49.539 12H14.461A12.4 12.4 0 0 0 2 24.327v17.346A12.4 12.4 0 0 0 14.461 54h35.078A12.4 12.4 0 0 0 62 41.673V24.327A12.4 12.4 0 0 0 49.539 12z"
                                        fill="none"
                                        stroke="#202020"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        data-name="layer2"
                                        d="M41.111 33.844L24.7 41.585a.658.658 0 0 1-.938-.585V25.031a.659.659 0 0 1 .956-.581l16.407 8.225a.649.649 0 0 1-.014 1.169z"
                                        fill="none"
                                        stroke="#202020"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/rapidinnovation.io" target="_blank" className="socialink w-inline-block">
                            <div className="social__icon youtube youtube-width f instagram w-embed">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube-f" className="svg-inline--fa fa-youtube-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path
                                        data-name="layer1"
                                        d="M49.539 12H14.461A12.4 12.4 0 0 0 2 24.327v17.346A12.4 12.4 0 0 0 14.461 54h35.078A12.4 12.4 0 0 0 62 41.673V24.327A12.4 12.4 0 0 0 49.539 12z"
                                        fill="none"
                                        stroke="#202020"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        data-name="layer2"
                                        d="M41.111 33.844L24.7 41.585a.658.658 0 0 1-.938-.585V25.031a.659.659 0 0 1 .956-.581l16.407 8.225a.649.649 0 0 1-.014 1.169z"
                                        fill="none"
                                        stroke="#202020"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>


            <div className="footer__id cent">
                <div className="footer__link byline">
                    © 2021, Rapid Innovation.&nbsp;&nbsp;&nbsp; <a href="https://www.rapidinnovation.io/terms" className="footer__link">Terms of Service</a> |
                    <a href="https://www.rapidinnovation.io/privacy-policy" className="footer__link">Privacy Policy</a>
                </div>
            </div>
        </div> */}
    </>
  );
}

export default App;
