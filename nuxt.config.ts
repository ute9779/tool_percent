// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
        charset: 'utf-16',
        viewport: 'width=500, initial-scale=1',
        title: '計算野郎',
        htmlAttrs:{
          lang: 'ja'
        },
        meta: [
            // <meta name="description" content="My amazing site.">
            {name: '説明', content: 'ゴミ'}
        ]
    }
}
})
