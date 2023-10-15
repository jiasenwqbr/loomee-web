<template>
   <div class="home">

       <section  class="soon section">
         <div class="content-0">
             <span>COMING SOON...</span>
         </div>
      </section >

      <section  class="section soon_m">
         <span class='content-0'>COMING SOON...</span>
      </section >
   
      <!-- <section  class="logo_b section">
         <img src="@/assets/images/bac_1.png" alt="">
         <div class="content-0">
             <span>welcome to Civitas Solis</span>
             <span>Let's GoingSolar</span>
         </div>
      </section > -->
       <!-- <section  class="section phone">
         <img src="@/assets/images/mobile_bac_1.png" alt="" class="bac_1">
         <div class="content-0">
             <span>welcome to Civitas Solis</span>
             <span>Let's GoingSolar</span>
         </div>
      </section >
      <section class="loom">
        <div class="loom_u">
        <div class="loom-1 wow animate__animated animate__fadeInUp  data-wow-duration='0.7s' data-wow-delay='0.7s'">
            <h1 class="title">How Will The World End?</h1>
            <span class="content-1">
                Take your pick among an array of near-future catastrophes: rising sea levels, financial crisis, mass extinction of species, nuclear proliferation, uncontainable viruses, not to mention more fanciful but alarmingly plausible scenarios like a giant asteroid or superintelligent computers run amok. The prophets of doom are unusually loud in our time, and almost every vision of the future carries with it the stench of despair. The collapse of civilization has become its own narrative cliché.
            </span>
            <span class="content-2">
                But dark predictions have always had a sunny counterpart—the dream of a better world.
                The planet is on the clock, and there’s just no time for fashionable pessimism,GoingSolar stands against a shitty future.
            </span>
        </div>
        <h1 class="loom-2 wow animate__animated animate__fadeInUp  data-wow-duration='0.7s' data-wow-delay='0.7s'">Open To Hope For Future & Building Greener Tomorrow</h1>
        <img class="loom-3" src="@/icons/svg/open_logo.svg" alt="" >
        <div class="loom-4 wow animate__animated animate__fadeInUp  data-wow-duration='0.7s' data-wow-delay='0.7s'">
            <h1 class="title-1">GoingSolar Movement</h1>
            <span class="content-1 text">
                GoingSolar is a practical crypto renaissance movement,a new hope for tomorrow,a web3-born aesthetic&literary genre,a central metaphor of better civilization,a DeSoc(Decentralized Society) of 10000 unique GreenSoul with masterfully crafted lore-living on the Ethereum blockchain.
            </span>
            <span class="content-2 text">
                While Web2 already gave rise to the cybereconomy,the foundations of web2 are 
                fragile.GoingSoalar is on a mission to evolution this by delivering Web3. As value is moving to Web3,the first time in humankind's history,the Internet will determine the shape of our new civilization as it's a decentralized and fair internet where users control their own data, identity and destiny.
            </span>
            <h2  class="title-2">
                This starts now, and this starts from here.
            </h2>
            <span class="content-3 text">
                GoingSolar is growing a gorgeous new world in the cracks of the old one, creating a new currency, a new education, a new forms of work......
            </span>
        </div>
        </div>
      </section>
      <section class="section loom-swiper">
            <vue3-seamless-scroll :list="swipers" class="scroll-swipers" direction='right' :step="0.2">
                <ul class="ul-item">
                <li class="li-item" v-for="(item,index) in swipers" :key="index">
                    <img :src="item" alt="">
                </li>
            </ul>
            </vue3-seamless-scroll>
        <div class="loom-swiper-2 wow animate__animated animate__fadeInUp  data-wow-duration='0.7s' data-wow-delay='0.7s'">
            <div class="title-w">
                <h1 class="title-1">We Are GreenSoul</h1>
                <img src="@/icons/svg/top_logo.svg" alt="">
            </div>
            <h1  class="title-2">We Make the GoingSolar Goooooooooooooooooooooo </h1>
            <span class="content-1 text">
                We are pioneers of GoingSolar movement,designers of tomorrow,gods of the Loomee World and masters of our own universe with aspirations of galactic proportions.We are from the ends of the earth and everywhere in between.We are the same,and yet we are none of us alike.We are crypto combination of beauty, community-minded,sustainability,optimistic radical.We united by GoingSolar,and walk in the dark to serve the light.We are the Solarpunk whisperers,the crypto art citizens, and the chaos magicians of the internet of money,the schilling point for the hopeful.
            </span>
            <h3  class="title-3">We are GreenSoul.</h3>
            <span class="content-2 text">
                Our mission is to make the GoingSolar revolution irresistible.Our credo is to grow the new world in the soil exposed by the widening cracks of the old world,to establish an empowering, open and collaborative space where individuals and communities can access resources independent of their geographic location, education, background or official identity.And that is as literal as it is metaphorical.The way we turn desire into reality is not about waiting for an authority to deliver, but to take it upon ourselves to organize and manifest.We will explore what a sustainable civilization looks like,and how can we get there to be our future self.
            </span>
        </div>
        <div class="loom-swiper-3">
            <vue3-seamless-scroll :list="list" class="scroll" direction='right' :step="0.5">
                <ul class="ul-item">
                <li class="li-item" v-for="(item, index) in list" :key="index">
                    <img :src="item" alt="">
                </li>
            </ul>
            </vue3-seamless-scroll>
            <vue3-seamless-scroll :list="list" class="scroll" direction='left' :step="0.5">
                <ul class="ul-item">
                <li class="li-item" v-for="(item, index) in list" :key="index">
                    <img :src="item" alt="">
                </li>
            </ul>
            </vue3-seamless-scroll>
        </div>
        </section>
        <section class="section">
        <div class="utils">
            <div class="utils_u wow animate__animated animate__fadeInUp  data-wow-duration='0.7s' data-wow-delay='0.7s'">
                <div class="util_t">
                    <h1 class="title">Take The GreenSoul Take The World </h1>
                    <span class="text">
                        Each GreenSoul is the gateway to Loomee World and to stake to mine $loomee - the governance token.When you take a GreenSoul, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to Loomee World whose benefits and offerings will increase over time. Your GreenSoul can serve as your digital identity, and open loomee doors for you.
                    </span>
                    <span class="text">
                    After the launch,we envision creating a brand that integrates the virtual and physical world,an open platform for designers will be our promises to deliver.Together with the community, our ultimate goal is to turn this fine collection of digital art into a carrier of the metaverse and bridge the gap between web3 and the Universe.
                    </span>
                </div>
                
            </div>
            
            <div class="utils_d">
                <div class="utils_i_w" v-for="item in utils" :key="item">
                    <Atropos class="my-atropos"
                    :highlight='isF'
                    :shadow='isF'
                    >
                    <img :src="item" alt="" class="util_i">
                    </Atropos>
                </div>
            </div>
        </div>
        </section>
        <section class="section" >
        <div class="team">
            <div class="utils_u">
                <div class="util_t wow animate__animated animate__fadeInUp  data-wow-duration='0.7s' data-wow-delay='0.7s'">
                    <h1 class="title">GoingSolar With Us</h1>
                    <span class="text">
                        When you buy a Looter, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Looter can serve as your digital identity, and open digital doors for you.
                    </span>
                </div>
                
            </div>

            <div class="team_d">
                <div class="team_i_w" v-for="(header,index) in headerList" :key="index">
                    <Atropos :shadow='isF' class="my-atropos">
                        <img  :src="header" alt="">
                    </Atropos> 
                    <h1 class="title-0">KAIS</h1>
                    <h1 class="title-1">CO-FOUNDER</h1>
                    <span class="text">
                    With tertiary degrees in graphic design, art 
                    history and branding, Kais brings his strategic 
                    experience in building and leading design projects 
                    for many global brands including Unicef, United 
                    Nations, Unilever, Greenpeace, Ford, Dell and 
                    Olympus.
                    </span>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="us">
            <div class="us_u wow animate__animated animate__fadeInUp  data-wow-duration='0.7s' data-wow-delay='0.7s'">
                <h1 class="title">Frequently Asked Questions </h1>
                <span class="text">
                    Our brand is built through community, and together, we are creating one of the world’s leading web three brands. Since day one, our community has been adding building blocks to our identity. It’s how WAGBO was born and how #WeAreOkay spread through Twitter like wildfire. The Okay Bear movement is about to take over, and we want you to bear with us.
                </span>
            </div>
            <div class="us_d">
                    <div class="extend-i" v-for="(item,index) in extendList" :key="item.title" @click="changeExtendList(index)">
                        <p class="content">
                            <span class="con-l">
                                <img class="extend-i-icon-1" src="@/icons/svg/list_i.svg" alt="">
                                <span class="extend-i-title">{{item.title}}</span>
                            </span>
                            <img class="extend-i-icon-2" :src="!item.isExtend?'src/icons/svg/add.svg':'src/icons/svg/reduce.svg'" alt="">
                        </p>
                        <span v-if="item.isExtend" class="extend-i-other">{{item.content}}</span>
                    </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            
        </div>
    </section> -->
    
    <!-- <Footer/> -->

      
   </div>
