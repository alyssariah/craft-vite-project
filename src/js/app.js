import '../css/app.scss';

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept((e) => {
        console.log("HMR")
    });
}

const title = document.getElementById('title');
title.style.color = 'teal';
