import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { FooHeaderComponent } from './foo-header/foo-header.component';
import { FooFooterComponent } from './foo-footer/foo-footer.component';
import { FooPipe } from './foo.pipe';
import { FooService } from './foo.service';



@NgModule({
  declarations: [
    FooComponent,
    FooHeaderComponent,
    FooFooterComponent,
    FooPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // FooService
  ],
  exports: [
    FooComponent,
    FooPipe
  ]
})
export class FooModule { }
