<template>
  <div style="position: relative; height: 1400px">
    <div
      style="
        display: flex;
        justify-content: center;
        margin-top: 20%;
        margin-bottom: 0.8%;">
      <span class="custom-head-text"> Find Your Travel </span>
      <span
        class="custom-head-text"
        style="color: rgba(97, 180, 124, 1); margin-left: 1%">
        Style
      </span>
    </div>
    <div style="display: flex; justify-content: center; margin-bottom: 2%">
      <span class="custom-text-low"> Hover and choose your activity </span>
    </div>
    <img
      style="position: absolute; left: 0; top: -5%; z-index: -1; width: 100%"
      src="@/assets/for-tours/for-map/MapLarge.svg"
    />
    <div class="map-pointer" style="left: 18.5%; top: 23.65%">
      <img id="imag" height="100%" src="@/assets/for-tours/for-map/ski.png" />
      <a class="pointer-text" style="margin-top: -10px;" href="/travelStyles">Ski</a>
    </div>
    <div class="map-pointer" style="left: 48%; top: 38%">
      <img id="imag" height="100%" src="@/assets/for-tours/for-map/desert.png"/>
      <a class="pointer-text" style="margin-top: -10px;" href="/travelStyles">Desert Trips</a>
    </div>
    <div class="map-pointer" style="left: 30%; top: 45%;">
      <img id="imag" height="100%" src="@/assets/for-tours/for-map/surf.png"/>
      <a class="pointer-text" style="margin-top: -10px;" href="/travelStyles">Ocean Trips</a>
    </div>
    <div class="map-pointer" style="left: 24%; top: 62%;">
      <img id="imag" height="100%" src="@/assets/for-tours/for-map/outdoor.png"/>
      <a class="pointer-text" style="margin-top: -10px;" href="/travelStyles">Outdoor Activities</a>
    </div>
    <div class="map-pointer" style="left: 51%;top: 21%;">
      <img id="imag" height="100%" src="@/assets/for-tours/for-map/family.png"/>
      <a class="pointer-text" style="margin-top: -10px;" href="/travelStyles">Family Trips</a>
    </div>
    <div class="map-pointer" style="left: 73%;top: 32%;">
      <img id="imag" height="100%" src="@/assets/for-tours/for-map/hiking.png"/>
      <a class="pointer-text" style="margin-top: -10px;" href="/travelStyles">Hiking</a>
    </div>
    <div class="map-pointer" style="left: 79%;top: 47%;">
      <img id="imag" height="100%" src="@/assets/for-tours/for-map/honeymoon.png"/>
      <a class="pointer-text" style="margin-top: -10px;" href="/travelStyles">Honeymoons</a>
    </div>
    <div class="map-pointer" style="left: 60%;top: 35%;">
      <img id="imag" height="100%" src="@/assets/for-tours/for-map/sightseeing.png"/>
      <a class="pointer-text" style="margin-top: -10px;" href="/travelStyles">Sightseeing tours</a>
    </div>
    <div style="width: 100%;top: 87%; position: absolute; display: flex; justify-content: center;">
      <b-button class="button-style-find" href="/travelStyles">
        <span >
          Discover Now
        </span>
    </b-button>
    </div>
    
  </div>
</template>

<style >

.custom-head-text {
  font-size: 72px;
  font-family: "GT Walsheim Pro Medium";
  font-weight: 500;
  color: rgba(31, 59, 34, 1);
}
.custom-text-low {
  color: rgba(31, 59, 34, 1);
  font-family: "GT Walsheim Pro Regular";
  font-size: 20px;
}
.map-pointer {
  display: flex;
  flex-direction: column;
  height: 128px;
  position: absolute;
  transition: transform 0.3s ease;
}
.map-pointer:hover {
  transform: scale(2) translateY(-25px);
}
.pointer-text {
  opacity: 0;
  color: rgb(0, 63, 8);
  text-decoration: none;
  transition: opacity 0.3s ease;
  font-size: 14px;
  font-family: "GT Walsheim Pro Regular";

}
.pointer-text:hover{
  opacity: 0;
  color: rgb(19, 155, 62);
  text-decoration: underline;
  transition: opacity 0.3s ease;
  font-size: 14px;
  font-family: "GT Walsheim Pro Regular";

}
.map-pointer:hover .pointer-text {
  opacity: 1;
}
.b-popover {
  background-color: rgba(255, 249, 249, 0);
  border-color: rgba(240, 248, 255, 0);
}
.button-style-find{
  font-family: "GT Walsheim Pro Regular";
  font-size: 32px;
  font-weight: 400;
  border-radius: 2rem;
  width: 16%;
  background-color: rgba(40, 58, 44, 1);
  border-color: rgba(250, 235, 215, 0);
}
.button-style-find:hover{
  font-family: "GT Walsheim Pro Regular";
  font-size: 32px;
  font-weight: 400;
  border-radius: 2rem;
  width: 16%;
  background-color: rgb(177, 184, 134);
  border-color: rgba(250, 235, 215, 0);
}
.button-style-find:not(:disabled):not(.disabled):active,
.show > .button-style-find.toggle {
  background-color: rgb(174, 212, 161);
  border-color: rgba(101, 101, 101, 0);
  color: rgba(40, 58, 44, 1);
}
</style>
