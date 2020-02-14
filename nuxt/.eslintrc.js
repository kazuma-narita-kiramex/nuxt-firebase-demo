module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaFeatures: { legacyDecorators: true }
    },
    extends: [
        '@nuxtjs',
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
    }
}
