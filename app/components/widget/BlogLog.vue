<script setup lang="ts">
const appConfig = useAppConfig()
const timeEstablished = appConfig.timeEstablished

const blogLog = [
	{ label: '2025-12-17', value: '重构到 Nuxt 4 + Nuxt Content v3，启用加速' },
	{ label: '2024-11-01', value: '使用 axel.xin 域名' },
	{ label: '2024-01-24', value: '更换框架为 Halo，升级博客' },
	{ label: timeEstablished, value: '发布第一篇文章' },
]
</script>

<template>
<BlogWidget card title="更新日志">
	<ZDlGroup size="large" :items="blogLog" />
</BlogWidget>
</template>
