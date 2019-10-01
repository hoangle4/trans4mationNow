import React from 'react';

const Testimonial = () => {
	return (
		<div className='row mx-0 mb-5 '>
			<div className='col-12 p-0' style={{ overflow: 'hidden' }}>
				<h5 style={{ position: 'relative', top: '20%', textAlign: 'center', zIndex: '10' }}>Testimonials</h5>
				<div id='carouselCaptions' className='carousel slide' data-ride='carousel'>
					<ol className='carousel-indicators'>
						<li data-target='#carouselCaptions' data-slide-to='0' className='active' />
						<li data-target='#carouselCaptions' data-slide-to='1' />
						<li data-target='#carouselCaptions' data-slide-to='2' />
						<li data-target='#carouselCaptions' data-slide-to='3' />
					</ol>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<div className='Testimonial_Slide_Right' />
							<div className='carousel-caption d-none d-md-block'>
								<h5>First slide label</h5>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</div>
						</div>
						<div className='carousel-item'>
							<div className='Testimonial_Slide_Left' />
							<div className='carousel-caption d-none d-md-block'>
								<h5>Second slide label</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className='carousel-item'>
							<div className='Testimonial_Slide_Right' />
							<div className='carousel-caption d-none d-md-block'>
								<h5>Third slide label</h5>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</div>
						</div>
						<div className='carousel-item'>
							<div className='Testimonial_Slide_Left' />
							<div className='carousel-caption d-none d-md-block'>
								<h5>Four slide label</h5>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</div>
						</div>
					</div>

					<a className='carousel-control-prev' href='#carouselCaptions' role='button' data-slide='prev'>
						<span className='carousel-control-prev-icon' aria-hidden='true' />
						<span className='sr-only'>Previous</span>
					</a>
					<a className='carousel-control-next' href='#carouselCaptions' role='button' data-slide='next'>
						<span className='carousel-control-next-icon' aria-hidden='true' />
						<span className='sr-only'>Next</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
