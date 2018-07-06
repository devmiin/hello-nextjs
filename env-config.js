const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.endpoint': isProduction
    ? 'https://api.tvmaze.com'
    : 'https://api.tvmaze.com',
};

// https://www.tvmaze.com/api