<template>
    <div class="content">
        <div class="hearder">
            <mu-appbar style="width: 100%;" color="primary">
            <mu-button icon slot="left" @click="open = !open">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
            爱读

            <mu-button flat slot="right">
                <mu-icon value="search"></mu-icon>
            </mu-button>
            </mu-appbar>

            <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
            
            </mu-drawer>

        </div>

        home
        <div>
            999
            {{ count }}
            <p>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
            </p>
            <!-- <img v-lazy="imgUrl.img" alt=""> -->
            <!-- <input type="text" ref="b" placeholder="1234" value="2345"> -->
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
                },
                docked: false,
                open: false,
                position: 'left',
                userinfo: {}
            }
        },
        activated(){
        },
        mounted() {
            // this.__requestAdslist() // 轮播图
            // console.log(this.$refs.b.value)
        },
        methods:{
            loading () {
                const loading = this.$loading({
                    // ...options
                });
                setTimeout(() => {
                    loading.close();
                }, 3000)
            },
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