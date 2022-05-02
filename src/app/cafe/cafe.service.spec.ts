/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { faker } from '@faker-js/faker';
import { Cafe } from './cafe'


let httpTestingController: HttpTestingController;
let service: CafeService;
let Cafes: Array<Cafe> = [];

describe('Service: Cafe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService],
    });

    Cafes = [];

    for (let i = 0; i < 3; i++) {
      Cafes.push(
        new Cafe(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence()
        )
      );
    }
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CafeService);
  });

  it('should create ok', inject(
    [CafeService],
    (service: CafeService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('if consume getCafes returned Observable should match the right data', () => {
    service.getCafes().subscribe((Cafes) => {
      expect(Cafes.length).toEqual(3);
    });
  });


});
