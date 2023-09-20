const Koa = require('koa');
const app = new Koa(); 
const port = 3000;


app.use(async ctx => {
    const url = ctx.originalUrl;

    if( url === '/index'){
        ctx.body='<h1>Welcome to Index Page</h1>'
    }
    else if( url === '/about'){
        ctx.body='<h1>Welcome to About Page</h1>'
    }
    else if( url === '/contact'){
        ctx.body='<h1>Welcome to Contact Page</h1>'
    }
    else{
        ctx.body='<h1>This page is not valid</h1>'
    }
})


app.listen(port);