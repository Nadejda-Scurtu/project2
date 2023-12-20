<template>
  <footer class="footer">
    <div class="footer-content">
 
    <b-row style="width: 100%;margin-block: 5%;">
      <b-col cols="4 d-flex" style="justify-content:center" >
        <div>
          <img src="@/assets/logo-1.png" alt="Логотип" width="230">
        </div>
      </b-col>
      <b-col cols="2 d-flex" >
        <div>
        <a class="head-foot-text" href="/destinations">DESTINATIONS</a>
        <a class="foot-text" href="/">Africa</a>
        <a class="foot-text" href="/">Asia</a>
        <a class="foot-text" href="/">Australia</a>
        <a class="foot-text" href="/">Europe</a>
        <a class="foot-text" href="/">North America</a>
        <a class="foot-text" href="/">South America</a>
        </div>
      </b-col>
      <b-col cols="2 d-flex" >
        <div>
        <a class="head-foot-text" href="/travelstyles">TRAVEL STYLES</a>
        <a class="foot-text" href="/">Outdoor activities</a>
        <a class="foot-text" href="/">Sightseeing tours</a>
        <a class="foot-text" href="/">Ocean trips</a>
        <a class="foot-text" href="/">Desert trips</a>
        <a class="foot-text" href="/">Hiking</a>
        <a class="foot-text" href="/">Ski</a>
        <a class="foot-text" href="/">Honeymoons</a>
        <a class="foot-text" href="/">Family trips</a>
        </div>
      </b-col>
      <b-col cols="2 d-flex" >
        <div>
        <a class="head-foot-text" href="/trips">TRIPS</a>
        <a class="foot-text" href="/">Last minute tours</a>
        <a class="foot-text" href="/">Upcoming tours</a>
        </div>
      </b-col>
      <b-col cols="2 d-flex" >
        
         <div>
          <a class="head-foot-text-right" href="/">CALL US</a>
          <a class="foot-text-right" href="/">+373 670 00 000</a>
          <div>
          <a class="head-foot-text-right" href="/">EMAIL US</a>
          <a class="foot-text-right" href="/">traverse@trip.com</a>
          </div>
          <div >
            <a class="head-foot-text-right" href="/">SOCIAL MEDIA</a>
            <div class="icon-container">
            <a href="/" class="link-custom"
              ><b-icon-facebook class="icon"></b-icon-facebook
            ></a>
            <a href="/" class="link-custom"
              ><b-icon-instagram class="icon"></b-icon-instagram
            ></a>
            <a href="/" class="link-custom"
              ><b-icon-twitter class="icon"></b-icon-twitter
            ></a></div>
          </div>
         </div>
      </b-col>
    </b-row>
 
    </div>
    <div class="footer-content-bottom">
      <p>PRIVACY </p>
      <p>&copy; {{ currentYear }} TRAVERSE. ALL RIGHTS RESERVED</p>
      <p>COOKIES</p>
    </div> 
  </footer>
</template>

<script>
import { BIconFacebook, BIconInstagram, BIconTwitter } from "bootstrap-vue";

export default {
  components: { BIconFacebook, BIconInstagram, BIconTwitter },
  data() {
  return {
    currentYear: new Date().getFullYear(),
      };
  }
};

</script>

<style>
.footer {
  background-color: rgba(40, 58, 44, 1);
}

.footer-content{
  display: flex;
  justify-content: center; 
}
.footer-content-bottom {
  display: flex;
  justify-content: center; 
  font-family: "GT Walsheim Pro Regular";
  font-weight: 400;
}

.footer-content-bottom p {
  margin: 1%;
  display: flex;
  align-items: left;
  font-size: 12px;
}
.icon {
  font-size: 30px;
  margin-left: 17px;
  color:white;
}
.icon-container{
margin-left: 25px
}
.link-custom {
  text-decoration: none;
}
.link-custom:hover .icon {
  color: rgba(177, 184, 134, 1);
}
.head-foot-text{
  font-size: 16px;
  font-family: "GT Walsheim Pro Regular";
  font-weight: 600;
  text-decoration: none;
  display: flex;
  color: rgba(177, 184, 134, 1);
  margin-bottom: 20px;
}
.head-foot-text:hover{
  color: white;
}
.foot-text{
  font-family: "GT Walsheim Pro Regular";
  font-weight: 500;
 color: white;
 font-size: 20px;
 text-decoration: none;
 display: flex;
 margin-block: 2px;
}
.foot-text:hover{
  color: rgba(177, 184, 134, 1);
  text-decoration: underline;
}
.head-foot-text-right{
  font-size: 16px;
  font-family: "GT Walsheim Pro Regular";
  font-weight: 600;
  text-decoration: none;
  display: flex;
  color: rgba(177, 184, 134, 1);
  justify-content: end;
  margin-bottom: 20px;
}
.foot-text-right{
  color: white;
  font-size: 20px;
  font-family: "GT Walsheim Pro Regular";
  font-weight: 500;
  text-decoration: none;
  display: flex;
  margin-bottom: 40px;
  justify-content: end;

}
.foot-text-right:hover{
  color: rgba(177, 184, 134, 1);
  
}
</style>


