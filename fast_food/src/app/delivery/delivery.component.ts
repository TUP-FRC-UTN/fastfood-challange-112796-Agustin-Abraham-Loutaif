import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Pedido } from '../models/pedido';
import { ListaPedidosService } from '../services/lista-pedidos.service';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
  @Input() pedidos: Pedido[] = [];
  @Output() entrega = new EventEmitter();

  private listaPedidos = inject(ListaPedidosService);

  entregar(number: number){
    this.listaPedidos.deleteListo(number);
    alert("Se ha entregado el pedido " + number)
    this.entrega.emit();
  }
}
