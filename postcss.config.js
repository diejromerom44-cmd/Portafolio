import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    process.env.NODE_ENV === 'production'
      ? purgecss({
          content: ['./index.html', './src/**/*.js']
        })
      : null
  ]
};
