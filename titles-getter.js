const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */
function getMovieTitles(substr) {
    const titles = [];
    let totalPages = 1;
    let currentPage = 1;

    while (currentPage <= totalPages) {
        https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${currentPage}`, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                console.log(currentPage);
                const res = JSON.parse(data);
                totalPages = res.total_pages;
                titles.concat(res.data.map(item => item['Title']));
                currentPage++;
            });
        });
    }

    //     for(let i=1; i <= totalPages; i++){
    //         https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${i}`, (resp) => {
    //             let data = '';
    //             resp.on('data', (chunk) => {
    //                 data += chunk;
    //             });

    //             resp.on('end', () => {
    //                 const res = JSON.parse(data);
    //                 totalPages = res.total_pages;
    //                 titles.concat(res.data.map(item=>item['Title']));
    //             });
    //         });
    //     }

    console.log(titles);
    return titles.sort();
}