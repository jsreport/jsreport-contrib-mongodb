
module.exports = function (reporter, definition) {
    reporter['scripts'].allowedModules.push({
        id : 'mongodb',
        path: require.resolve('mongodb')
    });
};