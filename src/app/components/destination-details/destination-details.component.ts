import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
     selector: 'app-destination-details',
     templateUrl: './destination-details.component.html',
     styleUrl: './destination-details.component.scss'
})
export class DestinationDetailsComponent {

     destinationId: number | null = null;
     destinationDetails: any;

     destinations = [
          {
               id: 1,
               name: 'Agra',
               image: '../../../assets/images/Agra.jpg',
               description: 'Home to the iconic Taj Mahal and other Mughal marvels.',
               attractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'],
               details:
                    "Agra is one of the most popular tourist destinations of the World with three UNESCO World Heritage monuments - Taj Mahal, Fatehpur Sikri & Red Fort. Taj Mahal is one of the most admired Mughal masterpieces in the world and is also counted among the seven wonders of the modern world. It attracts around four million visitors annually. Apart from the Taj Mahal, Agra Fort, Fatehpur Sikri, Akbar's Tomb, Sikandra, Swami Bagh Samadhi, Jama Masjid and Ram Bagh are the other important Places to visit in Agra. The city has its unique style of traditional paintings, folk dances, folk music, and embroideries. Agra is famous for leather goods, beautiful carpets, gold and silver jewellery, and handicrafts, such as zari zardozi, marble and stone carving, and inlay work." + '\n' + '\n' + "The city houses many ancient temples, mosques, forts, mausoleums, tombs, and historical monuments. If you are planning to explore this historical city and make your holiday memorable, then book your Agra Packages with Trawell.in. We offer end-to-end services like luxurious and comfortable accommodation, transportation, and customized sightseeing tours at affordable rates."
          },
          {
               id: 2,
               name: 'Chandigarh',
               image: '../../../assets/images/chandigarh.jpg',
               description: 'The City Beautiful, known for its planned architecture.',
               attractions: ['Rock Garden', 'Rose Garden', 'Sukhna Lake'],
               details:
                    "Chandigarh, the first well-planned city in India, is the dream city of India's first Prime Minister, which serves as the capital of the Indian states of Haryana & Punjab. It is the main hub from where tourists travel to the Shimla and Kullu-Manali region. Popularly known as The City Beautiful, Chandigarh is famous for its picturesque landscape, beautiful gardens, urban design and architecture. Typically, full day is required to explore Chandigarh as part of Shimla Tour Packages. Capital Complex, Rock Garden, Sukhna Lake, Rose Garden, Government Museum and Art gallery, International Dolls Museum, Japanese Garden, Butterfly Park, and Cactus Garden are the top Places to visit in Chandigarh."
          },
          {
               id: 3,
               name: 'Goa',
               image: '../../../assets/images/goa.jpg',
               description: 'A tropical paradise with beaches, nightlife, and heritage.',
               attractions: ['Baga Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls'],
               details:
                    "Renowned for its beaches, places of worship, and world heritage architecture, Goa is one of the most popular tourist destinations of India and is visited by large numbers of international as well as domestic tourists each year. Stunning beaches, picturesque landscapes, exhilarating activities, leisurely accommodations, peppy culture, dazzling nightlife, and lip-smacking cuisine, made Goa a perfect destination for all types of vacations be it a honeymoon, a solo trip, or a family vacation." + '\n' + '\n' + "A slice of Portugal on the west coast of India, Goa is the most sought-after destination when it comes to relaxing by the beach during the day or partying throughout the night. Colva Beach, Baga Beach, Calangute Beach, Anjuna Beach, Vagator Beach, Dudhsagar Falls, Se Cathedral, Bom Jesus Basilica, Aguada Fort, Chapora Fort, and Sri Mangueshi Temple are the popular places to visit in Goa."
          },
          {
               id: 4,
               name: 'Jaipur',
               image: '../../../assets/images/jaipur.jpg',
               description: 'The Pink City with royal palaces and cultural heritage.',
               attractions: ['Amber Fort', 'Hawa Mahal', 'City Palace'],
               details:
                    "Fondly called Pink City, Jaipur, the capital city of Rajasthan, is one of the popular tourist attractions in India and is among the best Places to visit near Delhi. Jaipur attracts numerous visitors from all over the world due to its rich heritage and culture. Along with Delhi and Agra, Jaipur forms the Golden Triangle Tour of India tourism." + '\n' + '\n' + "Inarguably an alluring treasure trove, Jaipur best reflects the opulent Rajputana architecture, traditions, and history of the state. Also, Jaipur is one of the best luxury vacation destinations in India with an array of boutique and heritage hotels. It is equally, a travel place for backpackers, who can enjoy many activities on their shoestring budget. Amber Fort, Sheesh Mahal, Ganesh Pol, Hawa Mahal, Jal Mahal, Nahargarh Fort, City Palace, etc. are the important Places to visit in Jaipur. Jaipur is also famous for its beautiful jewellery, fabrics, shoes, and spacious gardens."
          },
          {
               id: 5,
               name: 'Jammu & Kashmir',
               image: '../../../assets/images/j&k.jpg',
               description: 'Paradise on Earth, with valleys and spiritual sites.',
               attractions: ['Dal Lake', 'Gulmarg', 'Vaishno Devi'],
               details:
                    'Jammu & Kashmir, the "Paradise on Earth," is known for its picturesque valleys, snow-capped mountains, and spiritual sites like Vaishno Devi. Key attractions include Dal Lake, famous for its shikaras, and Gulmarg, a popular skiing destination.',
          },
          {
               id: 6,
               name: 'Jodhpur',
               image: '../../../assets/images/jodhpur.jpg',
               description: 'The Blue City with forts, palaces, and rich culture.',
               attractions: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada'],
               details:
                    "Also known as the 'Blue City', Jodhpur, the second-largest city in Rajasthan is popularly known as the Blue City. The name is befitting as most of the architecture – forts, palaces, temples, havelis, and even houses are built in vivid shades of blue. It is one of the top heritage places in India and also one of the best places to experience Rajasthan Tourism." + '\n' + '\n' + "Also known as the 'Sun City', the scenic landscape of Jodhpur is featuring many palaces, forts, and temples, set in the stark landscape of the Thar Desert. Jodhpur is divided into an old city and a new city. The old city circles the Mehrangarh Fort and is bounded by a wall with several gates. The new city is located outside the structure. The strapping forts that tower this magnificent city sum up to a spectacle you would not want to miss. This fort is one of the largest forts in India and is still run by the Jodhpur Royal family. It has many palaces enclosed within its boundaries. It displays the second largest cannon in Asia. Besides Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada, and Ghanta Ghar. Mehrangarh Fort is one of the popular places to visit in Jodhpur. Jodhpur is also known for the rare breed of horses known as Marwari or Malani, which are only found here."
          },
          {
               id: 7,
               name: 'Ladakh',
               image: '../../../assets/images/ladhakh.jpg',
               description: 'A high-altitude desert with stunning landscapes.',
               attractions: ['Pangong Lake', 'Nubra Valley', 'Magnetic Hill'],
               details:
                    "Ladakh, a high-altitude desert, is known for its stark landscapes and Buddhist monasteries. Pangong Lake’s clear blue waters, Nubra Valley’s sand dunes, and the mysterious Magnetic Hill are major attractions." + '\n' + '\n' + " Ladakh is one of the highest regions of the world. Its natural features consist mainly of high plains, deep valleys, rivers, lakes, and a series of mountain passes such as Umling La, through which runs the world's highest drivable road. The high plain predominates in the east, diminishing gradually toward the west.",
          },
          {
               id: 8,
               name: 'Mussoorie',
               image: '../../../assets/images/mussoorie.jpg',
               description: 'The Queen of Hills, offering serenity and charm.',
               attractions: ['Kempty Falls', 'Gun Hill', 'Mall Road'],
               details:
                    "Mussoorie is a popular hill station in Uttarakhand and also one of the best hill stations in India. Mussoorie is one of the well known tourist destination not to miss in your honeymoon trip. This is one of the most popular hill stations in Uttarakhand and also one of the best tourist places near Delhi." + '\n' + '\n' + "Situated atop a horseshoe crest on the mountains of Garhwal, Mussoorie offers commanding views of the underlying Doon Valley and the magnificent Himalayas. Kempty Falls, Camel’s Back Rock, Mall Road, Cloud’s End, Bhatta Falls & Lal Tibba are some of the best Places to visit in Mussoorie. Mussoorie also offers adventure and shopping opportunities. Mussoorie is called the gateway to the Yamunotri and Gangotri."
          },
          {
               id: 9,
               name: 'Rishikesh',
               image: '../../../assets/images/rishikesh.jpg',
               description: 'The Yoga Capital with adventure and spirituality.',
               attractions: ['Laxman Jhula', 'Triveni Ghat', 'River Rafting'],
               details:
                    "Along the banks of the holy River Ganges, Rishikesh is one of the top places of Pilgrimage in India and among the best tourist places in Uttarakhand. Renowned as the adventure capital of India, Rishikesh is the gateway to the upper Garhwal region and is the starting point for the Char Dham Yatra. Rishikesh has several famous ashrams and temples. Typically, 2 days is required to explore best Rishikesh Packages. TriveniGhat, ParmarthNiketan, Neel Kanth Mahadev Templeand KailashNiketan Temple are the important Places to visit in Rishikesh. Rishikesh is now world famous as a Yoga Capital of the World and is also popular among adventure tourists as it offers several activities like mountain biking, bungee jumping and white water rafting."
          },
          {
               id: 10,
               name: 'Manali',
               image: '../../../assets/images/manali.webp',
               description: 'A Himalayan resort town for adventure and serenity.',
               attractions: ['Solang Valley', 'Hadimba Temple', 'Rohtang Pass'],
               details:
                    "Fondly called as 'Valley of the Gods’, Manali, the mesmerizing hill stations of Himachal Pradesh is one of the best summer destinations in India. Manali is famous as a Honeymoon destination among Indian tourists, and also one of the popular 2 days trips from Delhi. Manali is also famous for adventure sports like skiing, hiking, mountaineering, Paragliding, rafting, kayaking, and mountain biking. Paragliding in Manali is an unforgettable experience."
          },
          {
               id: 11,
               name: 'Udaipur',
               image: '../../../assets/images/udaipur.jpg',
               description: 'The City of Lakes, with romantic charm and heritage.',
               attractions: ['City Palace', 'Lake Pichola', 'Saheliyon Ki Bari'],
               details:
                    "Often called the City of Lakes, Udaipur is among the top Tourist Places in Rajasthan and also one of the most popular heritage sites in India. Its picturesque landscape, glittering lakes, historic palaces, and magnificent temples, makes Udaipur is a major destination for most tourists, both domestic and foreign tourists. It is one of the top attractions you must include in honeymoon tour packages." + '\n' + '\n' + "Located at the base of the Aravali mountain range, Udaipur is a very popular tourist destination in India and also one of the most sought-after cities for destination weddings. The historic capital of the former kingdom of Mewar is also referred to as the 'Venice of the East'. City Palace and its museum, the Lake Palace, Monsoon Palace, and Bagore Ki Haveli, Jagdish Temple, Lake Pichola, Fateh Sagar Lake, Jagdish Temple, Saheliyon Ki Bari are some important Places to visit in Udaipur. Kumbhalgarh Fort, Chittorgarh Fort, Nathdwara, Sas-Bahu Temple, Ahar, and Ranakpur are the nearest attractions that can be visited along with Udaipur as part of Rajasthan Tour Packages."
          },
          {
               id: 12,
               name: 'Amritsar',
               image: '../../../assets/images/amritsar.jpg',
               description: 'The spiritual city with history and patriotism.',
               attractions: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border'],
               details:
                    "Situated in Punjab, Amritsar is an ancient pilgrimage town and is the most popular sikh shrine in Punjab. Well-known for its famous Golden Temple, it is one of the top places of pilgrimage in India that attracts huge number of tourists throughout the year. Also known as Harmandir Sahib, the Golden Temple is famous for its full golden dome and among the prime tourist attraction in Amritsar. Typically, 1-2 days is required to explore best Amritsar Tour Packages. Besides, Jallianwallah Bagh, Durgiana Temple, Gobindgarh Fort, Central Sikh Museum, Maharaja Ranjith Singh Museum, and Wagah Border are the other popular places to visit in Amritsar."
          },
          {
               id: 13,
               name: 'Jaisalmer',
               image: '../../../assets/images/jaisalmer1.jpg',
               description: 'Often called the "Golden City of India," is located in the heart of the Thar Desert.',
               attractions: ['Jaisalmer Fort (Sonar Quila)', 'Patwon Ki Haveli', 'Sam Sand Dunes'],
               details:
               "Situated in the heart of Thar Desert, Jaisalmer is one of the most visited Tourist Places in Rajasthan. Jaisalmer is popularly called the 'Golden City of India' because of the yellow sand and the yellow sandstone used in the architecture of the city which provides a golden glow to the city." + '\n' + '\n' + "Jaisalmer is also quite famous for royal forts, havelis, palaces, museums, and temples. Jaisalmer Fort or Sonar Quila is the most famous tourist attraction of Jaisalmer and is a World Heritage Site. Nathmaljiki Haveli, Salim Singh ki Haveli, Patwonki Haveli, Gadisagar Lake, Khuri Sand Dunes, Sam Sand Dunes, and Kuldhara are some of the popular tourist Places to visit in Jaisalmer. Jaisalmer attracts a lot of tourists for its desert camel safari. Climb on to the camel saddle and make your way through this desert or camp under the night sky in this golden land for an unforgettable experience. The Jaisalmer Desert Festival is an event organized by the Rajasthan Tourism Development Corporation each February. It is celebrated in the Thar Desert and the locals dress up in traditional and colorful attires."
          },
          {
               id: 14,
               name: 'Ranthambore',
               image: '../../../assets/images/Ranthambore.jpg',
               description: 'The largest and most renowned national parks in Northern India.',
               attractions: ['Ranthambore Fort', 'Jungle Safari', 'Trinetra Ganesh Temple'],
               details:
               "Ranthambore National Park in Rajasthan is one of the largest and most renowned national parks in Northern India. Once the hunting ground of the Maharajas of Jaipur, the park is majorly famous for its tigers and is one of the best locations in India to watch the majestic predators in its natural habitat. Typically, full day is required to explore best Ranthambore National Park Packages. Apart from the wildlife, visitors can also visit Ranthambore Fort, Jogini Mahal, Trinetra Ganesh Temple, Rajiv Gandhi Regional Museum of Natural History, andKachida Valley. The main attraction of the Park is Jungle Safari in an open top gypsy."
          },
          {
               id: 15,
               name: 'Nainital',
               image: '../../../assets/images/Nainital.jpg',
               description: 'A picture-postcard perfect hill-station and one of the most popular in Northern India.',
               attractions: ['Naina Peak', 'Nainital Lake', 'Tiffin Top'],
               details:
               "Situated at the foothills of Kumaon Himalayas, Nainital is one of the top hill stations in India and among the most popular Places to visit near Delhi. Commonly known as the Lake District of India, Nainital is famous for its scenic mountain views and salubrious weather. Nainital is surrounded by mountains on three sides and the town is spread around the beautiful Naini lake." + '\n' + '\n' + "The picturesque charm of this pristine hill station attracts a large number of tourists every year to spend unforgettable vacations amidst the tranquil and scenic ambiance. Nainital Lake, Naina Devi Temple, Mall Road, Naina Peak, Snow View Point, KainchiDham, Raj Bhavan, High Altitude Zoo, Bhimtal, and Sattal are some of the top Places to visit in Nainital."
          },
          {
               id: 16,
               name: 'Thailand',
               image: '../../../assets/images/thailand.jpg',
               description: 'Thailand is home to Buddhist temples, exotic wildlife and spectacular islands.',
               attractions: ['Bankok', 'Phuket', 'Pattaya'],
               details:
               "Thailand, officially the Kingdom of Thailand, is a gorgeous country located at the center of the Indochina peninsula in Southeast Asia. With nearly 40 million foreigners flying to the country each year, Thailand is one of the top destinations in the world and among the best beach destinations in Asia. From high lime stone cliffs to structures sitting on extinct volcanoes and from the white sand beaches to beautiful wildlife reserves, Thailand's attractions are diverse and each provides a rewarding and memorable experience in its own way."
          },
     ];

     constructor(private route: ActivatedRoute,
          private router: Router
     ) { }
     goToHome(): void {
          this.router.navigate(['/home']);
     }

     ngOnInit(): void {
          this.route.paramMap.subscribe((params) => {
               this.destinationId = Number(params.get('id'));
               this.destinationDetails = this.destinations.find(
                    (d) => d.id === this.destinationId
               );
          });
     }
}
