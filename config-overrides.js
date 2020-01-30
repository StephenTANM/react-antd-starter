const {
    override,
    fixBabelImports,
    addLessLoader
} = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true // change importing css to less
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            // '@primary-color': 'red', !!CHANGE THEME MAIN COLOR HERE!!
            // '@secondary-color': 'pink' 
        }
    })
)