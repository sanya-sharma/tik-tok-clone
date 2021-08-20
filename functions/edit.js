const { createClient } = require("@astrajs/collections");

const collection = 'tktkposts'

exports.handler = async function (event, content, callback) {
    
    // create an {astra_db} client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,
    });

    const users = astraClient 
        .namespace (process.env.ASTRA_DB_KEYSPACE)
        .collection(collection)
        const body = JSON.parse(event.body)
        console.log(body)

    try {
        users.update(body.userId, body.data);
        
        return {
            statusCode: 200,
            body: JSON.stringify(Object.keys(res).map((i) => res[i])),
        }
    } catch (e) {
        console.error(e)
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        }
    }
}