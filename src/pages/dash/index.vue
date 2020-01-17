<template>
    <section class="home-content-wrap main-wrap">
        <div class="herder">
            <a class="login" href="http://ceping.nnzysp.com/member/index/login.html">即刻登录 CLZ66</a>
        </div>
        <!-- <div class="introduction">
            <h2>
                使用我们的服务您获得六大利益
            </h2>
            <div class="introduction-details">
                <div class="details-item">
                    <img src="../../assets/img/1.png" />
                    <h3>真实测评群体</h3>
                    <p>
                        一群具有正当职业 热爱产品测试 愿意帮助您提升您的产品口碑的人 通常他们会留下真实的文字 照片和视频评论
                    </p>
                </div>
                <div class="details-item">
                    <img src="../../assets/img/2.png" />
                    <h3>真实验证评论</h3>
                    <p>
                        我们确保每一个评论都是验证购买评论 并且整个过程安全合法 完全符合亚马逊政策
                    </p>
                </div>
                <div class="details-item">
                    <img src="../../assets/img/3.png" />
                    <h3>海量测评人员</h3>
                    <p>
                        在美国我们大约有30000+个产品评论员 在欧洲我们有大约有20000个产品评论员，购买完全不重复
                    </p>
                </div>
                <div class="details-item">
                    <img src="../../assets/img/4.png" />
                    <h3>提高产品曝光</h3>
                    <p>
                        测评人员真实搜索购买 获取更多的展现和流量大大的提升产品的曝光量
                    </p>
                </div>
                <div class="details-item">
                    <img src="../../assets/img/5.png" />
                    <h3>快速提升销量</h3>
                    <p>
                        遵循亚马逊的算法规则 您的产品“BestSeller Rank”短时间排名将大幅度上升
                    </p>
                </div>
                <div class="details-item">
                    <img src="../../assets/img/6.png" />
                    <h3>安全隐私保护</h3>
                    <p>
                        整个购买过程购买安全可靠 用户信息绝对保障符合亚马逊政策良好的风险控制！
                    </p>
                </div>
            </div>
        </div>
        <div class="review-solutions">
            <h2>提供最佳评论解决方案快速提升产品销量</h2>
            <div class="review-solutions-message">
                <span>评论</span>
                <sup>+</sup>
                <span>一直致力于研究解决亚马逊真实Review的获取方式，通过评论</span>
                <sup>+</sup>
                <span>亚马逊卖家可以快速/简单/安全的获取真实的VP验证购买评论。</span>
                刷虚假评论的方式已经不可取虚假评论肯定会被亚马逊删除，严重的可以导致封号。我相信卖家肯定不是不愿意使用高风险操作方式，但是除了刷单又没有一个专业的做评论的平台，曾经的AMZ Tracker现在也不能使用了，评论
                <sup>+</sup><span>
                作为一个专业的送测平台，不仅解决了送测</span>的问题，同时也解决了获取VP review的问题，通过评论
                <sup>+</sup><span>
                获取的review均是VP验证购买评论，国外海量真实测评买家，主流亚马逊站</span>点全部开通。快速提升产品评论，增加产品流量和效率。评论
                <sup>+</sup><span>
                100%安全，是合法获取亚马逊产品评论的唯一选择!</span>
            </div>
        </div>
        <div class="review-step">
            <h2>轻松几步获取产品评论</h2>
            <div class="review-step-details">
                <div class="step-item">
                    <img src="data:image/png;base64,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" />
                    <p>发布产品</p>
                </div>
                <div class="step-item">
                    <img src="data:image/png;base64,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" />
                    <p>审核产品</p>
                </div>
                <div class="step-item">
                    <img src="data:image/png;base64,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" />
                    <p>产品付款</p>
                </div>
                <div class="step-item">
                    <img src="data:image/png;base64,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" />
                    <p>购买产品</p>
                </div>
                <div class="step-item">
                    <img src="data:image/png;base64,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" />
                    <p>评论产品</p>
                </div>
                <div class="step-item">
                    <img src="data:image/png;base64,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" />
                    <p>完成评论</p>
                </div>
            </div>
        </div>
        <div class="experience">
            <h2>独一无二的真实评论服务赶快行动吧</h2>
            <div class="experience-message">
                <p>
                    <span>【评论</span>
                    <sup>+</sup>
                    <span>】即刻跨境旗下平台，还包括【推广易】【雪球外贸服务网】等平台</span><br>
                    <span>即刻跨境是国内最早的亚马逊平台服务商，我们提供专业的亚马逊品牌推广运营解决方案，一站式跨境电商服务。</span>
                </p>
                <p>
                    <span>【评论</span>
                    <sup>+</sup>
                    <span>】是一家为亚马逊全球卖家提供优质产品评论的公司，我们提供不同国家的产品评论服务，可以帮助您提高您的产品评论和销量。</span>
                    我们有多年的相关工作经验，深谙亚马逊的政策法规。在早期的工作中，也发现某些卖家的不可告人秘密，利用增加产品评论的方法短时间快速提高产品排名，从而迅速成为大卖家并赚的盆满钵满，这对一些中小卖家是不公平的。为了帮助这些中小卖家合法，合规的获得产品评论，希望藉此帮助更多的卖家。两年来我们帮助世界各地的十万名卖家获得了数百万条高质量的产品评论。我们的目标是在卖家和顾客之间建立更密切的联系，大幅简化卖家在亚马逊上获取产品评论的过程和时间，并帮助卖家在销售上取得更好得优势。
                </p>
            </div>
            <a class="login">
                登陆后台体验吧
            </a>
        </div>
        <div class="preferential">
            <div class="preferential-item">
                <h2>
                    A套餐
                </h2>
                <div class="detail-item">
                    <span>价格</span><br>
                    <span>系统累计下单小于100单=80/单</span>
                </div>
                <div class="detail-item">
                    <span>留评率</span><br>
                    <span>最低80%</span>
                </div>
                <div class="detail-item">
                    <span>验证购买</span><br>
                    <span>100%</span>
                </div>
                <div class="detail-item">
                    <span>留评时间</span><br>
                    <span>15天内</span>
                </div>
                <div class="detail-item">
                    <span>优势</span><br>
                    <span>真正美国素人真实买家，不限测评产品（美国站任何产品都可以快速测评），超高推广和评分权重。</span>
                </div>
                <a class="preferential-login">
                    登陆后台
                </a>
            </div>
            <div class="preferential-item">
                <h2>
                    B套餐
                </h2>
                <div class="detail-item">
                    <span>价格</span><br>
                    <span>系统累计下单小于100单=80/单</span>
                </div>
                <div class="detail-item">
                    <span>留评率</span><br>
                    <span>最低80%</span>
                </div>
                <div class="detail-item">
                    <span>验证购买</span><br>
                    <span>100%</span>
                </div>
                <div class="detail-item">
                    <span>留评时间</span><br>
                    <span>15天内</span>
                </div>
                <div class="detail-item">
                    <span>优势</span><br>
                    <span>真正美国素人真实买家，不限测评产品（美国站任何产品都可以快速测评），超高推广和评分权重。</span>
                </div>
                <a class="preferential-login">
                    登陆后台
                </a>
            </div>
            <div class="preferential-item">
                <h2>
                    C套餐
                </h2>
                <div class="detail-item">
                    <span>价格</span><br>
                    <span>系统累计下单小于100单=80/单</span>
                </div>
                <div class="detail-item">
                    <span>留评率</span><br>
                    <span>最低80%</span>
                </div>
                <div class="detail-item">
                    <span>验证购买</span><br>
                    <span>100%</span>
                </div>
                <div class="detail-item">
                    <span>留评时间</span><br>
                    <span>15天内</span>
                </div>
                <div class="detail-item">
                    <span>优势</span><br>
                    <span>真正美国素人真实买家，不限测评产品（美国站任何产品都可以快速测评），超高推广和评分权重。</span>
                </div>
                <a class="preferential-login">
                    登陆后台
                </a>
            </div>
        </div> -->
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.login{
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: grey;
    color: #fff;
    // -webkit-box-shadow: 29px 16px 90px rgba(34,96,201,.69);
    // box-shadow: 29px 16px 90px rgba(34,96,201,.69);
    padding: 20px 40px;
    min-width: 140px;
    text-align: center;
    border-radius: 50px;
    font-size: 36px;
    sup{
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
}
.herder{
    position: relative;
    min-height: 890px;
    background: url(../../assets/img/bg1.png) top 20px center no-repeat #ED8117;
    background-size: cover;
    background-position: 50%;
}
.introduction{
    padding: 110px 80px;
    h2{
        font-weight: 400;
        font-size: 50px;
        text-align: center;
    }
    .introduction-details{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        .details-item{
            margin-top: 70px;
            position: relative;
            width: 28%;
            margin-left: 20px;
            img{
                width: 90px;
                height: 90px;
                display: inline-block;
                margin: 0 auto;
            }
            h3{
                text-align: center;
                color: #01a7ff;
                font-size: 24px
            }
            p{
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
                font-size: 18px;
                line-height: 30px;
                text-align: center;
            }
        }
    }
}
.review-solutions{
    position: relative;
    min-height: 710px;
    background: url(../../assets/img/solutions-bg.jpg) no-repeat;
    background-size: cover;
    background-position: 50%;
    h2{
        font-size: 50px;
        text-align: center;
        font-weight: 400;
        color: #fff;
    }
    .review-solutions-message{
        position: absolute;
        bottom: 30px;
        font-size: 21px;
        padding: 0 140px;
        color: #fff;
        line-height: 38px;
        text-align: center;
    }
}
.review-step{
    padding: 110px 80px;
    h2{
        font-weight: 400;
        text-align: center;
        font-size: 50px;
    }
    .review-step-details{
        margin: 150px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
        -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
        justify-content: space-evenly;
        .step-item{
            position: relative;
            &:first-child{
                &:before{
                    position: absolute;
                    content: "1";
                    background-color: #01a8ff;
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    font-weight: 700;
                    font-size: 30px;
                    color: #fff;
                    text-align: center;
                    top: -10px;
                    left: -5px;
                }
            }
            &:nth-child(2){
                &:before{
                    position: absolute;
                    content: "2";
                    background-color: #01a8ff;
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    font-weight: 700;
                    font-size: 30px;
                    color: #fff;
                    text-align: center;
                    top: -10px;
                    left: -5px;
                }
            }
            &:nth-child(3){
                &:before{
                    position: absolute;
                    content: "3";
                    background-color: #01a8ff;
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    font-weight: 700;
                    font-size: 30px;
                    color: #fff;
                    text-align: center;
                    top: -10px;
                    left: -5px;
                }
            }
            &:nth-child(4){
                &:before{
                    position: absolute;
                    content: "4";
                    background-color: #01a8ff;
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    font-weight: 700;
                    font-size: 30px;
                    color: #fff;
                    text-align: center;
                    top: -10px;
                    left: -5px;
                }
            }
            &:nth-child(5){
                &:before{
                    position: absolute;
                    content: "5";
                    background-color: #01a8ff;
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    font-weight: 700;
                    font-size: 30px;
                    color: #fff;
                    text-align: center;
                    top: -10px;
                    left: -5px;
                }
            }
            &:nth-child(6){
                &:before{
                    position: absolute;
                    content: "6";
                    background-color: #01a8ff;
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    font-weight: 700;
                    font-size: 30px;
                    color: #fff;
                    text-align: center;
                    top: -10px;
                    left: -5px;
                }
            }
            img{
                margin-left: calc(50% - 40px);
            }
            p{
                margin-top: 10px;
                font-size: 26px;
                color: #01a8ff;
            }
        }   
    }
}
.experience{
    position: relative;
    padding: 90px 160px;
    min-height: 860px;
    background: url(../../assets/img/experience-bg.jpg) no-repeat;
    background-size: cover;
    background-position: 50%;
    h2{
        text-align: center;
        color: #fff;
        font-weight: 400;
        font-size: 50px;
    }
    .experience-message{
        margin: 160px 0 80px 0;
        text-align: left;
        p{
            margin-top: 50px;
            line-height: 38px;
            color: #fff;
            font-size: 20px;
        }
    }
}
.preferential{
    position: relative;
    padding: 75px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    .preferential-item{
        width: 280px;
        background-color: #fff;
        -webkit-box-shadow: 0 10px 1pc #e4e4e4;
        box-shadow: 0 10px 1pc #e4e4e4;
        cursor: pointer;
        -webkit-transition: all .3s linear;
        transition: all .3s linear;
        &:hover{
            transform: scale(1.25,1.2);
            .preferential-login{
                color: #678ac2;
                background-color: #fff;
                border: 1px solid #678ac2;
            }
        }
        h2{
            color: #fff;
            background-color: #02a7fd;
            height: 60px;
            text-align: center;
            line-height: 70px;
        }
        .detail-item{
            margin: 0 50px;
            padding: 10px 0 5px 0;
            text-align: center;
            border-bottom: 1px dotted #aaa;
            :nth-child(2){
                margin-top: 20px;
            }
            span{
                &:first-child{
                    color: #799dcd;
                    font-size: 20px;
                }
                &:nth-child(3){
                    color: #abb1b4;
                    font-size: 9pt;
                }
            }
        }
        .preferential-login{
            margin: 20px auto;
            width: 115px;
            height: 40px;
            line-height: 40px;
            background-color: #02a7fd;
            color: #fff;
            font-size: 9pt;
            display: block;
            text-align: center;
            border: 1px solid #02a7fd;
            -webkit-transition: all .3s linear;
            transition: all .3s linear;
        }
    }
}
</style>