</template>
<script>
import {watch ,ref,computed,getCurrentInstance,onMounted,defineComponent,reactive} from 'vue'
import { CaretRightOutlined } from '@ant-design/icons-vue';
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import WOW from "wow.js";
import Atropos from 'atropos/vue';
import Footer from '@/components/Footer/index.vue'
import swiper_1 from '@/assets/images/swiper_1.png'
import swiper_2 from '@/assets/images/swiper_2.png'
import swiper_3 from '@/assets/images/swiper_3.png'
import swiper_4 from '@/assets/images/swiper_4.png'
import swiper_5 from '@/assets/images/swiper_5.png'
import swiper_6 from '@/assets/images/swiper_6.png'
import swiper_7 from '@/assets/images/swiper_7.png'
import swiper_8 from '@/assets/images/swiper_8.png'
import loopgs from '@/icons/svg/loopgs.svg'

import util_0 from '@/assets/images/util_i_0.png'
import util_1 from '@/assets/images/util_i_1.png'
import util_2 from '@/assets/images/util_i_2.png'
import util_3 from '@/assets/images/util_i_3.png'
import util_4 from '@/assets/images/util_i_4.png'
import util_6 from '@/assets/images/util_i_6.png'
import util_7 from '@/assets/images/util_i_7.png'
import util_8 from '@/assets/images/util_i_8.png'
import util_5 from '@/assets/images/util_i_5.png'

