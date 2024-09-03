import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AngularDatatableDirective } from './angular-datatable.directive';
import { DefaultSorterComponent } from './default-sorter.component';
import { PaginatorComponent } from './paginator.component';
import { BootstrapPaginatorComponent } from './bootstrap-paginator.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngularDatatableDirective, DefaultSorterComponent, PaginatorComponent, BootstrapPaginatorComponent],
  exports: [AngularDatatableDirective, DefaultSorterComponent, PaginatorComponent, BootstrapPaginatorComponent]
})
export class AngularDatatableModule { }
