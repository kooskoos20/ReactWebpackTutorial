let path = require("path")  //path is an inbuilt nodejs plugin for paths
module.exports = {          //exports it as a module(node js common practice)
    entry:"./src/index.js", //entry point for webpack, start transpiling and bundling from here
    output:{                //All output configurations
      path: path.resolve(__dirname,'dist'),//Where to store outputs, std practice to store in dist resolve gives absolute path with arg1 as root whereas join just concatenates
      filename: "bundle.js",                // transpiled file name, available at root
    },    
    devServer:{                     //development mode specification
      // contentBase: './src'          // Serve content from here
    },
    module: {                       
      rules: [              // array fo rules to apply before creating a module
        {
          test: /\.(js|jsx)$/,  // condition if(.js or .jsx)
          exclude: /node_modules/,  // don't test these
          use: {                    // if true use loader
            loader: "babel-loader"  //use babel-loader to transile which then checks the .babelrc file
          }
        }
      ]
    }
};