const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withVideos = require('next-videos');

const nextJsConfig = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/creative-agency': { page: '/creative-agency' },
            '/it-agency': { page: '/it-agency' },
            '/marketing-agency': { page: '/marketing-agency' },
            '/portfolio-agency': { page: '/portfolio-agency' },
            '/studio-agency': { page: '/studio-agency' },
            '/business-agency': { page: '/business-agency' },
            '/startup-agency': { page: '/startup-agency' },
            '/default-home-2': { page: '/default-home-2' },
            '/creative-agency-2': { page: '/creative-agency-2' },
            '/it-agency-2': { page: '/it-agency-2' },
            '/marketing-agency-2': { page: '/marketing-agency-2' },
            '/portfolio-agency-2': { page: '/portfolio-agency-2' },
            '/studio-agency-2': { page: '/studio-agency-2' },
            '/business-agency-2': { page: '/business-agency-2' },
            '/startup-agency-2': { page: '/startup-agency-2' },
            '/services': { page: '/services' },
            '/service-details': { page: '/service-details' },
            '/about': { page: '/about' },
            '/portfolio': { page: '/portfolio' },
            '/portfolio-details': { page: '/portfolio-details' },
            '/team': { page: '/team' },
            '/pricing': { page: '/pricing' },
            '/faq': { page: '/faq' },
            '/error': { page: '/error' },
            '/blog': { page: '/blog' },
            '/blog2': { page: '/blog2' },
            '/blog3': { page: '/blog3' },
            '/blog-details': { page: '/blog-details' },
            '/contact': { page: '/contact' }
        }
    }
}

module.exports = withPlugins([
    [optimizedImages, {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico', 'mp4'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    }],
    [withCSS],[withFonts],[withSass],[withVideos], nextJsConfig
]);