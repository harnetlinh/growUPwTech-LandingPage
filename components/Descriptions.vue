<template>
  <div>
    <section class="pb-110 mt-20" id='about-us'>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-8">
            <!-- section title -->
            <div class="section-title text-center">
              <p></p>
              <h2>Về chúng tôi</h2>
              <p>
              </p>
            </div>
            <!-- End of section title -->
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12">
            <div class="feature-carousel owl-carousel">

              <swiper :options="swiperOptions">
                <swiper-slide>
                  <div class="single-feature-inner text-center">
                    <div><img src="/assets/img/icons/teamwork.svg" class="feature-icon"
                        alt="GrowUPwTech Teamwork"></div>
                        <h5 class="mt-4">Kỹ năng làm việc nhóm</h5>
                        <p>Trẻ học cách hợp tác và chia sẻ ý tưởng trong các dự án lập trình và sáng tạo</p>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="single-feature-inner text-center">
                    <div><img src="/assets/img/icons/planning.svg" class="feature-icon"
                        alt="GrowUPwTech Technology"></div>
                    <h5 class="mt-4">Tăng cường khả năng công nghệ</h5>
                    <p>Trẻ tiếp cận IoT, AI và kỹ thuật lập trình hiện đại qua các dự án sáng tạo​</p>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="single-feature-inner text-center">
                    <div><img src="/assets/img/icons/goal.svg" class="feature-icon"
                        alt="GrowUPwTech Solution"></div>
                        <h5 class="mt-4">Phát triển tư duy sáng tạo</h5>
                        <p>Trẻ học cách giải quyết vấn đề qua lắp ráp và lập trình Lego Robotics​</p>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="single-feature-inner text-center">
                    <div><img src="/assets/img/icons/speaking.svg" class="feature-icon"
                        alt="GrowUPwTech EQ"></div>
                        <h5 class="mt-4">Kỹ năng giao tiếp và thuyết trình</h5>
                        <p>Trẻ rèn luyện khả năng trình bày ý tưởng và thuyết trình trong các buổi học và dự án​</p>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="single-feature-inner text-center">
                    <div><img src="/assets/img/icons/solution.svg" class="feature-icon"
                        alt="GrowUPwTech Logic"></div>
                        <h5 class="mt-4">Rèn luyện tư duy logic</h5>
                        <p>Học sinh phát triển kỹ năng tư duy qua việc lập trình, điều khiển robot và vi mạch</p>
                  </div>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div><!--/.feature-carousel-->
          </div><!--/.col-->
        </div><!--/.row-->
      </div><!--/.container-->
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "Features",
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    }
  },
}
</script>

<style scoped></style>
