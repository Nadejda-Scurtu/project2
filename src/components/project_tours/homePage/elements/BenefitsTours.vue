<template>
  <div class="custom-back">
   <div style="display: flex; position: absolute; width: 75%;">
    <img src="@/assets/for-tours/benefits/Maskgroup.svg" style=" width: 102%;"> 
       <div style="position: absolute; display: flex; top: 23%; left: 11%;"> 
        <img src="@/assets/for-tours/benefits/whytext.svg"></div>
    <div style="position: absolute; top:5%; width: 100%;">
    <b-row style=" width: 85%; margin-left: 38%; top: 20%;">
      <b-col class="custom-cols">
        <div >
          <img src="@/assets/for-tours/benefits/plannedtr.svg">
          <span class="custom-text"
          >The planned journey will provide you with an opportunity to explore the most stunning destinations of the region, including cultural attractions and breathtaking landscapes, ensuring a truly memorable experience from start to finish.
          </span>
        </div>
      </b-col >
        
      <b-col class="custom-cols">
        <div  >
          <img src="@/assets/for-tours/benefits/experienced.svg">
          <span class="custom-text"
          >The guides will assume responsibility for addressing any concerns during the journey, while also delighting in sharing a multitude of captivating stories and legends.
          </span>
        </div>
      </b-col>
    </b-row>
    </div>

    <b-row style="width: 129%; position: absolute; top: 74%; margin-left: 2%;">
      <b-col class="custom-colums">
        <div >
          <img src="@/assets/for-tours/benefits/positiveImpact.svg">
          <span class="custom-text-2"
          >We offer thoughtfully designed sustainable experiences and accommodations that prioritise the well-being of local communities and the environment.
        </span>
        
        </div>
      </b-col>
      <b-col class="custom-colums">
        <div>
          <img src="@/assets/for-tours/benefits/unforgettable.svg">
          <span class="custom-text-2"
          >We encourage a fully collaborative approach in creating your trip, and our team of Travel Researchers is available to assist you at every stage.
        </span>
        </div>
      </b-col >
      <b-col class="custom-colums">
        <div>
          <img src="@/assets/for-tours/benefits/fairness.svg">
          <span class="custom-text-2"
          >A transparent and competitive pricing system that directs more funds to the necessary areas within the destination.
          </span>
        </div>
      </b-col>
    </b-row>
    
    </div>
  </div>
</template>
<script>
</script>

<style >
.custom-back{
background-color:rgba(220, 235, 215, 1);
width: 100%;
height: 1155px;
}
.custom-cols{
  display:flex; 
  left: 9%;
  margin-top: 19%;
  position: relative;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
.custom-colums{
  display:flex; 
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
}

.custom-text{
  font-size: 20px;
  font-family: "GT Walsheim Pro Regular";
  font-weight: 300;
  display: flex;
  position: absolute;
  text-align: left; 
  margin-top: 2%;
  width: 67%;
  color:rgba(31, 59, 34, 1);
}
.custom-text-2{
  font-size: 20px;
  font-family: "GT Walsheim Pro Regular";
  font-weight: 300;
  display: flex;
  position: absolute;
  text-align: left; 
  margin-top: 0.8%;
  width: 19%;
  color:rgba(31, 59, 34, 1);
}

</style>