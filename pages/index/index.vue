<template>
	<view>
		<u-skeleton
			rows="2"
			:title='false'
			:loading='loading'
			:rowsHeight="[48,24,]"
		>
			<my-com></my-com>
			<view>
				<u--text size="36" :text="'计数：' + counter.count"></u--text>
			</view>
		</u-skeleton>
		<u-button type='success' @tap="handleAdd">增加</u-button>
		<u-button type='primary' @tap="login">登录接口测试</u-button>
		<u-album multipleSize='240' :urls="urls" space='2'></u-album>
	</view>
</template>

<script setup>
	import { globalStore } from '@/store/index'
	import { ref } from 'vue'
	import * as api from '@/apis/index.js'
	
	const loading = ref(true)
	const url = ref('https://cdn.uviewui.com/uview/album/1.jpg')
	const urls = ref(Array.from(new Array(100)).map(() => url.value))
	const counter = globalStore()
	
	setTimeout(() => {
		loading.value = false
	}, 1500)
 
	const handleAdd = () => {
		counter.increment()
	}

	const login = () => {
		api.login({
		
		}).then(() => {

		})
	}
</script>

<style lang="scss">
	.u-album {
		width: 750rpx;
		height: 750rpx;
	}
</style>
