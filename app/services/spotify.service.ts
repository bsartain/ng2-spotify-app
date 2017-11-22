import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()//Decorater is an injectable to inject as a dependancy

//Creates class called SpotifyService. Needs to be imported into search.component. the HttpModule needs to be imported into
//the app.module.ts and added to the imports under the @ngmodule decorater
export class SpotifyService{

	//Declare a variable called searchUrl and classify as a string
	private searchUrl: string;

	//Create constructor and pass in _http from the Http module to handle the request.
	constructor(private _http:Http){

	}


	//Create a function called searchMusic with two arguments passed into the api endpoint. str & artist. (keyup)="searchMusic()"
	searchMusic(str:string, type="artist"){

		//Passes in the string entered and queries the API
		this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';

		//returns the result of the query and maps them in a json object
		return this._http.get(this.searchUrl)
			.map(res => res.json());

	}
}