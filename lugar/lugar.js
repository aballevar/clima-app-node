const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encoderUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encoderUrl }`,
        headers: { 'X-RapidAPI-Key': 'aa44a43cbfmsh10cfd7ae195c1f0p1fd6aejsn4e89586d3e22' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}