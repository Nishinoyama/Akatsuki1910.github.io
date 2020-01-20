<template>
  <div class="passing move">
		<div class="passing-box">
			<div class="passing-bar">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style lang="scss">
@keyframes passing-bar {
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

@keyframes passing-txt {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.passing {
    & .passing-box {
        display: block;
        text-align: center;
    }

    & .passing-bar {
        position: relative;
        display: inline-block;
        transform: translate3d(0, 0, 0);

        &::before {
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

    & .passing-txt {
        opacity: 0;
        transform: translate3d(0, 0, 0);
        font-size: 4.0rem;
    }
}

.passing.move {
    & .passing-bar::before {
        animation: passing-bar 1s ease .5s 1 normal forwards;
    }

    & .passing-txt {
        animation: passing-txt 0s ease 1s 1 normal forwards;
    }
}
</style>