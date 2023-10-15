<template>
   <div class="app-warp">
       <header class="header-pc" :style="'background:'+`rgba(21, 211, 164, `+ opacity +`)`">
           <div class="header-l">
              <span class="header-item" >
                <img src="@/icons/svg/logo.svg" alt="" class="logo" @click="routePath('Home')">
              </span>
              <!-- <span class="header-item" :class="[$route.path=='/Home'?'selected':'']" @click="routePath('Home')">Home</span>
              <span class="header-item" :class="[$route.path=='/Marketplace'?'selected':'']" @click="routePath('Marketplace')">Civitas Solis</span>
              <span class="header-item" :class="[$route.path=='/Blueprint'?'selected':'']" @click="routePath('Blueprint')">Blueprint</span>
              <span class="header-item" :class="[$route.path=='/Stake'?'selected':'']" @click="routePath('Stake')">Loomee NFT</span>
              <span class="header-item" :class="[$route.path=='/FAQ'?'selected':'']" @click="routePath('FAQ')">Stake</span> -->
          </div>
          <div class="header-r">
             <span class="out-item" ></span>
             <span class="out-item" ></span>
             <span class="out-item" ></span>
             <span class="out-item" ></span>
          </div>
       </header>

       <div class="header-phone" :style="'background:'+`rgba(21, 211, 164, `+ opacity +`)`">
          <img src="@/icons/svg/mobile_logo.svg" alt="" class="logo" @click="routePath('Home')" ref="iconlogo">
          <img src="@/assets/images/list.png"  alt="" class="list" @click="isDrawer=true">
       </div>

       <a-drawer
            :bodyStyle='drawerStyle'
             placement="left"
            :closable="false"
            :visible="isDrawer"
            @close="isDrawer=!isDrawer"
            width='70%'
            class="mylist"
            >
            <p class="title">
              <img src="@/icons/svg/mobile_logo.svg" alt="" class="logo-phone">
            </p>
            <p class="ment-item" v-for="item in menu" :key="item.name" @click="routePath(item.name);isDrawer=false">
               <img :src="item.icon" alt="" class="item-icon">
               <span class="name-text">{{item.text}}</span>
            </p>
            <div class="links">
                <img src="@/assets/icon/i_f_s.png" alt="">
                <img src="@/assets/icon/i_p_s.png" alt="">
                <img src="@/assets/icon/i_t_s.png" alt="">
                <img src="@/assets/icon/i_m_s.png" alt="">
            </div>
       </a-drawer>
       <router-view/>
   </div>
  
</template>
<script>
import {onMounted,reactive, toRefs,ref,watch,getCurrentInstance,computed } from 'vue'
import { userBaseStore } from '@/store/base.js'
import {  useRouter } from 'vue-router'

import faq from '@/icons/svg/faq.svg'
import nft from '@/icons/svg/nft.svg'
import print from '@/icons/svg/print.svg'
import home from '@/icons/svg/home.svg'
import solis from '@/icons/svg/solis.svg'
const drawerStyle={
  background:'#15D3A4',
  padding:0
}

export default{
   setup(){
      const {proxy } = getCurrentInstance()
      const baseStore = userBaseStore()
      let opacity= ref(0)
      const menu =computed(()=>{
        return baseStore.menu
      })
      let $icons =proxy.$icons
      const router = useRouter()
      let isDrawer=ref(false)
    
      const routePath=((route)=>{
            router.push({name:route})
        })
      onMounted(()=>{
        window.addEventListener('resize',()=>{
          let clientWidth = document.documentElement.clientWidth
          if(clientWidth>=1200){
            proxy.isDrawer=false
          }
        })
         window.document.body.onscroll = () => {
           let scrollTop = document.documentElement.scrollTop
           proxy.opacity=scrollTop/850
       };
        let menu=[
                {
                icon:home,
                name:'Home',
                text:'Home'
                },{
                icon:solis,
                name:'Marketplace',
                text:'Civitas Solis'
                },{
                icon:print,
                name:'Marketplace',
                text:'Blueprint'
                },{
                icon:nft,
                name:'Marketplace',
                text:'Loomee NFT'
                },{
                icon:faq,
                name:'Marketplace',
                text:'Stake'
                }
              ]
        baseStore.setMenu(menu)
     })
     return{
        isDrawer,
        menu,
        $icons,
        drawerStyle,
        routePath,
        opacity
     }
   }
}
</script>
<style lang="scss" scoped>
 @import './base.scss';
</style>
