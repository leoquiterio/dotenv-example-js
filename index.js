if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
    console.log('Now is ' + process.env.NODE_ENV);
} else {
    console.log('NodeENV is developer.');
}