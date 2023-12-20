<template>
  <div class="destinations-back-area">
    <div class="dest-area-forGroup">
      <img src="@/assets/for-tours/destinations/background.png" />
    </div>
    <div class="area-for-headtext">
      <img
        class="dest-custom-image"
        src="@/assets/for-tours/destinations/head-text.png"
      />
    </div>
    <div class="area-for-carts">
      <b-row class="custom-row-area1">
        <b-col class="dest-custom-cols">
          <div style="position: relative">
            <img
              class="cust-image-destination"
              src="@/assets/for-tours/destinations/Africa.png"
            />
            <a href="">
            <div class="dest-area-circle">
              <img
                class="area-circle"
                src="@/assets/for-tours/destinations/circle.png"
              />
            </div></a>
            <div class="dest-area-text">
              <span class="text-destinations"> Africa </span>
            </div>
          </div>
        </b-col>
        <b-col class="dest-custom-cols">
          <div style="position: relative">
            <img
              class="cust-image-destination"
              src="@/assets/for-tours/destinations/Asia.png"
            />
            <a href="">
            <div class="dest-area-circle">
              <img
                class="area-circle"
                src="@/assets/for-tours/destinations/circle.png"
              />
            </div></a>
            <div class="dest-area-text">
              <span class="text-destinations"> Asia </span>
            </div>
          </div>
        </b-col>
        <b-col class="dest-custom-cols">
          <div style="position: relative">
            <img
              class="cust-image-destination"
              src="@/assets/for-tours/destinations/Australia.png"
            />
            <a href="">
            <div class="dest-area-circle">
              <img
                class="area-circle"
                src="@/assets/for-tours/destinations/circle.png"
              />
            </div></a>
            <div class="dest-area-text">
              <span class="text-destinations"> Australia </span>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="custom-row-area2">
        <b-col class="dest-custom-cols">
          <div style="position: relative">
            <img
              class="cust-image-destination"
              src="@/assets/for-tours/destinations/Europe.png"
            />
            <a href="">
            <div class="dest-area-circle">
              <img
                class="area-circle"
                src="@/assets/for-tours/destinations/circle.png"
              />
            </div></a>
            <div class="dest-area-text">
              <span class="text-destinations"> Europe </span>
            </div>
          </div>
        </b-col>
        <b-col class="dest-custom-cols">
          <div style="position: relative">
            <img
              class="cust-image-destination"
              src="@/assets/for-tours/destinations/N-America.png"
            />
            <a href="">
            <div class="dest-area-circle">
              <img
                class="area-circle"
                src="@/assets/for-tours/destinations/circle.png"
              />
            </div></a>
            <div
              class="dest-area-text"
              style="flex-direction: column; top: 40%"
            >
              <span class="text-destinations"> North </span>
              <span class="text-destinations" style="line-height: 90%">
                America
              </span>
            </div>
          </div>
        </b-col>
        <b-col class="dest-custom-cols">
          <div style="position: relative">
            <img
              class="cust-image-destination"
              src="@/assets/for-tours/destinations/S-America.png"
            />
            <a href="">
            <div class="dest-area-circle">
              <img
                class="area-circle"
                src="@/assets/for-tours/destinations/circle.png"
              />
            </div></a>
            <div
              class="dest-area-text"
              style="flex-direction: column; top: 40%"
            >
              <span class="text-destinations"> South </span>
              <span class="text-destinations" style="line-height: 90%">
                America
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style scoped>
.destinations-back-area {
  color: white;
  height: 1700px;
  position: relative;
}
.dest-area-forGroup {
  display: flex;
  position: absolute;
  z-index: -1;
}
.area-for-headtext {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 3%;
}
.dest-custom-image {
  width: 23%;
}

.area-for-carts {
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  height: 800px;
  top: 12%;
}
.custom-row-area1 {
  display: flex;
  position: absolute;
  width: 86%;
  height: 70%;
}
.custom-row-area2 {
  display: flex;
  position: absolute;
  width: 86%;
  height: 70%;
  top: 85%;
}
.dest-custom-cols {
  color: black;
  display: flex;
  margin-right: 2.6%;
}
.cust-image-destination {
  width: 100%;
}
.dest-area-circle {
  position: absolute;
  top: 31%;
  left: 22%;
  width: 55%;
  z-index: 2;
  transition: transform 0.3s ease;
}
.dest-area-circle:hover{
  transform: scale(1.1);
}
.text-destinations {
  font-family: "GT Walsheim Pro Medium";
  font-size: 36px;
  color: white;
}
.area-circle {
  width: 100%;
}
.area-circle:hover{
  animation: rotate 15s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.dest-area-text {
  position: absolute;
  top: 43%;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
