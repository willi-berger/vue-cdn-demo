# vue-cdn-demo
A simple vue.js demo app. This is a CDN based version of the [getting-started-with-vue](https://www.taniarascia.com/getting-started-with-vue/) tutorial.

## Running the app
For running the app in a browser from a local http server I enjoy and recomment docker. To serve a http server for your current directory just run

```
docker run -dit -p 8080:80 ` -v $PWD/.:/usr/local/apache2/htdocs/  httpd:2.4
```

which creates an unnamed apache httpd docker container, that serves te content from your current directory.


