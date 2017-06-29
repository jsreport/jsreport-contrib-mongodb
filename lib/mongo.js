module.exports = function (reporter, definition) {
    if (reporter['scripts'].allowedModules !== '*') {
        reporter['scripts'].allowedModules.push({
            id : 'mongodb',
            path: require.resolve('mongodb')
        });
    }
};