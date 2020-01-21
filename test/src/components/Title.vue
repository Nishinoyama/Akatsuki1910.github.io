<template>
  <span>
  <span id="loader-bg">
    <span id="loading">
      <span class="uzu-wrapper1"><span class="uzu-pole uzu-pole-move"><span class="uzu-elm"></span></span></span>
      <span class="uzu-wrapper2"><span class="uzu-pole uzu-pole-move"><span class="uzu-elm"></span></span></span>
      <span class="uzu-wrapper3"><span class="uzu-pole uzu-pole-move"><span class="uzu-elm"></span></span></span>
      <span class="uzu-wrapper4"><span class="uzu-pole uzu-pole-move"><span class="uzu-elm"></span></span></span>
      <span class="uzu-wrapper5"><span class="uzu-pole uzu-pole-move"><span class="uzu-elm"></span></span></span>
      <span class="uzu-wrapper6"><span class="uzu-pole uzu-pole-move"><span class="uzu-elm"></span></span></span>
    </span>
  </span>
  <div id="main-contents">
  <div id="itemA"></div>
  <div id="itemB"></div>
  <div id="itemC"></div>
  <div id="itemD"></div>
    <div class="title-main">
      <div class="title-content">
        <div class="passing move">
          <div class="passing-box">
            <div class="passing-bar">
              <div class="passing-txt">title</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</span>
</template>

<script>
    export default {
        name: "Title"
    }
</script>

<style scoped lang="scss">
  @mixin ice($deg){
    position: absolute;
    display: block;
    width: 5rem;
    height: 5rem;
    background: lightblue;
    transform:
        rotate($deg)
        translateY(-50%) translateX(-50%)
        skew(
                calc((90deg - 60deg) / 2),
                calc((90deg - 60deg) / 2)
        );
  }
  @mixin wrapper {
    height: 50px;
    position:absolute;
    width: 50px;
    top:calc(50% - 50px);
    left:calc(50% - 25px);
  }

  @for $i from 1 through 6 {
    .uzu-wrapper#{$i} {
      @include wrapper;
      transform: rotate(calc(0deg + (-60deg * (#{$i} - 1))));
    }
  }


  .uzu-pole {
    height: 50px;
    position: absolute;
    transform-origin: calc(100% - 25px) center;
    transition: 2s;
    width: 50px;
  }

  .uzu-pole-move{
    animation: anim 5s infinite linear;
  }

  @keyframes anim{
    100%{transform: rotate(720deg);}
  }

  .uzu-elm {
    @include ice(45deg);
    top:-35px;
    left:-18px;
    border: solid #0000ff;
  }

  $RotationSize:1000px;

  .uzu-pole-clear {
    margin-top: calc(#{$RotationSize} / -2);
    height: $RotationSize;
  }

  #loading{
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: 0;
  }
  #loader-bg {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    z-index: 1;
  }

  #title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-size: 100px;
  }

  #main-contents{
    display: none;
    position: relative;
    width: 100vw;
    height: 100vh;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }

  /* アイテム */
  #itemA {
    grid-row: 1;
    grid-column: 1;
    background: #f88;
  }
  #itemB {
    grid-row: 1;
    grid-column: 2;
    background: #8f8;
  }
  #itemC {
    grid-row: 2;
    grid-column: 1;
    background: #88f;
  }
  #itemD {
    grid-row: 2;
    grid-column: 2;
    background: #888;
  }
  .title-main{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotate(45deg);
    width: 400px;
    height: 400px;
    background: #fff;
    & .title-content{
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform : translate(-50%,-50%) rotate(-45deg);
    }
  }

  @keyframes passing-bar{
    0% {
      left: 0;
      width: 0;
    }
    50% {
      left: 0;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 0;
    }
  }

  @keyframes passing-txt{
    0% { opacity:0; }
    50% { opacity:0; }
    100% { opacity:1; }
  }

  .passing{
    & .passing-box{
      display: block;
      text-align: center;
    }
    & .passing-bar{
      position: relative;
      display: inline-block;
      transform: translate3d(0, 0, 0);
      &::before{
        content: '';
        display: inline-block;
        width: 0;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        background: #000;
      }
    }
    & .passing-txt{
      opacity: 0;
      transform: translate3d(0, 0, 0);
      font-size: 4.0rem;
    }
  }
  .passing.move{
    & .passing-bar::before {
      animation: passing-bar 1s ease .5s 1 normal forwards;
    }
    & .passing-txt {
      animation: passing-txt 0s ease 1s 1 normal forwards;
    }
  }
</style>