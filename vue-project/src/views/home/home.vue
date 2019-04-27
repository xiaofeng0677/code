<template>
    <div class="content">
        home
        <div>
               999
               {{ count }}
               <p>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
              </p>
              <!-- <img v-lazy="imgUrl.img" alt=""> -->
               
       </div>
       <router-link to="/cart">go cart</router-link>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'sildebar',
        data(){
            return{
                imgUrl:{
                    img:"./static/img/home/drinking_water.png"
                }
            }
        },
        activated(){
        },
        mounted() {
            // this.__requestAdslist() // 轮播图
            console.log(this.$refs)
        },
        methods:{
            __requestAdslist() {
                // console.log(this)
                // return
                // 1.1 得到首页轮播图及专题广告 ***
                this.$http.post('/api/content/adslist', {},
                    async(res) => {
                        console.log(res)
                        if (res.status === 'succ') {
                            
                        } else {
                        }
                    }, (res) => {
                        console.log(res)
                        
                    })
            },
            increment(){
              this.$store.commit('increment')
            },
            decrement(){
              this.$store.commit('decrement')
            }
        },
        computed:{
            count(){
                return this.$store.state.count
            },
        }


    }

</script>