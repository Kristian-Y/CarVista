<template>
    <nav>
        <img :src="logo" alt="logo">
        <a href="" v-if="!isLogin">Test</a>
        <div class="isLoginBtns" v-if="isLogin">
            <a href="" class="bars"><i class="fa fa-bars" aria-hidden="true"></i></a>
            <a href=""><img :src="noProfile" alt=""></a>
        </div>
    </nav>
</template>

<script>
    import logoImg from '@/assets/imgs/CarVistaLogo.png'; // '@' is an alias to /src in Vue CLI\
    import noProfile from '@/assets/components/noProfile.png';
    //import { EventBus } from '@/event-bus.js';

    export default {
        props: ['isLogin'],
        data() {
            return {
                logo: logoImg,
                noProfile: noProfile,
            }
        },
        methods: {
        }
    }
</script>
 
<style scoped>
nav {
    background-color: black;
    height: 4vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
}
    
img {
    height: 2vh;
}

.bars {
    color: white;
}

</style> 