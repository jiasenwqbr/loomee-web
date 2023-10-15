<template>
    <div class="footer">
        <div class="footer-w">
            <div class="footer-l">
                <div class="footer-l-u">
                    <img src="@/icons/svg/ft_logo.svg" alt="" class="u-logo">
                    <span class="u-text">Open To Hope For Future&Building Greener Tomorrow</span>
                </div>
                <div class="footer-l-d">
                    <span class="d-imgs">
                        <img src="@/icons/svg/ft_0.svg" alt="" class="d-logo">
                        <img src="@/icons/svg/ft_1.svg" alt="" class="d-logo">
                        <img src="@/icons/svg/ft_2.svg" alt="" class="d-logo">
                    </span>
                    <span class="d-text">GoingSolar@GreenSoul@Civitas Solis@Tomorrow's Party@Loomee</span>
                </div>
            </div>
            <div class="footer-r">
                <div class="links links-l">
                    <div class="link-item" v-for="item in linkList1" :key="item.name">
                        {{item.name}}
                    </div>
                </div>
                <div class="links links-c">
                    <div class="link-item" v-for="item in linkList2" :key="item.name">
                        {{item.name}}
                    </div>
                </div>
                <div class="links links-r">
                    <div class="link-item" v-for="item in linkList3" :key="item.name">
                        {{item.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            linkList1:[],
            linkList2:[],
            linkList3:[]

        }
    },
    mounted(){
       this.linkList1=[
           {
               name:'Home',
               href:''
           },
           {
               name:'Civitas Solis',
               href:''
           },
           {
               name:"Tomorrow's Party",
               href:''
           },
           {
               name:'BluePrint',
               href:''
           },
           {
               name:'Stake',
               href:''
           },
          

       ]
    this.linkList2=[
          
           {
               name:'Loomee Marketplace',
               href:''
           },
           {
               name:'Join Us',
               href:''
           },

           {
               name:'Privacy Policy',
               href:''
           },
           {
               name:'Copyright',
               href:''
           }
       ]
    this.linkList3=[
          
           {
               name:'Community',
               href:''
           },
           {
               name:'Twitter',
               href:''
           },

           {
               name:'Discord',
               href:''
           },
           {
               name:'Podcast',
               href:''
           },
           {
               name:'Help Desk',
               href:''
           },
           {
               name:'Blogshop',
               href:''
           }
       ]
    },
}
</script>
<style scoped lang='scss'>
 @import './index.scss';
</style>