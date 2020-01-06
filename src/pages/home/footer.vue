<template>
    <footer class="footer-wrap">
        <div class="contact">
            <h3>即刻跨境</h3>
            <ul>
                <li>
                    <Icon type="ios-mail" size="24" />
                    <span>
                        商务合作: 
                        <a href="mailto:550113065@qq.com">550113065@qq.com</a>
                    </span>
                </li>
                <li>
                    <Icon type="ios-call" size="24" />
                    <span>
                        联系电话: 
                        <a href="javascript:;">13824365090</a>
                    </span>
                </li>
                <li>
                    <Icon type="ios-chatbubbles" size="24" />
                    <span>
                        微信公众号: 
                        <a href="javascript:;">即刻跨境</a>
                    </span>
                </li>
            </ul>
        </div>
        <div class="details">
            <div>
                <h3>产品</h3>
                <ul>
                    <li>
                        <span>
                            <a href="javascript:;">评论+</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="javascript:;">GeekData</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="javascript:;">GeekBrowser</a>
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <h3>运营工具</h3>
                <ul>
                    <li>
                        <span>
                            <a href="javascript:;">推广服务</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="javascript:;">数据服务</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="javascript:;">软件服务</a>
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <h3>资源中心</h3>
                <ul>
                    <li>
                        <span>
                            <a href="javascript:;">帮助</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="javascript:;">用户协议</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="javascript:;">隐私协议</a>
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <h3>公司</h3>
                <ul>
                    <li>
                        <span>
                            <a href="/about">关于我们</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="record">
            <span class="img-list">
                <img src="../../assets/img/aws-logo.png" />
            </span>
            <span class="img-list">
                <img src="../../assets/img/review-logo.png" />
            </span>
            <div class="company">
                <p>即刻跨境 评论+</p>
                <p>版权所有© 2014-2018 粤ICP备17058969号-1</p>
            </div>
        </div>
    </footer>    
</template>

<style lang="scss">
    .footer-wrap{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background-color: #303740;
        padding: 70px 0 40px 30px;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        text-align: left;
        a{
            color: #9a9a9a;
        }
        h3{
            color: #fff;
            font-weight: 400;
        }
        ul{
            li{
                list-style: none;
                color: rgb(154, 154, 154);
                margin: 10px 0px;
            }
        }
        .contact{
            position: relative;
            span{
                margin-left: 5px;
            }
        }
        .details{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            padding: 0 70px;
            -ms-flex-pack: distribute;
            justify-content: space-around;
        }
        .record{
            position: relative;
            span{
                font-size: 15px;
                color: #9a9a9a;
            }
            .img-list{
                padding: 0 10px;
                display: inline-block;
                vertical-align: middle;
                &:first-child{
                    border-right: 1px solid #9a9a9a;
                }
                img{
                    width: 200px;
                }
            }
            .company{
                margin-top: 42px;
                p{
                    color: #696969;
                    &:first-child{
                        font-size: 18px;
                        color: #9a9a9a;
                    }
                }
            }
        }
    }
</style>