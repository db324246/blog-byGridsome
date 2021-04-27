import marked from 'marked'
import highlight from 'highlight.js'

const renderer = {
  heading(text, level) {
    return `
      <h${level} class="essay-heading essay-heading_level-${level}">
        ${text}
      </h${level}>`
  },
  blockquote(quote) {
    return `
      <blockquote class="essay-blockquote">
        ${quote}
      </blockquote>`
  },
  hr() {
    return `<hr class="essay-hr" />`
  },
  list(body, ordered, start) {
    if (ordered) {
      return `
        <ol class="essay-ol" start="${start}">
          ${body}
        </ol>`
    } else {
      return `
        <ul class="essay-ul">
          ${body}
        </ul>`
    }
  },
  table(header, body) {
    return `
      <table cellspacing="0" cellspadding="0" border="1" class="essay-table">
        <thead>
          ${header}
        </thead>
        <tbody>
          ${body}
        </tbody>
      </table>`
  },
  paragraph(text) {
    return `
      <p class="essay-paragraph">
        ${text}
      </p>`
  },
  codespan(code) {
    return `
      <span class="essay-codespan">
        ${code}
      <span>`
  },
  br() {
    return `<br class="essay-br" />`
  },
  link(href, title, text) {
    return `
      <a class="essay-link" href="${href}" title="${title || ''}">
        ${text}
      </a>`
  },
  image(href, title, text) {
    return `
      <div class="essay-image">
        <img src="${href}" title="${title || ''}" alt="${text}">
        </img>
        <div class="essay-image-title">
          ${title || ''}
        </div>
      </div>`
  }
}

marked.use({
  renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
})

export default resource => {
  const html = marked(resource).replace(/<pre>/g, "<pre class='hljs essay-code'>")
  return html
}