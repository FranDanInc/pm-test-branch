const withImages = require('next-images');

const redirects = {
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/students',
        permanent: true
      }
    ];
  }
};

module.exports = withImages(redirects);
