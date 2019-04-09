<template>
	<Layout>
		<h1>All Posts</h1>
		<LatestPosts />
	</Layout>
</template>

<script>
import LatestPosts from '../components/LatestPosts.vue';
export default {
  components: {
    LatestPosts
  }
}
</script>