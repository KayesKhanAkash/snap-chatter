import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxFooterComponent } from './inbox-footer.component';

describe('InboxFooterComponent', () => {
  let component: InboxFooterComponent;
  let fixture: ComponentFixture<InboxFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboxFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InboxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
