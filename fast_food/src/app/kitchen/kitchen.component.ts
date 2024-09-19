import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ListaPedidosService } from '../services/lista-pedidos.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  coccion: Pedido | undefined = undefined
  ocupado: boolean = false;

  @Input() pedidos: Pedido[] = [];
  @Output() coccionar = new EventEmitter();

  private listaPedidos = inject(ListaPedidosService);
  
  prepararPedido(numero: number){
    this.coccion = this.listaPedidos.getPendiente(numero);
    this.listaPedidos.deletePendiente(numero);
    this.ocupado = true;
    this.coccionar.emit();
  }

  terminarPedido(){
    if (this.coccion != undefined){
      this.ocupado = false;
      this.listaPedidos.addListo(this.coccion)
      this.coccion = undefined;
      this.coccionar.emit();
    }
    else alert("No hay pedido para terminar")
  }
}
