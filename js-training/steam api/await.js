const api_key = "18477C60601C55744AE8BB3F7139E420"
const steam_id = "76561199278917816"
const url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${api_key}&steamid=${steam_id}&format=json`
async function getData() {
    const r = await fetch(url);
    let data = await r.json();
    data = data['response']['games'];
    for (const game of data){
        console.log(game.name);
    }
}
getData()