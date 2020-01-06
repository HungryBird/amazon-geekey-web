<template>
    <div class="customer-service-wrap" :class="{'animation': fold}">
        <div class="customer-service">
            <h2>
                在线客服
            </h2>
            <ul>
                <li>
                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1485403242&site=qq&menu=yes">
                        <img :src="img" />
                        <span>Lareina</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3337910452&site=qq&menu=yes">
                        <img :src="img" />
                        <span>NANA</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1656421672&site=qq&menu=yes">
                        <img :src="img" />
                        <span>Vicky</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1723138929&site=qq&menu=yes">
                        <img :src="img" />
                        <span>Tina</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=550113065&site=qq&menu=yes">
                        <img :src="img" />
                        <span>售后</span>
                    </a>
                </li>
            </ul>
            <div class="customer-service-cell">
                <h3>
                    热线电话
                </h3>
                <p>
                    13824365090
                </p>
            </div>
        </div>
        <div class="customer-service-animation" @click="toggle">{{ arrow }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fold: false,
            arrow: ' >',
            img: 'data:image/png;base64,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'
        }
    },
    methods: {
        toggle() {
            this.fold = !this.fold;
            this.arrow = this.fold ? ' <' : ' >';
        }
    }
}
</script>

<style lang="scss">
h3{
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin: 0;
}
li{
    list-style: none;
}
a{
    color: #2d8cf0;
    background: 0 0;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    transition: color .2s ease;
}
.animation{
    transform: translateX(170px);
}
.customer-service-wrap{
    z-index: 99;
    width: 170px;
    position: fixed;
    right: 0;
    bottom: 0;
    -webkit-box-shadow: -1px 2px 10px rgba(0,0,0,.25);
    box-shadow: -1px 2px 10px rgba(0,0,0,.25);
    -webkit-transition: all .5s;
    transition: all .5s;
    .customer-service{
        background-color: #fff;
        h2{
            line-height: 50px;
            text-align: center;
            height: 50px;
            font-weight: 400;
            background-color: #fd4a4e;
            color: #fff;
        }
        li{
            line-height: 45px;
            list-style: none;
            height: 45px;
            border-bottom: 1px solid #ccc;
            padding-left: 10px;
            font-size: 15px;
            text-align: left;
            a{
                display: flex;
                align-content: center;
                color: #666;
                img{
                    margin-top: 6px;
                    margin-right: 14px;
                    width: 30px;
                    height: 34px;
                    display: block;
                }
                span{
                    display: inline-block;
                    vertical-align: middle;
                    padding-right: 15px;
                }
            }
        }
        .customer-service-cell{
            padding: 10px;
            text-align: left;
            p{
                color: #fd4a4e;
            }
        }
    }
    .customer-service-animation{
        width: 50px;
        height: 50px;
        font-size: 25px;
        font-weight: 700;
        line-height: 50px;
        position: absolute;
        background-color: #fecd33;
        top: 0;
        left: -50px;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }
}
</style>