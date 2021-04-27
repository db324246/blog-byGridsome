<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header" :style="{
          background: `url(${baseUrl + post.cover.url}) no-repeat`,
          'background-size': '100%'
        }">
          <h1 class="project-title" v-html="post.title" />
          <h3 class="project-subtitle" v-html="post.subtitle"></h3>
          <div class="project-info">

            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span 
                  class="category"
                  v-for="(tag, index) in post.tags" 
                  :key="index"
                  v-text="tag.title"
                />
              </div>
            </div>

            <div class="year-container">
              <span class="label">Date</span>
              <div>
                {{post.published_at | timePaser}}
              </div>
            </div>
          </div>
        </div>

        <div v-html="mdToHtml(post.content)" class="content" />

      </div>

    </div>
  </Layout>
</template>

<script>
import marked from '@/components/marked'

export default {
  name: 'article-page',
  metaInfo () {
    return {
      title: this.post.title,
      meta: [
        {
          name: 'keywords',
          content: this.post.keywords
        },
        {
          name: 'description',
          content: this.post.subtitle
        }
      ]
    }
  },
  data() {
    return {
      post: {
        cover: {}
      }
    }
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
  },
  async mounted() {
    const { id } = this.$route.params
    try {
      const res = await fetch(process.env.GRIDSOME_API_URL + '/posts/' + id)

      this.post = await res.json()
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    mdToHtml(val) {
      if (!val) return ''
      else return marked(val)
    } 
  }
}
</script>

<style scoped>
.container {
  padding: 0;
}
.content {
  padding: 0 6rem;
}
.project-header {
  padding: 20vh 6rem 4rem;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 .5rem 0;
  padding: 0;
}
.project-subtitle {
  margin: 0 0 2rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
