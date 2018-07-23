const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(withSass({
  generateBuildId: async () => {
    return ''
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/login': { page: '/login' },
      '/post/:id': { page: '/post' },
      '/user': { page: '/user' }
    }
  }
}))