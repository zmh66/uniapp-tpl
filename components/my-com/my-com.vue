<template>
	<view>
		<view>
				<u--text type="primary" size="48" :text='"title:" + title'></u--text>
			</view> 
	</view>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			default: '首页'
		},
	});
</script>

<style>

</style>