import React from 'react';

export default function Header() {
    return(
        <React.Fragment>
            
	<header className="header-fixed nav-right clearfix">

		<div className="logo">
			<img src="assets/img/min11benja-logo-70x50.png" alt="min11benja blog logo" width="105" height="25" />
		</div>

		<div className="navclosed">
			<div className="line-nav-1"></div>
			<div className="line-nav-2"></div>
			<div className="line-nav-3"></div>
			<div className="line-nav-4"></div>
		</div>
		<div className="close-side"><a href="#"></a></div>

	
		<nav className="nav">
			<ul className="nav-buttons nav-off">
				<li><a href="#">Blog</a>
					<ul>
						<li><a href="index.html">Latest</a></li>
						<li className="current"><a href="#">Popular</a></li>
					</ul>
				</li>
				<li><a href="#">Contact</a>
					<ul>
						<li><a href="#">Job Offer</a></li>
						<li><a href="#">Colaboration</a></li>
						<li><a href="#">Press</a></li>
						<li><a href="#">Other</a></li>
					</ul>
				</li>
				<li><a href="#">About</a>
					<ul>
						<li><a href="#">The Author</a></li>
						<li><a href="#">This page</a></li>
						<li><a href="#">Portfolio</a></li>
					</ul>
				</li>
				<li><a href="#">Subscribe</a></li>
				<li>
					<div>
						<input type="checkbox" id="toggle-ld-mode" name="toggle-ld-mode" checked />
						<label for="toggle-ld-mode">Light</label>
					</div>
				</li>
			</ul>
		</nav>
		

	</header>
	
        </React.Fragment>
    );
}