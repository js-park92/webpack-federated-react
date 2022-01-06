const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("../../webpack.common");
const deps = require("../package.json").dependencies;

const devConfig = {
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      remotes: {
        container: "container@http://localhost:8080/remoteEntry.js",
        dashboard: "dashboard@http://localhost:8081/remoteEntry.js",
        users: "users@http://localhost:8082/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        {
          ...deps,
          "@micro-react/shared-lib": {
            import: "@micro-react/shared-lib",
            requiredVersion: require("../../shared-lib/package.json").version,
          },
        },
      ],
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
