import React from 'react';

export default function Header() {
    return(
        <React.Fragment>
            
	<header class="header-fixed nav-right clearfix">

		<div class="logo">
			<img src="assets/img/min11benja-logo-70x50.png" alt="min11benja blog logo" width="105" height="25" />
		</div>

		<div class="navclosed">
			<div class="line-nav-1"></div>
			<div class="line-nav-2"></div>
			<div class="line-nav-3"></div>
			<div class="line-nav-4"></div>
		</div>
		<div class="close-side"><a href="#"></a></div>

	
		<nav class="nav">
			<ul class="nav-buttons nav-off">
				<li><a href="#">Blog</a>
					<ul>
						<li><a href="index.html">Latest</a></li>
						<li class="current"><a href="#">Popular</a></li>
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