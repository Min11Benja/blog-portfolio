import React from 'react';

export default function Footer() {
    return(
        <React.Fragment>
            <div className="footer">
            <div className="p4 stack clearfix footer-padding max-width">
                <div className="one">
                    <div className="widget widget_text">
                        <h3 className="widget-title">About Us</h3>
                        <div className="textwidget">
                            <p>Creo firmemente en que el ver como se hacen las cosas frente a ti reduce enormemente la
                                barrera de entrada para los demás. Los videos de Speed Code nos muestran el proceso de
                                inicio a fin y de alguna manera nos motivan a querer replicarlo... leer más</p>

                        </div>
                    </div>
                </div>
                <div className="two">
                    <div className="widget widget_recent_posts">
                        <h3 className="widget-title">Latest Posts</h3>
                        <ul>
                            <li className="clearfix">
                                <div className="thumb flat-hover-images">
                                    <a href="#"><img src="https://dummyimage.com/80x80/cccccc/999999" alt="image" /></a>
                                </div>
                                <div className="content">
                                    <h5 className="title"><a href="#">Whole Wheat &amp; Soy Waffles Cake </a></h5>
                                    <div className="meta">19 September, 2016</div>
                                </div>
                            </li>

                            <li className="clearfix">
                                <div className="thumb flat-hover-images">
                                    <a href="#"><img src="https://dummyimage.com/80x80/cccccc/999999" alt="image" /></a>
                                </div>
                                <div className="content">
                                    <h5 className="title"><a href="#">Whole Wheat &amp; Soy Waffles Cake</a></h5>
                                    <div className="meta">19 September, 2016</div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="three">
                    <div className="widget widget-link clearfix">
                        <h3 className="widget-title">User Links </h3>

                        <ul className="links">
                            <li><a href="#.">About Us</a></li>
                            <li><a href="#.">Blog</a></li>
                            <li><a href="#.">Courses </a></li>
                            <li><a href="#.">FAQs</a></li>
                            <li><a href="#.">Events</a></li>
                            <li><a href="#.">Support</a></li>
                        </ul>


                        <div className="social-links">
                            <a href="#"><i className="fa fa-github-square"></i>GitHub</a>
                            <a href="#"><i className="fa fa-youtube-square"></i>YouTube</a>
                            <a href="#"><i className="fa fa-linkedin-square"></i>Linkedin</a>
                            <a href="#"><i className="fa fa-instagram"></i>Instagram</a>
                            <a href="#"><i className="fa fa-twitter-square"></i>Twitter</a>
                            <a href="#"><i className="fa fa-facebook-square"></i>Facebok</a>
                        </div>
                    </div>
                </div>
                <div className="four">
                    <div className="widget widget_instagram">
                        <h3 className="widget-title">Instagram</h3>

                        <ul className="clearfix">
                            <li>
                                <div className="thumb images-hover flat-hover-images">
                                    <a href="#">
                                        <span><img src="assets/img/instagram/1.jpg" alt="image" /></span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="thumb images-hover flat-hover-images">
                                    <a href="#">
                                        <span><img src="assets/img/instagram/2.jpg" alt="image" /></span>
                                    </a>
                                </div>
                            </li>
                            <li className="last">
                                <div className="thumb images-hover flat-hover-images">
                                    <a href="#">
                                        <span><img src="assets/img/instagram/3.jpg" alt="image" /></span>
                                    </a>
                                </div>
                            </li>
                            <li className="last">
                                <div className="thumb images-hover flat-hover-images">
                                    <a href="#">
                                        <span><img src="assets/img/instagram/4.jpg" alt="image" /></span>
                                    </a>
                                </div>
                            </li>

                            <li className="last">
                                <div className="thumb images-hover flat-hover-images">
                                    <a href="#">
                                        <span><img src="assets/img/instagram/5.jpg" alt="image" /></span>
                                    </a>
                                </div>
                            </li>

                            <li className="last">
                                <div className="thumb images-hover flat-hover-images">
                                    <a href="#">
                                        <span><img src="assets/img/instagram/6.jpg" alt="image" /></span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="f2 stack footer-padding max-width">

                <div className="copyright">
                    <div className="copyright-content">
                        Copyright &copy; 2022. Designed & coded by <strong>min11benja</strong>. All Rights Reserved
                    </div>
                    
                    <a href="#" className="go-top-v1 show"> <i className="fa fa-arrow-up"></i> &nbsp;Back to Top</a>
                </div>
            </div>
        </div>
        </React.Fragment>
            
        

        
    );
}