import h_0 from '@/assets/images/h_0.png'
import h_1 from '@/assets/images/h_1.png'
import h_2 from '@/assets/images/h_2.png'
import h_3 from '@/assets/images/h_3.png'
import h_4 from '@/assets/images/h_4.png'
import h_5 from '@/assets/images/h_5.png'


export default defineComponent({
    setup(){
        const { proxy } = getCurrentInstance()
        const isF =ref(false)
        let imglist=[swiper_1,swiper_4,swiper_2,swiper_5,swiper_6,swiper_7,swiper_3,swiper_8,swiper_1,swiper_3,swiper_2,swiper_4,swiper_6,swiper_7,swiper_5,swiper_8]
        const list=ref(imglist)
        const swipers= ref([loopgs,loopgs,loopgs])
        let utillist =[util_0,util_1,util_2,util_3,util_4,util_6,util_7,util_8,util_5]
        const utils = ref(utillist)
        const header=[h_0,h_1,h_2,h_3,h_4,h_5]
        const headerList= ref(header)
        const extendList= ref([
            {
                isExtend:false,
                title:'What is Invasion NFT?',
                content:'Our brand is built through community, and together, we are creating one of the world’s leading web three brands. Since day one, our community has been adding building blocks to our identity. It’s how WAGBO was born and how #WeAreOkay spread through Twitter like wildfire. The Okay Bear movement is about to take over, and we want you to bear with us.Our brand is built through community, and together, we are creating one of the world’s leading web three brands. Since day one, our community has been adding building blocks to our identity. It’s how WAGBO was born and how #WeAreOkay spread through Twitter like wildfire. '
            },
            {
                isExtend:false,
                title:'When is the launch date?',
                content:'Our brand is built through community, and together, we are creating one of the world’s leading web three brands. Since day one, our community has been adding building blocks to our identity. It’s how WAGBO was born and how #WeAreOkay spread through Twitter like wildfire. The Okay Bear movement is about to take over, and we want you to bear with us.Our brand is built through community, and together, we are creating one of the world’s leading web three brands. Since day one, our community has been adding building blocks to our identity. It’s how WAGBO was born and how #WeAreOkay spread through Twitter like wildfire. '
            },
            {
                isExtend:false,
                title:'How many InvasionNFT can I mint?',
                content:'Our brand is built through community, and together, we are creating one of the world’s leading web three brands. Since day one, our community has been adding building blocks to our identity. It’s how WAGBO was born and how #WeAreOkay spread through Twitter like wildfire. The Okay Bear movement is about to take over, and we want you to bear with us.Our brand is built through community, and together, we are creating one of the world’s leading web three brands. Since day one, our community has been adding building blocks to our identity. It’s how WAGBO was born and how #WeAreOkay spread through Twitter like wildfire. '
            },
            {
                isExtend:false,
                title:'How many InvasionNFT can I mint?',
                content:'Our brand is built through community, and together, we are creating one of the world’s leading web three brands. Since day one, our community has been adding building blocks to our identity. It’s how WAGBO was born and how #WeAreOkay spread through Twitter like wildfire. The Okay Bear movement is about to take over, and we want you to bear with us.Our brand is built through community, and together, we are creating one of the world’s leading web three brands. Since day one, our community has been adding building blocks to our identity. It’s how WAGBO was born and how #WeAreOkay spread through Twitter like wildfire. '
            }
        ])
        const changeExtendList=(index)=>{
          proxy.extendList[index].isExtend=!proxy.extendList[index].isExtend
        }
        const initWoW=()=>{
             var wow = new WOW({
                boxClass: "wow", 
                animateClass: "animated", 
                offset: 0, 
                mobile: true, 
                live: true, 
                callback: function (box) {},
                scrollContainer: null, 
                resetAnimation: true, 
                });
                wow.init();
          
        }
        
        onMounted(()=>{
          initWoW()
        })
        return{
            isF,
            extendList,
            changeExtendList,
            list,
            swipers,
            utils,
            headerList
        }
    },
    components:{
        Atropos,
        Footer,
        CaretRightOutlined,
        Vue3SeamlessScroll
        
    },
  })
</script>

<style scoped lang='scss'>
 @import './index.scss';
 @import '@/assets/scss/img_media.scss';
</style>