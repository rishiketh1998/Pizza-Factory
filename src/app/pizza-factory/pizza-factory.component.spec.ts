import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IPizza } from '../interfaces/IPizza';
import { Pizza } from '../pizza/pizza';
import { PizzaFactoryComponent } from './pizza-factory.component';

describe('PizzaFactoryComponent', () => {
  let component: PizzaFactoryComponent;
  let fixture: ComponentFixture<PizzaFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('verifies Pizza Interval method', () => {

    it('should verify Pizza Interval method returns undefined after 500ms when intervalTime is set to 500', async () => {
      jasmine.clock().install();
      const intervalTime = 500;
      const res = component.pizzaInterval(intervalTime);
      jasmine.clock().tick(500);
      await expectAsync(res).toBeResolved();
      jasmine.clock().uninstall();
    });

  });

});
