<template>
    <section>
    <div class="wrpper">
 <div class="shape shape-1"></div>
 <div class="shape shape-2"></div>
 <form @submit.prevent="handleLogin" class="form">
     <h2 class="form-title">Login Here</h2>
     <div class="form-1">
         <label class="form-label" for="username">user name </label>
         <input v-model="email" class="form-input" type="text"  id="username" placeholder="Email or phon  ">
     </div>
     <div>
         <label class="form-label" for="password">password</label>
         <input v-model="password" class="form-input" type="password"  id="password" placeholder="Password">
     </div>
     <button class="button" type="submit">Log In</button>
     
     <p style=" margin-top: 20px;">
          Don't have an accunt?
          <router-link to="/signUp" style="color: red;">sign up</router-link>
      
     </p>
 </form>
</div>
</section>

</template>


<script  setup>
import{ref} from 'vue'
import { useUserStore } from '../assets/stores/useerStore'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';
const email=ref('')
const password=ref('')
const useStore=useUserStore()
const router=useRouter()
function handleLogin(){
 const users=JSON.parse(localStorage.getItem("users")) || [] 
 const foundUser=users.find(
     user => user.email==email.value && user.password==password.value
 )
 
 if(!foundUser){
       Swal.fire({
           icon: "error",
            title: "کاربر وجود ندارد",
            text: "invaalid credential",
           });
   
     return
    
  
 }
     localStorage.setItem("currentUser",JSON.stringify(foundUser))
     useStore.setUser(foundUser)
     router.push("/")
 

}
</script >





<style scoped>
*{
   box-sizing: border-box;
   margin: 0;
   text-align: left;
}

section{
    background-color:#080710;
   
    font-family: poppins;
   
   display: flex;  
   align-items: center;
   justify-content: center;
   height:100vh;
   margin: 0; 
  
    
}



 input , button{
    border: none;
    outline: none;
    font-family: inherit;


 }
.wrpper{
    width: 330px;
    position: relative;
    
}

 .shape{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    position: absolute;
    z-index:0;  
    
}
.shape-1{
    background:linear-gradient( #0D47A1,#42A5F5);
    top: -85px;
    left: -100px;
}
.shape-2{
    background:linear-gradient( #e76a0c,#FF6F00);
    bottom: -73px;
    right: -100px;
 }  

 .form{
    background-color:rgba(250, 250, 250, 0.13);
    width: 100%;
    height: 100%;
    color: #fff;
    padding:50px 35px 35px 35px;
    border: 2px solid rgba(250, 250, 250, 0.13);
    border-radius: 10px;
    box-shadow: -5px 11px 17px 8px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
 }
 .form-title{
    font-size: 35px;
    text-align: center;
    margin-bottom: 30px;
 }
 .form-1{
    margin-bottom: 26px;

 }
 .form-label{
    font-size: 16px;
    font-weight: 600px;
 }
 .form-input{
    font-size: 14px;
    font-weight: 300;
    display: block;
    height: 50px;
    background-color: rgba(250, 250, 250, 0.07);
    padding: 0px 10px;
    width: 100%;
    margin-top: 8px;
    color: #fff;
    border-radius: 7px;
 }
 .form-input::placeholder{  
    color: #e5e5e5;
 }
 .button{
    background-color: #fff;
    color:#080710 ;
    border-radius: 7px;
    text-align: center;
    padding-inline: 15px 0px;
    display: block;
    font-size: 18px;
    width: 100%;
    margin-top: 46px;
    font-weight: bold;
 }
</style>








