import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { BabykledingDetailComponent } from './babykleding-detail.component';
import { DataService } from '../data.service';
import { ActivatedRouteStub } from '../../testing/router-stubs';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('BabykledingDetailComponent', () => {
  let component: BabykledingDetailComponent;
  let fixture: ComponentFixture<BabykledingDetailComponent>;
  let de: DebugElement;
  let dataService: DataService;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ BabykledingDetailComponent ],
      providers :[
        DataService,
        {provide:ActivatedRoute, useValue: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabykledingDetailComponent);
    component = fixture.componentInstance;
    
    dataService = TestBed.get(DataService);
    
    this.spy = spyOn(dataService,'getProduct')
    .and.returnValue(Observable.of({
      _id: 'dfkfsldkfjklds',
      type: 'babykleding',
      name: 'slabbetje1',
      categorie: 'slabbetje',
      price: {
        list_price: 15.5,
        sale_price: 11.5
      }
    }));
    
    de = fixture.debugElement;
    el = de.query(By.css('h1')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the product name as h1 in the template after getProduct (async)', async( () =>{
      fixture.detectChanges();

      fixture.whenStable().then( () =>{
         fixture.detectChanges();
         expect(el.textContent).toEqual('slabbetje1');
      });     
  }));
});

