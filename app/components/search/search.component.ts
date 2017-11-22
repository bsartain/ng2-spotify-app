import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';//Import in the spotify.service dependency
import { Artist } from '../../../Artist';
 
@Component({
  moduleId:module.id,	
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  { 
	//Declare searchStr as a string and searchRes as Artist array. Artist will be called from Artist.ts. Album will be called from inside
	//Artist.ts
	searchStr:string;
	searchRes: Artist[];

	//Create the constructor and pass in the SpotifyService
 	constructor(private spotifyService:SpotifyService){

 	}

 	//Access the spotifyService and Call the searchMusic function from the service and pass in the searchStr. An observable is created and we must subscribe to it 
 	//The search result will access the Items in the object so we can template them out in search.component.html. 
	searchMusic(){
		this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
			this.searchRes = res.artists.items;
		});
	}


}
