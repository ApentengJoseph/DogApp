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
  sub!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private dogApiService: DogapiService
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.sub = this.dogApiService
          .getSpecifiedBreed(params['id'])
          .subscribe((data: [] | any) => {
            this.breed = data.message;
          });
      }
      if (params['id']) {
        this.sub = this.dogApiService
          .getSpecifiedSubBreed(params['id'])
          .subscribe((data: [] | any) => {
            this.breed = data.message;
          });
      }

    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
