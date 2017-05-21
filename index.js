var metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var inPlace = require('metalsmith-in-place');
var handlebars = require('metalsmith-engine-handlebars');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var autoprefixer = require('metalsmith-autoprefixer');
var inlineSource = require('metalsmith-inline-source');
var excerptor = require('metalsmith-excerptor');
var validate = require('metalsmith-validate');
var author = require('metalsmith-author');
var series = require('metalsmith-series');
var tags = require('metalsmith-tags');
var wordcloud = require('metalsmith-wordcloud');
var robots = require('metalsmith-robots');
var sitemap = require('metalsmith-sitemap');
var archive = require('metalsmith-archive');
var lunr = require('metalsmith-lunr');

metalsmith(__dirname)
    .use(collections({
        posts:{
            pattern: "posts/*.md"
        }
    }))
    .use(inPlace({
        engine: handlebars
    }))
    .use(markdown({}))
    .use(permalinks({
        pattern: "posts/:title",
        relative: true
    }))
    .use(autoprefixer({}))
    .use(inlineSource({}))
    .use(excerptor({
        maxLength: 100,
        keepImageTag: false,
        ellipsis: "…"
    }))
    .use(validate({
        pattern: "posts/*",
        metadata: {
            title: {
                exists: true,
                type: "String"
            },
            tag: {
                default: "uncategolized"
            },
            draft: {
                exists: false
            }
        }
    }))
    .use(author({
        collection: "posts",
        authors: {
            wkwkrnht: {
                name: "wkwkrnht",
                url: "http://wkwkrnht.wp.xdomain.jp",
                twitter: "@wkwkrnht"
            }
        }
    }))
    .use(series({
        series: {
            awesome-serie: {
                title: "This is an awesome serie I made !"
            }
        },
        serieNameProperty: "nameoftheserie",
        sortByProperty: "pubdate",
        reverse: true
    }))
    .use(tags({
        handle: "tags",
        path: "tags/:tag.html",
        layout: "template/partials/tags.html",
        sortBy: "date",
        reverse: true,
        skipMetadata: false,
        slug: {
            mode: "rfc3986"
        }
    }))
    .use(wordcloud({
        handle: "tags",
        path: "topics",
        reverse: true
    }))
    .use(robots({
        useragent: "googlebot",
        allow: ["index.html", "posts/*", "tags/*"],
        disallow: ["404.html"],
        sitemap: "https://wkwkrnht-blog.netlify.com/sitemap.xml"
    }))
    .use(sitemap({
        hostname: "https://wkwkrnht-blog.netlify.com"
    }))
    .use(archive({}))
    .use(lunr({}))
    .build(function(err){
        if (err) throw err;
    });