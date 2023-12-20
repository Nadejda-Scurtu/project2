<template>
  <div class="trips-back-area">
    <img
      class="trips-back-image"
      src="@/assets/for-tours/trips/background.png"
    />
    <div class="area-for-text">
      <img
        class="area-for-header"
        src="@/assets/for-tours/trips/header-text.png"
      />
    </div>
    <div class="area-for-images">
      <b-row class="custom-row">
        <b-col class="custom-cols-for-image">
          <img
            class="custom-image"
            src="@/assets/for-tours/trips/Last-Minute.png"
          />
          <div class="area-for-textbtn">
            <span class="custom-text-trips">
              Last minute tours
            </span>
            <span class="custom-area-btn">
            <button class="cust-discover-more">
              Discover More
            </button>
            </span>
          </div>
        </b-col>
        <b-col class="custom-cols-for-image">
          <img
            class="custom-image"
            src="@/assets/for-tours/trips/Upcoming.png"
          />
          <div class="area-for-textbtn">
            <span class="custom-text-trips">
              Upcoming tours
            </span>
            <span class="custom-area-btn">
            <button class="cust-discover-more">
              Discover More
            </button>
          </span>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style scoped>
.trips-back-area {
  color: white;
  height: 900px;
  position: relative;
}
.trips-back-image {
  display: flex;
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 100%;
}
.area-for-text {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 8%;
}
.area-for-header {
  width: 32%;
}
.area-for-images {
  display: flex;
  height: 75%;
  width: 100%;
  top: 26%;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
}
.custom-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 90%;
}
.custom-image {
  width: 100%;
}
.custom-cols-for-image {
  padding-left: 5%;
  padding-right: 5%;
}
.area-for-textbtn{
  display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
}
.custom-text-trips{
  font-family: "GT Walsheim Pro Medium";
  font-size: 36px;
  color:#1F3B22;
  display: flex;
}
.cust-discover-more {
  justify-self: end;
  font-family: "GT Walsheim Pro Regular";
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid var(--dark-blue, #070b07);
  background: #ffffff00;
  color: #070b07;
  padding-left: 15px;
  padding-right: 15px;
}
.cust-discover-more:hover {
  border-radius: 20px;
  border: 1px solid var(--dark-blue, #B1B886);
  background: #B1B886;
  color: #ffffff;
  
}
.cust-discover-more:not(:disabled):not(.disabled):active,
.show > .cust-discover-more.dropdown-toggle {
  background-color: #1F3B22;
  border-color: #63acff00;
  color: rgb(255, 255, 255);
}
.custom-area-btn{
  display: flex;
  height: 35px;
}
</style>
