//resposive in both mobile and laptop

function openDetails(place) {
    const details = {
        'hyderabad': { 
            'desc': 'Famous places: Charminar, Golconda Fort, Ramoji Film City, Hussain Sagar Lake.', 
            'places': [
                { 
                    'name': 'Charminar', 
                    'img': 'https://cdn.pixabay.com/photo/2022/01/09/09/33/charminar-6925617_1280.jpg', 
                    'desc': 'A historical monument and mosque in Hyderabad.', 
                    'maps': 'https://www.google.com/maps?q=Charminar',
                    'peakHours': '5 PM - 9 PM',
                    'avgTraffic': '30-40 mins',
                    'exploreTime': '1-2 hours'
                },
                { 
                    'name': 'Golconda Fort', 
                    'img': 'https://cdn.pixabay.com/photo/2015/06/29/23/02/fortification-826065_1280.jpg', 
                    'desc': 'A historic fort known for its acoustics and architecture.', 
                    'maps': 'https://www.google.com/maps?q=Golconda+Fort',
                    'peakHours': '4 PM - 7 PM',
                    'avgTraffic': '40-50 mins',
                    'exploreTime': '2-3 hours'
                },
                { 
                    'name': 'Ramoji Film City', 
                    'img': 'https://imgs.search.brave.com/EOsUTqp6Ao_imalSAXbytzi3qzHX2U3_2MZWKHRgzPQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhdmVsYW5k/bGVpc3VyZWFzaWEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy8yLzIwMjMv/MDYvMDcyMDI0NTUv/c2liZWVzaC12ZW51/LXVuc3BsYXNoLTEt/MTAyNHg1NzYuanBn', 
                    'desc': 'The world’s largest film studio complex.', 
                    'maps': 'https://www.google.com/maps?q=Ramoji+Film+City',
                    'peakHours': '11 AM - 5 PM',
                    'avgTraffic': '1-1.5 hours',
                    'exploreTime': '6-8 hours'
                },
                { 
                    'name': 'Hussain Sagar Lake', 
                    'img': 'https://imgs.search.brave.com/_XHizR8F7hcyu5_rH7xu_V0bnVnHkUuah8zSKJj1h0g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzY2LzM5LzEw/LzM2MF9GXzQ2NjM5/MTAzNV9jMzM5alFk/NUg3UVc5Y3dyY0Uy/Sm40VWN2N2VmOEto/Ui5qcGc', 
                    'desc': 'A large heart-shaped lake known for the Buddha statue.', 
                    'maps': 'https://www.google.com/maps?q=Hussain+Sagar+Lake',
                    'peakHours': '6 PM - 10 PM',
                    'avgTraffic': '20-30 mins',
                    'exploreTime': '1-2 hours'
                }
            ]
        }
    };

    let newWin = window.open('', '_blank');
    newWin.document.write('<html><head><title>' + place.charAt(0).toUpperCase() + place.slice(1) + '</title>');
    newWin.document.write('<style>');
    newWin.document.write(`
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            background-color: #f4f4f4; 
            margin: 0; 
            padding: 20px; 
        }
        .container { 
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px; 
            max-width: 1100px; 
            margin: auto; 
            padding: 20px; 
        }
        .place-card { 
            background: white; 
            padding: 20px; 
            border-radius: 12px; 
            text-align: center; 
            box-shadow: 0px 5px 10px rgba(0,0,0,0.1); 
            height: auto; 
            width: 280px;
            display: flex; 
            flex-direction: column; 
            justify-content: space-between; 
            align-items: center;
        }
        .place-card img { 
            width: 100%; 
            height: 150px; 
            border-radius: 10px; 
            object-fit: cover; 
        }
        .place-details {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            padding: 10px;
        }
        .map-button { 
            display: block; 
            padding: 12px 15px; 
            background-color: blue; 
            color: white; 
            border: none; 
            border-radius: 6px; 
            cursor: pointer; 
            text-decoration: none; 
            font-size: 14px; 
            margin-top: auto; 
            width: 80%;
        }
        @media (max-width: 768px) {
            .place-card {
                width: 90%;
            }
        }
        @media (max-width: 480px) {
            .place-card {
                width: 100%;
            }
        }
    `);
    newWin.document.write('</style>');
    newWin.document.write('</head><body>');
    
    newWin.document.write('<h1>' + place.charAt(0).toUpperCase() + place.slice(1) + '</h1>');
    newWin.document.write('<p>' + details[place].desc + '</p>');
    
    newWin.document.write('<div class="container">');
    details[place].places.forEach(p => {
        newWin.document.write('<div class="place-card">');
        newWin.document.write('<img src="' + p.img + '" alt="' + p.name + '">');
        newWin.document.write('<div class="place-details">');
        newWin.document.write('<h3>' + p.name + '</h3>');
        newWin.document.write('<p style="font-size:14px;">' + p.desc + '</p>');
        newWin.document.write('<p><strong>Peak Hours:</strong> ' + p.peakHours + '</p>');
        newWin.document.write('<p><strong>Avg Traffic Time:</strong> ' + p.avgTraffic + '</p>');
        newWin.document.write('<p><strong>Time to Explore:</strong> ' + p.exploreTime + '</p>');
        newWin.document.write('</div>');
        newWin.document.write('<a href="' + p.maps + '" target="_blank" class="map-button">Open in Google Maps</a>');
        newWin.document.write('</div>');
    });
    newWin.document.write('</div>');
    
    newWin.document.write('</body></html>');
}
