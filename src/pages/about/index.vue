<template>
    <div class="about-message">
        <p>
            &lt;CLZ66&gt;专业的亚马逊测评平台，主打为广大亚马逊卖家提供不同国家（美国，英国，德国，法国，日本等）优质产品测评服务。致力于研究解决亚马逊真实Review的获取方式，通过Facebook,Twitter 等平台投放广告，获取真实的买家，每个买家都严格筛选。&lt;CLZ66&gt;帮助亚马逊卖家短时间内提高合规真实产品评论和销量， 帮助亚马逊用户更好的了解产品的真实性能以及卖家服务。
        </p>
        <img src="../../assets/img/geekey.jpg" />
        <p>
            &lt;CLZ66&gt;亚马逊测评服务流程：卖家通过测评平台提供产品，测评平台帮助卖家快速寻找并联系到亚马逊需求用户，指点用户进行操作购买流程，需求用户得到自己想要的产品后，会根据产品的特性和功能以及自己的使用体验， 对亚马逊卖家以及产品做一个客观真实的解说和介绍。
        </p>
        <p>
            &lt;CLZ66&gt;服务宗旨是在卖家和顾客之间建立更密切的联系，大幅简化卖家在亚马逊上获取产品评论的过程和时间，并帮助卖家在销售上取得更好得优势。
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    }
}
</script>

<style lang="scss">
.about-message{
    margin: 0 auto;
    padding: 30px 0;
    max-width: 850px;
    p{
        line-height: 32px;
        margin: 25px 0;
        font-size: 18px;
        text-align: left;
    }
    img{
        width: 100%;
    }
}
</style>