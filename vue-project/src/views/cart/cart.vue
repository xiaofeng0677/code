<style>
    .content{
        width: 100%;
    }
</style>

<template>
    <div class="content">
        <!-- 头部导航栏 -->
        <headerNavigation title="购物车" left-icon="chevron_left" @left="$router.go(-1)"></headerNavigation>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'sildebar',
        data(){
            return{

            }
        },
        methods:{
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