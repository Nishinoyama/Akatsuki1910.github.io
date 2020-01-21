<template>
  <Title></Title>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Title from './components/Title.vue'
    import $ from './jquery-3.3.1.min.js'

    export default {
        name: 'app',
        components: {
            Title,
            // HelloWorld
        }
    }
    $("body").on('click',()=>{
        //$('.uzu-pole').removeClass('uzu-pole-move');
        $('.uzu-pole').addClass('uzu-pole-clear');
        $('#loader-bg').fadeOut(1000);
        $('#loader').fadeOut(500);
        $('#main-contents').css('display', 'grid');
        $('.passing').addClass('move');
    });
</script>

<style lang='scss'>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body{
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0 0;
    overflow: hidden;
  }
</style>
