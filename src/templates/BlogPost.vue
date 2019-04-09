<template>
	<Layout>
		<g-image :src="$page.blogPost.image" alt="" />
		<h1>{{$page.blogPost.title}}</h1>
		<p>{{$page.blogPost.date}}</p>
		<div v-html="$page.blogPost.content" />
	</Layout>
</template>

<page-query>
 query Post ($path: String!) {
  blogPost (path: $path) {
    title
    content
    tags
		date (format: "DD-MM-YYYY")
		image (height: 300)
  }
}
</page-query>