import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueNote from '@/components/VueNote'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	},{
		path:"/a",
		name:'VueNote',
		component:'VueNote'
	}
	]
})
