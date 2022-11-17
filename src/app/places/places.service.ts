import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places = [
    {
      id:'1',
      title:'Monserrate',
      imagenUrl:'https://upload.wikimedia.org/wikipedia/commons/7/7d/Monserrate_Sanctuary.JPG',
      comments:['Muy alta esa montaña', 'Muy rico el tamal']
    },
    {
      id:'2',
      title:'Desierto de la tatacoa',
      imagenUrl:'https://www.otbcali.com/wp-content/uploads/2019/10/huila3.png',
      comments:['Mucho calor', 'Muy bonito']
    }
  ]

  constructor() { }

  getPlaces(){
    return [...this.places];
  }
  getPlace(placeId: String){
    return {
      ...this.places.find(place =>{
        return place.id === placeId
      } )
    }
  }
  deletePlaces(placeId: String){
    this.places = this.places.filter(place=>{
      return place.id !== placeId
    })
  }
}
