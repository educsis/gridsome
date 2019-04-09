<template>
	<section>
		<hr>
		<h3>Latest Posts</h3>
		<article v-for="edge in $static.allBlogPost.edges" :key="edge.node.id">
			<h4>{{edge.node.title}}</h4>
			<p>{{edge.node.date}}</p>
			<div v-html="edge.node.content" />
			<g-link :to="`/posts/${edge.node.slug}`">Read more</g-link>
			<hr>
		</article>
	</section>
</template>

<static-query>
	query LatestPosts {
		allBlogPost{
			edges{
				node{
					id
					content
					title,
					tags,
					date (format: "DD-MM-YYYY"),
					excerpt,
					slug
				}
			}
		}
	}
</static-query>