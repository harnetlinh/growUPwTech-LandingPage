<template>
  <div>
    <NavOne />
    <BannerOne />
    <Descriptions />
    <Counter />
    <ServiceOne />
    <ServiceTwo />
    <DownloadApp />
    <Footer />
  </div>

</template>
<script>
  import NavOne from "../components/NavOne";
  import BannerOne from "../components/BannerOne";
  import Footer from "../components/Footer";
  import Descriptions from "../components/Descriptions";
  import ServiceTwo from "../components/ServiceTwo";
  import ServiceOne from "../components/ServiceOne";
  import DownloadApp from "../components/DownloadApp";
  export default {
    components: {
      DownloadApp,
      ServiceOne,
      ServiceTwo,
      Descriptions,
      Footer,
      BannerOne,
      NavOne
    }
  }
</script>
