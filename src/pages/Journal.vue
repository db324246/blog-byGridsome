<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          a wise person once said...
        </h1>
      </div>
    </div>

    <g-link 
      :to="'/article/' + article.node.id"
      v-for="article in $page.posts.edges" 
      :key="article.node.id"
      class="journal-post"
    >
      <div class="container journal">
        <h2 class="journal-title">{{ article.node.title }}</h2>
        <p class="journal-excerpt">{{ article.node.subtitle }}</p>
        <p class="journal-date"> -- {{ article.node.published_at | timePaser }}</p>
      </div>
    </g-link>

    <div class="pagenation-box">
      <Pager :info="$page.posts.pageInfo"/>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts:allStrapiPosts( perPage: 10, page: $page ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        subtitle
        published_at
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  name: 'journal-page',
  components: {
    Pager
  },
  filters: {
    timePaser(val) {
      if (!val) return ''
      const time = new Date(val)
      const y = time.getFullYear()
      const m = time.getMonth() + 1
      const d = time.getDate()
      return `${y}年${m}月${d}日`
    }
  }
}
</script>

<style scoped>
.container.journal {
  max-width: 720px;
}
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.journal-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.journal-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: var(--color-base-1);
}
.journal-post:hover > * {
  transform: translateX(4rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.journal-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .journal-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding: 5rem 0;
  }
}
.pagenation-box {
  max-width: 720px;
  margin: 0 auto;
}
</style>
