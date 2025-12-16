// 友链检测 CLI 需要使用显式导入和相对路径
import type { FeedGroup } from '../app/types/feed'
import { myFeed } from '../blog.config'
import { getFavicon, getGhAvatar, getGhIcon, getQqAvatar, QqAvatarSize } from './utils/img'

export default [
	// #region Clarity
	{
		name: 'Beta',
		desc: '///。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed,
			{
				author: '/',
				desc: '/',
				link: '/',
				feed: 'https://sc.axel.xin/atom.xml',
				icon: '/',
				avatar: '/',
				archs: ['Nuxt', '国内 CDN'],
				date: '2025-11-04',
				comment: '/',
			},
		],
	},
	// #endregion
	// #region 网上邻居
	{
		name: 'Beta',
		desc: '//////',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '嘻嘻嘻',
				sitenick: '杂记本',
				title: '古怪杂记本',
				desc: '一个什么都可能会写的博客',
				link: '/',
				feed: '/',
				icon: getFavicon('gug.thisis.host'),
				avatar: '/',
				archs: ['Hexo', 'Netlify'],
				date: '2024-01-29',
				comment: '/',
			},
		],
	},
	// #endregion
] satisfies FeedGroup[]
