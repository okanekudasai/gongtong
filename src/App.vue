<template>
    <div class="main_back flex_center">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    @font-face {
        font-family: 'WandohopeR';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/WandohopeR.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    * {
        font-family: 'WandohopeR';
        margin: 0;
        box-sizing: border-box;
    }
    .button_style_1 {
        background-image: url("@/assets/main_button1.png");
        background-size: cover;
        width: 120px;
        height: 50px;
    }
    .block_center {
        display: block;
        margin: 0 auto;
    }
    .flex_center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .relative {
        position: relative;
    }
    .image_text {
        color: white; position: absolute
    }
    .hover_pointer:hover {
        cursor: pointer;
    }
</style>

<style lang="scss" scoped>
    .main_back {
        background-image: url("@/assets/main_back.png");
        //cover는 다 덮도록 확대축소(1번 만나옴) contain 이미지가 전부 나오도록 확대축소 (2번나올수 있음)
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }
</style>