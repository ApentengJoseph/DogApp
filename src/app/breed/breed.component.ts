import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DogapiService } from '../dogapi.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss'],
})
export class BreedComponent implements OnInit,OnDestroy {
  breed!: [] | any;
  private sub!: Subscription;
  name!: any;
  constructor(
    private route: ActivatedRoute,
    private dogApiService: DogapiService
  ) {}


  ngOnInit(): void {
    //This code activatedRoute params and pass it to the method to query the api to get that specific name of the breed passed.
    //And when the data is retrieved it get assigned to this.breed property for use on the template.
    this.route.params.subscribe((params: Params) => {
      if (params['name']) {
        this.sub = this.dogApiService
          .getSpecifiedBreed(params['name'])
          .subscribe((data: [] | any) => {
            this.breed = data.message;

            //This line of code below get the passed in value from the params and assign it to this.name to be able to display that specific breed name on the template.
            //If this was an 'ID' it wouldn't have been used. Just for the purpose of this app i used it this way.
            this.name = params['name']
          });
      }

    });
  }

  //This code below unsubcribes from the observable above to avoid memory leak.
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
