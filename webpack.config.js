module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname, // current dir in node
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
        Main: 'app/components/Main.jsx',
        Nav: 'app/components/Nav.jsx',
        Weather: 'app/components/Weather.jsx',
        WeatherMessage: 'app/components/WeatherMessage.jsx',
        WeatherForm: 'app/components/WeatherForm',
        About: 'app/components/About.jsx',
        Examples: 'app/components/Examples.jsx',
        openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader', // convert jsx to es5 code
        query: {
          presets: ['react', 'es2015', 'stage-0'] // what to load
        },
        test: /\.jsx?$/, // which files to get
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
