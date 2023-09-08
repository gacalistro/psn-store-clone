import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "./landing.component";

import { CardComponent } from "src/app/components/card/card.component";

@NgModule({
  declarations: [LandingComponent, CardComponent],
  imports: [CommonModule],
})
export class LandingModule {}
