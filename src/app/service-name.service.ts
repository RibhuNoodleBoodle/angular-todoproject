import { Injectable } from '@angular/core'; 

@Injectable({ 
providedIn: 'root'
}) 
export class ServiceService { 

Sailors = [ 
	{ 
	id: 1, name: 'Wake Up', rating: 630 
	}, 
	{ 
	id: 2, name: 'Brush', rating: 645 
	}, 
	{ 
	id: 3, name: 'Drink Coffee', rating: 700 
	}, 
	{ 
	id: 4, name: 'Go to Shower', rating: 730 
	}, 
	{ 
	id: 5, name: 'Set your Hair', rating: 800 
	}, 
	{ 
	id: 6, name: 'Stretch your Hair', rating: 810 
	}, 
	{ 
	id: 7, name: 'Eat Breakfast', rating: 900 
	}, 
	{ 
	id: 7, name: 'Finish Projects', rating: 945 
	} 
]; 

constructor() { } 
getData() { 
	return 'This is My schedule with timings in hours'; 
} 
} 

