// 按需编译，只编译 html 文件。
fis.set('project.files', '*.html');

fis.set('settings.plugin.module', {
    baseUrl: 'src',
    packages: [{
        name: 'when',
        location: '../dep/when',
        main: 'when'
    }],
    paths: {
        'jquery': '../dep/jquery-1.11.3.js'
    }
});

// default settings. fis3 release
fis
    .media('dev')

    .match('**', {
        useHash: false
    });


// fis3 release production
fis
    .media('production')

    .match('*.js', {
        optimizer: fis.plugin('uglify-js')
    })

    .match('*.{css,scss}', {
        optimizer: fis.plugin('clean-css')
    })

    .match('*.png', {
        optimizer: fis.plugin('png-compressor')
    })

    .match('/src/*.js', {
        packTo: '/pkg/src.js'
    })

    .match('/dep/**/*.js', {
        packTo: '/pkg/dep.js'
    });


fis.set('modules.postpackager', fis.plugin('loader'));
