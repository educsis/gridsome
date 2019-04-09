<template>
	<div>
		<h1>Layout Two</h1>
		<slot/>
		<LatestPosts />
	</div>
</template>

<script>
import LatestPosts from '../components/LatestPosts.vue';
export default {
  components: {
    LatestPosts
  }
}
</script>