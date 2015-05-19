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


fis.set('modules.postpackager', fis.plugin('loader'));
