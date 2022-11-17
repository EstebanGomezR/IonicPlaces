import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place:any
  constructor(private activatedRouter : ActivatedRoute,
              private placesService : PlacesService,
              private router : Router) { 
    this.activatedRouter.paramMap.subscribe(paramMap => {
        const recipeId = paramMap.get('idPlace')
        if(recipeId){
          this.place = placesService.getPlace(recipeId)
          console.log(this.place)
        }
    })
  }

  ngOnInit() {
  }

  eliminarPlace(){
    this.placesService.deletePlaces(this.place.id)
    this.router.navigate(['/places'])
  }

}
