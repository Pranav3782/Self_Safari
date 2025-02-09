function openDetails(place) {
    const details = {
        'hyderabad': { 
            'desc': 'Famous places: Charminar, Golconda Fort, Ramoji Film City, Hussain Sagar Lake.', 
            'places': [
                { 'name': 'Charminar', 'img': 'https://source.unsplash.com/300x200/?charminar', 'desc': 'A historical monument and mosque in Hyderabad.', 'maps': 'https://www.google.com/maps?q=Charminar' },
                { 'name': 'Golconda Fort', 'img': 'https://source.unsplash.com/300x200/?golconda', 'desc': 'A historic fort known for its acoustics and architecture.', 'maps': 'https://www.google.com/maps?q=Golconda+Fort' },
                { 'name': 'Ramoji Film City', 'img': 'https://source.unsplash.com/300x200/?filmcity', 'desc': 'The world’s largest film studio complex.', 'maps': 'https://www.google.com/maps?q=Ramoji+Film+City' },
                { 'name': 'Hussain Sagar Lake', 'img': 'https://source.unsplash.com/300x200/?lake', 'desc': 'A large heart-shaped lake known for the Buddha statue.', 'maps': 'https://www.google.com/maps?q=Hussain+Sagar+Lake' }
            ]
        },
        'bangalore': {
            'desc': 'Famous places: Lalbagh, Bangalore Palace, Cubbon Park, Vidhana Soudha.',
            'places': [
                { 'name': 'Lalbagh', 'img': 'https://source.unsplash.com/300x200/?lalbagh', 'desc': 'A botanical garden known for its glasshouse.', 'maps': 'https://www.google.com/maps?q=Lalbagh' },
                { 'name': 'Bangalore Palace', 'img': 'https://source.unsplash.com/300x200/?bangalore-palace', 'desc': 'A royal palace with Tudor-style architecture.', 'maps': 'https://www.google.com/maps?q=Bangalore+Palace' },
                { 'name': 'Cubbon Park', 'img': 'https://source.unsplash.com/300x200/?cubbon-park', 'desc': 'A green park in the heart of the city.', 'maps': 'https://www.google.com/maps?q=Cubbon+Park' },
                { 'name': 'Vidhana Soudha', 'img': 'https://source.unsplash.com/300x200/?vidhana-soudha', 'desc': 'The seat of the state legislature of Karnataka.', 'maps': 'https://www.google.com/maps?q=Vidhana+Soudha' }
            ]
        },
        'goa': {
            'desc': 'Famous places: Baga Beach, Anjuna Beach, Basilica of Bom Jesus, Dudhsagar Waterfalls.',
            'places': [
                { 'name': 'Baga Beach', 'img': 'https://source.unsplash.com/300x200/?baga-beach', 'desc': 'A popular beach known for water sports.', 'maps': 'https://www.google.com/maps?q=Baga+Beach' },
                { 'name': 'Anjuna Beach', 'img': 'https://source.unsplash.com/300x200/?anjuna-beach', 'desc': 'A vibrant beach famous for its party scene.', 'maps': 'https://www.google.com/maps?q=Anjuna+Beach' },
                { 'name': 'Basilica of Bom Jesus', 'img': 'https://source.unsplash.com/300x200/?bom-jesus', 'desc': 'A UNESCO World Heritage site and an ancient church.', 'maps': 'https://www.google.com/maps?q=Basilica+of+Bom+Jesus' },
                { 'name': 'Dudhsagar Waterfalls', 'img': 'https://source.unsplash.com/300x200/?dudhsagar-waterfalls', 'desc': 'One of the tallest waterfalls in India.', 'maps': 'https://www.google.com/maps?q=Dudhsagar+Waterfalls' }
            ]
        }
    };

    let newWin = window.open('', '_blank');
    newWin.document.write('<html><head><title>' + place.charAt(0).toUpperCase() + place.slice(1) + '</title>');
    newWin.document.write('<style>');
    newWin.document.write('body { font-family: Arial, sans-serif; text-align: center; }');
    newWin.document.write('.container { max-width: 800px; margin: auto; }');
    newWin.document.write('.place-card { background: white; padding: 15px; border-radius: 8px; margin: 10px; text-align: center; box-shadow: 0px 0px 8px rgba(0,0,0,0.1); }');
    newWin.document.write('.place-card img { width: 100%; height: 150px; border-radius: 8px; }');
    newWin.document.write('.map-button { display: inline-block; padding: 8px 12px; margin-top: 8px; background-color: blue; color: white; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; }');
    newWin.document.write('</style>');
    newWin.document.write('</head><body>');
    
    newWin.document.write('<h1>' + place.charAt(0).toUpperCase() + place.slice(1) + '</h1>');
    newWin.document.write('<p>' + details[place].desc + '</p>');
    
    newWin.document.write('<div class="container">');
    details[place].places.forEach(p => {
        newWin.document.write('<div class="place-card">');
        newWin.document.write('<img src="' + p.img + '" alt="' + p.name + '">');
        newWin.document.write('<h3>' + p.name + '</h3>');
        newWin.document.write('<p>' + p.desc + '</p>');
        newWin.document.write('<a href="' + p.maps + '" target="_blank" class="map-button">Open in Google Maps</a>');
        newWin.document.write('</div>');
    });
    newWin.document.write('</div>');
    
    newWin.document.write('</body></html>');
}
