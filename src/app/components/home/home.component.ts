import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrl: './home.component.scss'
})
export class HomeComponent {

     constructor(private router: Router,
          private viewContent: ViewContainerRef
     ) { }

     destinations = [
          {
               id: 1,
               name: 'Agra',
               image: '../../../assets/images/Agra.jpg',
          },
          {
               id: 2,
               name: 'Chandigarh',
               image: '../../../assets/images/chandigarh.jpg',
          },
          {id: 3,
               name: 'Goa',
               image: '../../../assets/images/goa.jpg',
          },
          {id: 4,
               name: 'Jaipur',
               image: '../../../assets/images/jaipur.jpg',
          },
          {id: 5,
               name: 'Jammu & Kashmir',
               image: '../../../assets/images/j&k.jpg',
          },
          {id: 6,
               name: 'Jodhpur',
               image: '../../../assets/images/jodhpur.jpg',
          },
          {id: 7,
               name: 'Ladhakh',
               image: '../../../assets/images/ladhakh.jpg',
          },
          {id: 8,
               name: 'Mussoorie',
               image: '../../../assets/images/mussoorie.jpg',
          },
          {id: 9,
               name: 'Rishikesh',
               image: '../../../assets/images/rishikesh.jpg',
          },
          {id: 10,
               name: 'Manali',
               image: '../../../assets/images/manali.webp',
          },
          {id: 11,
               name: 'Udaipur',
               image: '../../../assets/images/udaipur.jpg',
          },
          {id: 12,
               name: 'Amritsar',
               image: '../../../assets/images/amritsar.jpg',
          },
     ];

     services = [
          {
               title: 'Worldwide',
               icon: 'fas fa-globe', // Use Font Awesome icons
               description: 'Explore destinations around the globe with our extensive network and expertise.',
          },
          {
               title: 'Adventures',
               icon: 'fas fa-hiking',
               description: 'Embark on thrilling adventures designed to satisfy your wanderlust.',
          },
          {
               title: 'Food & Drinks',
               icon: 'fas fa-utensils',
               description: 'Savor exquisite cuisines and refreshing drinks tailored for every palate.',
          },
          {
               title: 'Affordable Hotels',
               icon: 'fas fa-hotel',
               description: 'Stay in top-rated hotels at prices that won’t break your budget.',
          },
          {
               title: 'Affordable Price',
               icon: 'fas fa-wallet',
               description: 'Enjoy the best travel deals that offer value without compromise.',
          },
          {
               title: '24/7 Services',
               icon: 'fas fa-headset',
               description: 'Our dedicated team is available round-the-clock to assist you at every step.',
          },
     ];

     onSelectDestination(id: number): void {
          this.router.navigate(['/destination', id]);
     }
}

