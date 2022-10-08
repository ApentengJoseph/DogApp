import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DogapiService } from '../dogapi.service';

@Component({
  selector: 'app-sub-breed',
  templateUrl: './sub-breed.component.html',
  styleUrls: ['./sub-breed.component.scss'],
})
export class SubBreedComponent implements OnInit {
  name!: any;
  subBreed!: [] | any;

  private sub!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private dogApiService: DogapiService
  ) {}

  ngOnInit(): void {
    //Getting a snapshot of the route params(which is the name of the specified su-breed) so it can be passed to the getSpecifiedSubBreed() method and assign the data to the suBreed property on the component for binding on the template
    this.name = this.route.snapshot.paramMap.get('name');
    this.sub = this.dogApiService.getSpecifiedSubBreed(this.name).subscribe(
      (data: [] | any) => {
        this.subBreed = data.message;
      },
      (err) => console.log(err)
    );
  }

  //This code below unsubcribes from the observable above to avoid memory leak.
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
