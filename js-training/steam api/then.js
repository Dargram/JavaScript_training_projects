const api_key = "18477C60601C55744AE8BB3F7139E420"
const steam_id = "76561199278917816"
const url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${api_key}&steamid=${steam_id}&format=json`
function getData(){
    const R = fetch(url)
        .then(R => R.json())
        .then(R => R['response']['games'])
        .then(R =>{
        for (const item of R){
            console.log(`Game name: ${item.name}; time: ${Math.trunc(item.playtime_forever / 60)} hours`)
}})}
getData()