<template>
    <footer class="footer">
        <div class="container">
            <span v-html="siteConfig.footer" />
        </div>
    </footer>
</template>

<static-query>
query {
  allStrapiSiteConfig {
    edges {
      node {
        site_name
        site_description
        hero_title
        hero_subtitle
        dark_mode
        logo {
          url
        }
        footer
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'footer-com',
  computed: {
    siteConfig() {
      return this.$static.allStrapiSiteConfig.edges[0].node
    }
  }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>
