<template>
  
<div class="container-fluid">
   
  <div class="row">
                   <!-- sidebar -->
      <div class="col-lg-2 d-none d-lg-block p-0">
         <DashbordMain/>
      </div>
                   <!-- main -->
      <div class="col-lg-10 p-0">
         <BodyMain/>
     
         <TemplatSeting/>
         
       </div>
   </div>
</div>



</template>
<script setup>

import BodyMain from './components/BodyMain.vue';
import DashbordMain from './components/DashbordMain.vue';
import TemplatSeting from './components/TemplatSeting.vue';




</script>