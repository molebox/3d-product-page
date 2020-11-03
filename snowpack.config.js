module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-babel',
    'snowpack-plugin-mdx',
    '@snowpack/plugin-react-refresh', 
    '@snowpack/plugin-dotenv'
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
