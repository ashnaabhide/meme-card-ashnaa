export default async function handler(request, res) {

    const roster = [
      {
        "image": "https://animalia-life.com/images2/borzoi/borzoi-9.jpg",
        "name": "borzoi!!",
        "detail": "big noze dog",
        "top": "woof",
        "bottom": "borzoi!"
      },
      {
        "image": "https://animalia-life.com/images2/borzoi/borzoi-9.jpg",
        "name": "borzoi!!",
        "detail": "big noze dog",
        "top": "woof",
        "bottom": "borzoi!"
      }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
  }