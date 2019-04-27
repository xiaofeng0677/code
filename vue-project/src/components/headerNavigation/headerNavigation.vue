<style>
    #headerNavigationFullScreen {
        position: fixed;
        top: 0;
        z-index: 9999;
        max-width: 640px;
        width: 100%;
        height: 60px;
        background-color: #F84F5B;
        color: rgb(255, 255, 255);
        /* -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647); */
        /* background-color: red; */
    }
    .headerNavigation_content {
    }

    .headerNavigation_li_content {
        max-width: 640px;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content:center;
        align-items: center;
        text-align: center;
    }

    .headerNavigation_li_public_content {
        flex: 1;
        /* background-color: #ccc; */
    }
    .headerNavigation_li_public_content img {
        vertical-align: middle;
    }
    .headerNavigation_li_public_content div {
    }
</style>
<template>
    <div id="headerNavigationFullScreen">
      <div class="headerNavigation_content">
        <div class="headerNavigation_li_content">
            <div class="headerNavigation_li_public_content" style="width: 60px; text-align: left; padding-left: 15px;">
                <img :src="imagesUrl.leftIcon" v-if="leftIcon" @click="$emit('left')" style="height: 16px; width: 10px;">
            </div>
            <div class="headerNavigation_li_public_content">
                <div>{{title}}</div>
            </div>
            <div class="headerNavigation_li_public_content" style="width: 60px; text-align: right; padding-right: 15px;">
                <img :src="imagesUrl.rightIcon" v-if="rightIcon" @click="$emit('right')" style="height: 16px; width: 16px;">
            </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'headerNavigation',
        props: {
            title: {
                type: String,
                default: '导航栏'
            },
            leftIcon: {
                type: String,
                default: ''
            },
            rightIcon: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                imagesUrl: { // 排版图片使用懒加载
                    leftIcon: './static/img/public/navigation/left.png', // 左箭头
                    rightIcon: './static/img/public/navigation/right.png' // 右箭头
                }
            }
        },
        created() {
        },
        methods: {
        }
    }
</script>
