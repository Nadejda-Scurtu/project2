<template>
  <div class="to-shop">
    <div class="to-shop-container">
      <div class="to-shop-bg">
        <img class="to-shop-img" src="@/assets/for-tours/return-to-shop/mountains.png" />
      </div>
      <div class="to-shop-content">
        <h3 class="to-shop-head-above">
          Visit our website, where you can get all you need for a trip
        </h3>
        <h1 class="to-shop-head">
          Prepare to your trip right now!
        </h1>
        
        <div>
         <span class="to-shop-info"
          >Explore the beauty of the world with </span>
          <span class="to-shop-info-add"> TRAVERSE </span></div>
        <b-button class="to-shop-btn" href="/shop">Go to shop</b-button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.to-shop {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
}
.to-shop-container {
  max-width: 1000px;
  width: 100%;
  height: 300px;
  background-color: rgba(31, 59, 34, 1);
  border-radius: 1.5rem;
  position: absolute;
  top: -150px;
  display: flex;
  justify-content: center;
}
.to-shop-bg {
  align-self: end;
  width: 100%;
}
.to-shop-img {
  height: 100%;
  width: 100%;
}
.to-shop-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.to-shop-head {
  font-family: "GT Walsheim Pro Black";
  font-size: 40px;
  padding-bottom: 1%;
}
.to-shop-head-above{
  font-family: "GT Walsheim Pro Medium";
  font-size: 20px;
  margin-top: 7%;
  font-weight: 800;
  padding-bottom: 2%;
  
}
.to-shop-info {
  font-family: "GT Walsheim Pro Regular";
  font-weight: 700px;
  font-size: 20px;
  padding-bottom: 3%;
}
.to-shop-info-add{
  font-family: "GT Walsheim Pro Regular Oblique";
  font-weight: 700px;
  font-size: 20px;
  padding-bottom: 2%;
}
.to-shop-btn {
  display: flex;
  justify-content: center;
  
  margin-top: 28px;
  border-radius: 13px;
  width: 28%;
  background-color: rgb(174, 212, 161);
  border-color: rgba(101, 101, 101, 0);
  color: rgb(29, 29, 29);
  font-family: "GT Walsheim Pro Black";
  font-weight: 700px;
  font-size: 20px;
  color: rgb(29, 29, 29);
  
}
.to-shop-btn:hover {
  background-color: rgba(134, 205, 226, 0.792);
  border-color: #696e7300;
  color: rgba(38, 38, 39, 0.925);
}
.to-shop-btn:not(:disabled):not(.disabled):active,
.show > .to-shop-btn.toggle {
  background-color: #83c8f0;
  color: rgb(240, 245, 255);
  border-color:rgba(240, 248, 255, 0)
}

</style>
