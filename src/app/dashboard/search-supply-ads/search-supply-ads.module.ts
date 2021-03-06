import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSupplyAdsRoutingModule } from './search-supply-ads-routing.module';
import { SearchSupplyAdsComponent } from './search-supply-ads.component';
import { NbCardModule, NbSelectModule, NbBadgeModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchSupplyAdsComponent],
  imports: [
    CommonModule,
    SearchSupplyAdsRoutingModule,
    NbCardModule,
    NbSelectModule,
    NbBadgeModule,
    NgbModule,
    Ng5SliderModule,
    FormsModule
  ]
})
export class SearchSupplyAdsModule {}
