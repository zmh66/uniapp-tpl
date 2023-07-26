<script setup>
    import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
    onLaunch(() => {
        console.log('App Launch!')
    })
    onShow(() => {
        console.log('App Show!')
    })
    onHide(() => {
        console.log('App Hide!')
    })
		console.log('process.env', process.env);
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-plus/index.scss";
</style>