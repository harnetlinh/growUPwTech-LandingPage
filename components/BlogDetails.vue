<template>
  <section class="pt-120 pb-150">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8">
                      <!-- blog details inner -->
                      <div class="blog-details-inner">
                          <!-- single blog inner -->
                          <div class="single-blog-inner">
                              <!-- blog image -->
                              <div class="post-image">
                                  <nuxt-link to="/blog-details">
                                      <img src="/assets/img/blog/list1.png" alt="">
                                  </nuxt-link>
                                  <div class="post-date">
                                      <p><span></span></p>
                                  </div>
                              </div>
                              <!--/.End of  blog image -->

                              <!-- post content -->
                              <div class="post-content">
                                  <div class="post-details">
                                      <div class="post-info d-flex">
                                          <a href="#"><span></span></a>
                                          <a href="#"><span></span> </a>
                                      </div>

                                      <div class="post-title">
                                          <h3><nuxt-link to="/blog-details"></nuxt-link></h3>
                                      </div>
                                      <p></p>
                                      <p class="mb-0"></p>
                                  </div>
                              </div><!-- /.End of post content -->
                          </div><!-- /.End of single blog inner -->

                          <!-- post tag and share -->
                          <div class="post-tag-share d-flex align-items-center">
                              <div class="post-tag">
                                  <h5></h5>
                                  <a href="#"></a>
                                  <a href="#"></a>
                                  <a href="#"></a>
                              </div>
                              <div class="post-share">
                                  <ul class="social-list mb--0 list-unstyled">
                                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                      <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                      <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                                  </ul>
                              </div>
                          </div><!-- /.End of post tag and share -->

                          <!-- post author -->
                          <div class="post-author-inner midea">
                              <img src="/assets/img/blog/blog-author.png" alt="">
                              <div class="author-details">
                                  <h4></h4>
                                  <p>
                                    </p>
                                  <a href="#"></a>
                              </div>
                          </div><!-- /.End of post author -->

                          <!-- post comments -->
                          <div class="post-comment">
                              <h3></h3>
                              <ul class="post-comments p-0 m-0 list-unstyled">
                                  <li>
                                      <div class="comment-author-details media">
                                          <img src="/assets/img/blog/comment-author.png" alt="">
                                          <div class="comment-author-content">
                                              <h5></h5>
                                              <h6></h6>
                                              <p></p>
                                              <a href="#" class="btn"></a>
                                          </div>
                                      </div>
                                  </li>
                                  <li class="d-flex">
                                      <div class="comment-author-details media">
                                          <img src="/assets/img/blog/comment-author2.png" alt="">
                                          <div class="comment-author-content">
                                              <h5></h5>
                                              <h6></h6>
                                              <p></p>
                                              <a href="#" class="btn"></a>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <!--/.End of post comments -->

                          <!-- contact form -->
                          <div class="contact-form contact-page-form parsley-validate">
                              <h3></h3>
                              <form action="#" novalidate="">
                                  <div class="row">
                                      <div class="col-md-6">
                                          <input type="text" name="name" placeholder="Full Name" class="theme-input-style" required="">
                                      </div>
                                      <div class="col-md-6">
                                          <input type="email" name="email" placeholder="Email Address" class="theme-input-style" required="">
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-12">
                                          <textarea name="message" placeholder="Write Message" class="theme-input-style"></textarea>
                                          <div class="submite-btn">
                                              <button type="submit" class="btn"></button>
                                          </div><!-- /.submite btn -->
                                      </div><!-- /.col -->
                                  </div><!-- /.row -->
                              </form><!-- /.form -->
                          </div><!-- /.End of contact form -->
                      </div>
                      <!-- Ennd of blog details inner -->
                  </div>

                  <div class="col-lg-4">
                      <aside>
                          <!-- single sidebar widget -->
                          <div class="single-sidebar-widget mb-30">
                              <div class="search-bar-widget">
                                  <div class="search-form parsley-validate">
                                      <form action="#" method="POST" novalidate="">
                                          <input type="text" placeholder="Search here..." required="">
                                      </form>
                                  </div>
                              </div>
                          </div>
                          <!--End of  single sidebar widget -->

                          <!-- single sidebar widget -->
                          <div class="single-sidebar-widget mb-30">
                              <div class="sidebar-title">
                                  <h5></h5>
                              </div>
                              <div class="sidebar-body latest-post">
                                  <ul>
                                      <!-- single latest post -->
                                      <li>
                                          <div class="latest-post-wrap media">
                                              <div class="latest-post-img">
                                                  <img src="/assets/img/blog/latest-blog1.png" alt="">
                                              </div>
                                              <div class="latest-post-body media-body">
                                                  <p></p>
                                              </div>
                                          </div>
                                      </li>
                                      <!-- single latest post -->

                                      <!-- single latest post -->
                                      <li>
                                          <div class="latest-post-wrap media">
                                              <div class="latest-post-img">
                                                  <img src="/assets/img/blog/latest-blog2.png" alt="">
                                              </div>
                                              <div class="latest-post-body media-body">
                                                  <p></p>
                                              </div>
                                          </div>
                                      </li>
                                      <!-- single latest post -->

                                      <!-- single latest post -->
                                      <li>
                                          <div class="latest-post-wrap media">
                                              <div class="latest-post-img">
                                                  <img src="/assets/img/blog/latest-blog3.png" alt="">
                                              </div>
                                              <div class="latest-post-body media-body">
                                                  <p></p>
                                              </div>
                                          </div>
                                      </li>
                                      <!-- single latest post -->
                                  </ul>
                              </div>
                          </div>
                          <!--End of  single sidebar widget -->

                          <!-- single sidebar widget -->
                          <div class="single-sidebar-widget mb-30">
                              <div class="sidebar-title">
                                  <h5></h5>
                              </div>

                              <div class="sidebar-body categories-inner">
                                  <ul>
                                      <li><a href="#"></a></li>
                                      <li><a href="#"></a></li>
                                      <li><a href="#"></a></li>
                                      <li><a href="#"></a></li>
                                      <li><a href="#"></a></li>
                                      <li><a href="#"></a></li>
                                  </ul>
                              </div>
                          </div>
                          <!--End of  single sidebar widget -->

                          <!-- single sidebar widget -->
                          <div class="single-sidebar-widget mb-30">
                              <div class="sidebar-title">
                                  <h5></h5>
                              </div>

                              <div class="sidebar-body tag-inner">
                                  <a href="#"></a>
                                  <a href="#"></a>
                                  <a href="#"></a>
                                  <a href="#"></a>
                                  <a href="#"></a>
                                  <a href="#"></a>
                                  <a href="#"></a>
                              </div>
                          </div>
                          <!--End of  single sidebar widget -->
                      </aside>
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
    export default {
        name: "BlogDetails"
    }
</script>

<style scoped>

</style>
