import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { provideRouter } from '@angular/router';

import { tabSport } from './tabSport.page';

/*describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

describe('tabSport', () => {
  let component: tabSport;
  let fixture: ComponentFixture<tabSport>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(tabSport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
