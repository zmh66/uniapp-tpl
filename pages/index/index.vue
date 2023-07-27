<template>
	<view>
		<uv-skeleton
			rows="2"
			:title='false'
			:loading='loading'
			:rowsHeight="[48,24,]"
		>
			<view>
				<uv-text type="primary" size="48" :text='title'></uv-text>
			</view>
			<view>
				<uv-text size="36" :text="'计数：' + counter.count"></uv-text>
			</view>
		</uv-skeleton>
		<uv-button type='success' @tap="handleAdd">增加</uv-button>
		<uv-button type='primary' @tap="login">登录接口测试</uv-button>
	</view>
</template>

<script setup>
	import { globalStore } from '@/store/index'
	import { ref } from 'vue'
	import * as api from '@/apis/index.js'
	
	defineProps({
		title: {
			type: String,
			default: '首页'
		},
	});
	
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

</style>
