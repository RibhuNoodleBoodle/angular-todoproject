import { Component } from '@angular/core'; 
import { ServiceService } from './service-name.service'; 
@Component({ 
selector: 'app-root', 
templateUrl: './app.component.html', 
styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
newData; 
message:string=''; 
constructor(private demoService: ServiceService) {} 
ngOnInit(): void { 
	this.newData=this.demoService.Sailors; 
	this.message=this.demoService.getData(); 
} 
} 

