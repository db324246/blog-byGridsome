<template>
  <Layout>
    <div class="container">
      <Hero />
      <!-- <ProjectsGrid /> -->
      <ProjectsGrid :projects="$page.hotPosts.edges" />
    </div>
    <LatestJournals :journals="$page.posts.edges" />
    <!-- <LatestJournals /> -->
  </Layout>
</template>

<page-query>
query {
  posts:allStrapiPosts( perPage: 12, page: 1, skip: 3) {
    edges {
      node {
        id
        title
        cover {
          url
        }
        content
        published_at
      }
    }
  }
  hotPosts:allStrapiPosts(perPage: 3, page: 1) {
    edges {
      node {
        id
        title
        cover {
          url
        }
        tags {
          id
          title
        }
        content
        published_at
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"
export default {
  name: 'home-page',
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  },
  computed: {
    // projects() {

    // }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
