<template>
  <div>
    <footer class="footer" id="footer">
      <div class="footerbg">
        <img src="/assets/img/footer-bg.png" alt="">
      </div>
      <div class="footer-top pt-120 pb-110">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <!-- footer widget -->
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="/"><img src="/assets/img/logo.png" alt="GrowUPwTech Tech logo"></a>
                </div>
                <p></p>
                <!-- footer social area -->
                <div class="footer-social-area d-none">
                  <ul class="social-icons social-icons-light nav">
                    <li><a href="#" target="_blank"><i class="fa fa-facebook-f"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
                <!-- End of footer social area -->
              </div>
              <!--End of footer widget -->
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <!-- widget header -->
                <div class="widget-header">
                  <h5>Contact</h5>
                </div>
                <!-- widget header -->
                <div class="widget-body">
                  <ul class="address-list">
                    <li>
                      <span><i class="fa  fa-phone-square"></i></span>
                      0987453773
                    </li>
                    <li>
                      <span><i class="fa  fa-phone-square"></i></span>
                      0869940695
                    </li>
                    <li>
                      <span><i class="fa  fa-envelope"></i></span>

                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <!-- widget header -->
                <div class="widget-header">
                  <h5>Address</h5>
                </div>
                <!-- widget header -->
              </div>

              <div class="widget-body">
                <div class="extra-link">
                  <div class="link-left">
                    <ul>
                      <li>
                        <span><i class="fa  fa-map"></i></span>
                        KĐT Resco Cổ Nhuế, Bắc Từ Liêm, Hà Nội
                      </li>

                    </ul>
                  </div>
                  <div class="link-right d-none">
                    <ul>
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Clients</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <div class="widget-body">
                  <div class="twetter-post-inner">
                    <div class="footer-post-details">
                      @GrowUPwTech Education - Jan 01, 2024
                    </div>
                    <div class="twetter-post">
                      <span><i class="fa fa-twitter"></i></span>
                      GrowUPwTech Education - Jan 01, 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-text text-center">
          <p>© copyright 2024 by GrowUPwTech Education</p>
        </div>
      </div>

    </footer>

    <!-- back to top -->
    <div @click="scrollTop" :class="`back-to-top ${scrollBtn ? 'show' : ''}`">
      <a href="#"><i class="fa fa-chevron-up"></i></a>
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      scrollBtn: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {

    handleScroll() {

      if (window.scrollY > 70) {
        this.scrollBtn = true
      }
      else if (window.scrollY < 70) {
        this.scrollBtn = false
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    }


  }
}
</script>

<style scoped></style>
