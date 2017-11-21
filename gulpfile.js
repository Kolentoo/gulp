//引入gulp
var gulp = require('gulp');
//引入gulp-uglify模块，用于压缩JS
var uglify = require('gulp-uglify');
//引入gulp-watch-path
var watchPath = require('gulp-watch-path');
//引入gulp-rename
var rename = require('gulp-rename');
//热加载
var connect   = require('gulp-connect')

// js压缩
//'jscompress'为我们自定义的任务名，匿名函数为'jscompress'具体任务
gulp.task('jscompress', function(){
    // 'script/*.js'是即将压缩的js文件
    gulp.src('src/scripts/*.js')
        //uglify()是调用的压缩方法，去压缩js
        .pipe(uglify())
        //给压缩后的文件，添加min后缀名
        // .pipe(rename({suffix: ''}))
        //gulp.dest是将压缩后的文件另存为哪的方法，如存到newScript文件夹中
        .pipe(gulp.dest('dist/scripts'))
        .pipe(connect.reload());     
});

//css压缩
// 获取 cleancss 模块（用于压缩 CSS）
var cleanCSS = require('gulp-clean-css');
// 压缩 css 文件
// 在命令行使用 gulp csscompress 启动此任务
gulp.task('csscompress', function() {
    // 1. 找到文件
gulp.src('src/styles/*.css')
    // 2. 压缩文件
    .pipe(cleanCSS())
    // 3. 另存压缩后的文件
    .pipe(gulp.dest('dist/styles'))
    .pipe(connect.reload());   
});

// 图片压缩
var imageMin = require('gulp-imagemin');
gulp.task('image',function(){
    gulp.src('src/images/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload());   
});


// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('src/scripts/*.js', ['jscompress']);
    gulp.watch('src/styles/*.css', ['csscompress']);
    gulp.watch('src/images/*.*', ['image'])
});

// 创建热加载任务
gulp.task('reload',function(){
    gulp.src('src/*')
        .pipe(connect.reload())
        console.log('html change')
})

// gulp服务器
gulp.task('server',function(){
    connect.server({
        root:'src',
        livereload:true,
        port:84
    })
})

// 默认任务
gulp.task('default',['server','auto']);

// gulp.task('default',['auto']);


