<template>
  <section class="border-top pt-115 pb-80" id='blog'>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8 col-md-12">
                      <!-- section title -->
                      <div class="section-title text-center">
                          <h2></h2>
                          <p></p>
                      </div>
                      <!-- End of section title -->
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog1.png" alt="">
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
                                      <a href="#"><span></span></a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details"></nuxt-link></h3>
                                  </div>
                                  <p></p>
                                  <nuxt-link class='blog-btn' to="/blog-details"></nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>

                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog2.png" alt="">
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
                                      <a href="#"><span></span></a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details"></nuxt-link></h3>
                                  </div>
                                  <p></p>
                                  <nuxt-link class='blog-btn' to="/blog-details"></nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>

                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog3.png" alt="">
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
                                      <a href="#"><span></span></a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details"></nuxt-link></h3>
                                  </div>
                                  <p></p>
                                  <nuxt-link class='blog-btn' to="/blog-details"></nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
    export default {
        name: "BlogHome"
    }
</script>

<style scoped>

</style>
