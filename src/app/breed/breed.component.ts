import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DogapiService } from '../dogapi.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss'],
})
export class BreedComponent implements OnInit, OnDestroy {
  breed!: [] | any;
  private sub!: Subscription;
  name!: any;
  constructor(
    private route: ActivatedRoute,
    private dogApiService: DogapiService
  ) {}

  ngOnInit(): void {
    this.getSpecifiedBreed();
  }

  getSpecifiedBreed() {
    //Getting a snapshot of the route params(which is the name of the specified breed) so it can be passed to the getSpecifiedBreed() method  assign the data to the breed property on the component for binding on the template
    this.name = this.route.snapshot.paramMap.get('name');
    this.sub = this.dogApiService.getSpecifiedBreed(this.name).subscribe(
      (data: [] | any) => {
        this.breed = data.message;
      },
      (err) => console.log(err)
    );
  }

  //This code below unsubcribes from the observable above to avoid memory leak.
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
