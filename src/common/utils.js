// import moment from 'moment';
export const convertToSlug = (string) => {
    // Convert all to lowercase
    let slug = string.toLowerCase();

    // Remove accents
    slug = slug.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    slug = slug.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    slug = slug.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    slug = slug.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    slug = slug.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    slug = slug.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    slug = slug.replace(/(đ)/g, 'd');

    // Remove special characters
    slug = slug.replace(/([^0-9a-z-\s])/g, '');

    // Remove spaces and replace them with -
    slug = slug.replace(/(\s+)/g, '-');

    // Remove characters - consecutive
    slug = slug.replace(/-+/g, '-');

    // Remove remainder - at the beginning
    slug = slug.replace(/^-+/g, '');

    // Remove residual - at the end
    slug = slug.replace(/-+$/g, '');

    // Return
    return slug;
};

export const formatCurrency = (price, locales = 'vi-VN', currency = 'VND') => {
    return new Intl.NumberFormat(locales, {
        style: 'currency',
        currency,
    })
        .format(price)
        .replace(/(\s+)/g, '');
};

// export const formatDate = (date, inputFormat = 'YYYY-MM-DD', outputFormat = 'MMM DD, YYYY') => {
//     return moment(date, inputFormat).format(outputFormat);
// };

export const buildQueryString = (condition) => {
    // ?_page=1&_limit=10
    let query = '';
    if (Object.keys(condition).length) {
        query += '?';
    }
    Object.entries(condition).forEach((element, index) => {
        query += `_${element[0]}=${element[1]}`;
        if (index !== Object.entries(condition).length - 1) {
            query += '&';
        }
    });
    return query;
};
