<template>
	<view>
		<u-skeleton
			rows="2"
			:title='false'
			:loading='loading'
			:rowsHeight="[48,24,]"
		>
			<view>
				<u--text type="primary" size="48" :text='title'></u--text>
			</view>
			<view>
				<u--text size="36" :text="'计数：' + counter.count"></u--text>
			</view>
		</u-skeleton>
		<u-button type='primary' @click="handleAdd">增加</u-button>
		<u-album multipleSize='240' :urls="urls" space='2'></u-album>
	</view>
</template>

<script setup>
	import { globalStore } from '@/store/index'
	import { ref } from 'vue'
	
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
</script>

<style lang="scss">
	.u-album {
		width: 750rpx;
		height: 750rpx;
	}
</style>
