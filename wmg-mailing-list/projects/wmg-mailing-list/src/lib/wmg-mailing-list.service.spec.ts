import { TestBed, inject } from '@angular/core/testing';

import { WmgMailingListService } from './wmg-mailing-list.service';

describe('WmgMailingListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WmgMailingListService]
    });
  });

  it('should be created', inject([WmgMailingListService], (service: WmgMailingListService) => {
    expect(service).toBeTruthy();
  }));
});
