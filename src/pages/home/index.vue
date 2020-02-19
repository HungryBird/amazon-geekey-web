<template>
    <div class="content">
        <nav>
            <div class="nav-logo">
                <a href="/" class="router-link-exact-active router-link-active">
                    <img src="../../assets/img/logo.png" class="logo" />
                </a>
            </div>
            <div class="nav-menu ivu-menu ivu-menu-light ivu-menu-horizontal">
                <a @click.prevent="go(nav, index)" class="nav-item ivu-menu-item ivu-menu-item-selected" :class="{'ivu-menu-item-active': activeIndex === index}" v-for="(nav, index) in navs" :key="nav.label" :href="nav.value">{{ nav.label }}</a>
            </div>
            <div class="nav-login">
                <button type="button" class="nav-button ivu-btn ivu-btn-default ivu-btn-circle">
                    <span><a style="color:#fff;" href="http://www.clz66.com/member/index/login.html">登录</a></span>
                </button>
                <button type="button" class="nav-button ivu-btn ivu-btn-default ivu-btn-circle">
                    <span><a style="color:#fff;" href="http://www.clz66.com/member/index/register.html">注册</a></span>
                </button>
            </div>
        </nav>
        <router-view></router-view>
        <h-server></h-server>
        <!-- <h-footer></h-footer> -->
    </div>    
</template>

<script>
// import hFooter from './footer'
import hServer from './server'
export default {
    components: {
        // hFooter,
        hServer,
    },
    data() {
        return {
            activeIndex: 0,
            navs: [
                {
                    label: '首页',
                    value: '/',
                },
                {
                    label: '关于我们',
                    value: '/about',
                },
                // {
                //     label: '客户案例',
                //     value: '/case',
                // },
                {
                    label: '常见问题',
                    value: '/problem',
                },
                {
                    label: '联系我们',
                    value: '/contact',
                },
            ],
        }
    },
    methods: {
        go(nav, index) {
            this.activeIndex = index;
            this.$router.push(nav.value);
        }
    }
}
</script>

<style lang="scss" scoped>

.content{
    margin-top: 90px;
    nav{
        background-color: #ED8117;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99999;
        min-height: 90px;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        min-width: 1250px;
        .nav-logo{
            a{
                color: #2d8cf0;
                background: 0 0;
                text-decoration: none;
                outline: 0;
                cursor: pointer;
                transition: color .2s ease;
                height: 90px;
                padding: 10px;
                display: inline-block;
                box-sizing: border-box;
                .logo{
                    display: block;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
        .nav-menu{
            height: 100%;
            background-color: transparent;
            .nav-item{
                color: #fff;
                font-size: 28px;
                line-height: 30px;
                margin: 0 20px;
                padding: 0;
                // border-bottom: none;
                &:hover{
                    border-bottom: 2px solid #fff;
                }
            }
            
            .nav-item.ivu-menu-item-active{
                border-bottom: 2px solid #fff;
            }
        }
        .ivu-menu-horizontal.ivu-menu-light{
            &:after{
                background: none !important;
            }
        }
        .nav-login{
            margin-right: 15px;
            .nav-button{
                background-color: transparent;
                width: 120px;
                font-size: 28px;
                line-height: 48px;
                height: 48px;
                color: #fff;
                margin: 0 5px;
                border: 2px solid #fff;
                &:hover{
                    color: #e8431f;
                    border: 2px solid #e8431f;
                }
            }
        }
    }
}
</style>