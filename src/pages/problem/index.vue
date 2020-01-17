<template>
<div class="problem-wrap main-wrap">
    <Collapse simple>
        <Panel name="1">&lt;CLZ66&gt;提供的产品评论服务符合亚马逊的政策规定吗?安全吗?
            <div slot="content">
                <div class="reply">
                    <p>绝对安全和真实，CLZ66 平台通过在Facebook,Instagram,Twitter等社交平台，投放广告，受众人群都是根据您的产品而设定，买家是真的对产品感兴趣，愿意付产品税或者运费购买您的产品，CLZ66的亚马逊测评服务不是刷单并且完全区别于亚马逊非法刷单服务，我们的服务是符合亚马逊的政策规定，真实的测评人/真实信用卡付款/真实购买FBA的产品/然后客观的测评你的产品，所以是安全和合法的。</p>
                </div>
            </div>
        </Panel>
        <panel name="2">只能购买FBA吗?需要真正发货给评论人吗?
            <div slot="content">
                <div class="reply">
                    <p>CLZ66 测评平台只做真实靠谱的测评服务，所以只能购买FBA产品，需要真实发货给评论人使用。</p>
                </div>
            </div>
        </panel>
        <panel name="3">如果我多次使用你们的测评,每次的产品评论员都是同一批人吗?
            <div slot="content">
                <div class="reply">
                    <p>我们平台有严格的筛选系统，做到一个买家不会在同个店铺，或者同个产品进行重复购买。</p>
                </div>
            </div>
        </panel>
        <panel name="4">你们会查看买家的AMAZON 的profile 吗？你们是怎么筛选的呢？
            <div slot="content">
                <div class="reply">
                    <p>是的。CLZ66 每放出一个订单给买家之前，都严格筛选买家的Profile, 如果发现买家在一个月内留评率过高，或者差评太多，或者买家账号太新，我们是不会同意买家购买的。保证买家账号的权重。</p>
                </div>
            </div>
        </panel>
        <panel name="5">怎么确定你们是通过真人购买的呢？
            <div slot="content">
                <div class="reply">
                    <p>我们可以100%提供跟买家沟通的聊天截图，返回订单号截图，产品到货截图。我们还可以提供广告投放效果截图，确保我们是通过投放广告获取到的客户。</p>
                </div>
            </div>
        </panel>
        <panel name="6">CLZ66 提供的都是VP评论吗?
            <div slot="content">
                <div class="reply">
                    <p>是的，我们的测评人员一定是真实原价的购买您的产品，所以测评评论都是显示Verified Purchase验证购买评论.</p>
                </div>
            </div>
        </panel>
    </Collapse>
</div>    
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<style lang="scss">
a{
    color: #2d8cf0;
    background: 0 0;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    transition: color .2s ease;
}
.problem-wrap{
    padding: 30px 0;
    margin: 0 auto;
    max-width: 1200px;
    text-align: left;
    .ivu-collapse{
        .ivu-collapse-item{
            .ivu-collapse-header{
                font-size: 18px;
                color: #666;
            }
        }
    }
    .ivu-collapse {
        border: 0;
        .ivu-collapse-item {
            border-top: 0;
        }
    }
    .reply{
        ul,p,ol{
            list-style: none;
            margin: 10px 0;
            padding: 0 45px;
            text-indent: 32px;
        }
        h4{
            margin: 5px 0;
            padding: 0 45px;
            font-size: 18px;
        }
        h5{
            margin: 5px 0;
            padding: 0 45px;
        }
    }
}
</style>