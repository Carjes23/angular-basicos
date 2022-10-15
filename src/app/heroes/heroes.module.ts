
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //que quieres que se vea afuera
    exports: [
        ListadoComponent
    ],
    //modules
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}