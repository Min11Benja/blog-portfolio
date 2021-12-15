/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export default function LatestPost(){
  return (
    <React.Fragment>
      <div className='wrapper styled'>
        <div className=' max-width'>
          <div className='p1 clearfix '>
            <div className='one'>
              <div className='page-title flat_strech parallax parallax1'>
                <div className='page-title-heading'>
                  <h1 className='title'>Latest posts</h1>
                </div>

                <div className='breadcrumbs'>
                  <ul>
                    <li>
                      <a href='#'>Home </a>
                    </li>
                    <li>
                      <a href='#'>Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='p8 stack clearfix'>
            <div className='one-five'>
              <div className='blog-card alt'>
                <div className='meta'>
                  <div
                    className='photo'
                    style={{backgroundImage: `url("https://dummyimage.com/280x280/cccccc/999999")`}}>

                    </div>
                  <ul className='details'>
                    <li className='author'>
                      <a href='#'>Benjamin</a>
                    </li>
                    <li className='date'>Aug. 24, 2015</li>
                    <li className='tags'>
                      <ul>
                        <li>
                          <a href='#'>Learn</a>
                        </li>
                        <li>
                          <a href='#'>Code</a>
                        </li>
                        <li>
                          <a href='#'>HTML</a>
                        </li>
                        <li>
                          <a href='#'>CSS</a>
                        </li>
                      </ul>
                    </li>
                    <li>Vistas: #100,000</li>
                    <li>Comentarios:#44</li>
                  </ul>
                </div>
                <div className='description'>
                  <h1 className='text-black'>
                    How to convert HTML to WordPress theme
                  </h1>
                  <h2>Opening a door to the future</h2>
                  <p className='text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    eum dolorum architecto obcaecati enim dicta praesentium,
                    quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                    sit.
                  </p>
                  <p className='read-more'>
                    <a href='blog-post.html' className='post-link'>
                      Leer más
                    </a>
                  </p>
                </div>
              </div>

              <div className='blog-card alt'>
                <div className='meta'>
                  <div
                    className='photo'
                    style={{backgroundImage: `url("https://dummyimage.com/280x280/cccccc/999999")`}}>

                  </div>
                  <ul className='details'>
                    <li className='author'>
                      <a href='#'>Benjamin</a>
                    </li>
                    <li className='date'>July. 15, 2015</li>
                    <li className='tags'>
                      <ul>
                        <li>
                          <a href='#'>Learn</a>
                        </li>
                        <li>
                          <a href='#'>Code</a>
                        </li>
                        <li>
                          <a href='#'>JavaScript</a>
                        </li>
                      </ul>
                    </li>
                    <li>Vistas: #60,000</li>
                    <li>Comentarios:#21</li>
                  </ul>
                </div>
                <div className='description'>
                  <h1 className='text-black'>Mastering the Language</h1>
                  <h2>Java is not the same as JavaScript</h2>
                  <p className='text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    eum dolorum architecto obcaecati enim dicta praesentium,
                    quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                    sit.
                  </p>
                  <p className='read-more'>
                    <a href='blog-post.html' className='post-link'>
                      Leer más
                    </a>
                  </p>
                </div>
              </div>

              <div className='blog-card alt'>
                <div className='meta'>
                  <div
                    className='photo'
                    style={{backgroundImage: `url("https://dummyimage.com/280x280/cccccc/999999")`}}>

                    </div>
                  <ul className='details'>
                    <li className='author'>
                      <a href='#'>Benjamin</a>
                    </li>
                    <li className='date'>Aug. 24, 2015</li>
                    <li className='tags'>
                      <ul>
                        <li>
                          <a href='#'>Learn</a>
                        </li>
                        <li>
                          <a href='#'>Code</a>
                        </li>
                        <li>
                          <a href='#'>HTML</a>
                        </li>
                        <li>
                          <a href='#'>CSS</a>
                        </li>
                      </ul>
                    </li>
                    <li>Vistas: #100,000</li>
                    <li>Comentarios:#44</li>
                  </ul>
                </div>
                <div className='description'>
                  <h1 className='text-black'>Learning to Code</h1>
                  <h2>Opening a door to the future</h2>
                  <p className='text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    eum dolorum architecto obcaecati enim dicta praesentium,
                    quam nobis! Neque ad aliquam facilis numquam. Veritatis,
                    sit.
                  </p>
                  <p className='read-more'>
                    <a href='blog-post.html' className='post-link'>
                      Leer más
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <a href='#' className='post-link'>
                  Load more
                </a>
              </div>
            </div>
            <div className='six-eight'>
              <div className='sidebars'>
                <div className='widget widget_search'>
                  <h3 className='widget-title'>Search</h3>
                  <form className='search-form'>
                    <input
                      type='search'
                      className='search-field'
                      placeholder='Type &amp; Hit Enter...'
                    />
                    <input type='submit' className='search-submit' />
                  </form>
                </div>
                <div className='widget widget_categories'>
                  <h3 className='widget-title'>Categories</h3>
                  <ul>
                    <li>
                      <a href='#'>Chicken Tinga Nachos (9)</a>
                    </li>
                    <li>
                      <a href='#'>Sweet and Sour Pork Chops (9)</a>
                    </li>
                    <li>
                      <a href='#'>Green Chile And Chicken Stew (9)</a>
                    </li>
                    <li>
                      <a href='#'>Pecan Pie Macarons (9)</a>
                    </li>
                    <li>
                      <a href='#'>Brazilian Burger With Egg (9)</a>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_recent_entries clearfix'>
                  <h3 className='widget-title'>Popular Post</h3>
                  <ul className='recent-post clearfix'>
                    <li>
                      <div className='thumb'>
                        <img src='assets/img/blog/1.jpg' alt='imgae' />
                      </div>
                      <div className='text'>
                        <h4>
                          <a href='#'>Post with couple photos inside</a>
                        </h4>
                        <p>On 13 Nov 2015</p>
                      </div>
                    </li>

                    <li>
                      <div className='thumb'>
                        <img src='assets/img/blog/1.jpg' alt='imgae' />
                      </div>
                      <div className='text'>
                        <h4>
                          <a href='#'>Post with couple photos inside</a>
                        </h4>
                        <p>On 13 Nov 2015</p>
                      </div>
                    </li>

                    <li>
                      <div className='thumb'>
                        <img src='assets/img/blog/1.jpg' alt='imgae' />
                      </div>
                      <div className='text'>
                        <h4>
                          <a href='#'>Post with couple photos inside</a>
                        </h4>
                        <p>On 13 Nov 2015</p>
                      </div>
                    </li>
                    <li>
                      <div className='thumb'>
                        <img src='assets/img/blog/1.jpg' alt='imgae' />
                      </div>
                      <div className='text'>
                        <h4>
                          <a href='#'>Post with couple photos inside</a>
                        </h4>
                        <p>On 13 Nov 2015</p>
                      </div>
                    </li>
                    <li>
                      <div className='thumb'>
                        <img src='assets/img/blog/1.jpg' alt='imgae' />
                      </div>
                      <div className='text'>
                        <h4>
                          <a href='#'>Post with couple photos inside</a>
                        </h4>
                        <p>On 13 Nov 2015</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className='widget widget_tag'>
                  <h3 className='widget-title'>Popular Tags</h3>
                  <div className='tag-list'>
                    <a className='active' href='#'>
                      example,
                    </a>
                    <a href='#'>Gallery, </a>
                    <a href='#'>Image, </a>
                    <a href='#'>quote, </a>
                    <a href='#'>tag, </a>
                    <a href='#'>Video,</a>
                    <a href='#'>PSD Teplates,</a>
                    <a href='#'>Business, </a>
                    <a href='#'>Portfolio, </a>
                    <a href='#'>Construction, </a>
                    <a href='#'>One Page, </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

