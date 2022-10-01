import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogapiService {
  //Url for getting random dog photos
  apiUrl = 'https://dog.ceo/api/breeds/image/random/50';

  // //Url for getting list of sub-breeds
  subBreedApi = 'https://dog.ceo/api/breed/terrier/list';

  //Url For getting List of breeds
  breedsApi = 'https://dog.ceo/api/breeds/list/all';

  //URL for getting sub-breed specified
  specificSubBreed = `https://dog.ceo/api/breed/terrier`;

  //URL for getting breed specified
  specificBreed = `https://dog.ceo/api/breed/`;

  constructor(private http: HttpClient) {}

  //This method returns an array of random images
  getRandomDogsImage(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // //This method returns list of sub-Breed
  getsubBreed(): Observable<any> {
    return this.http.get(this.subBreedApi);
  }

  //This method will get all the breed list
  getBreeds(): Observable<any> {
    return this.http.get(this.breedsApi);
  }

  //This method gets the subbreed specified
  getSpecifiedSubBreed(subBreedName: string): Observable<any> {
    return this.http.get(
      `${this.specificSubBreed}/${subBreedName}/images/random/50`
    );
  }

  //This method will get the specified breed
  getSpecifiedBreed(breedName: string): Observable<any> {
    return this.http.get(`${this.specificBreed}${breedName}/images/random/50`);
  }
}
