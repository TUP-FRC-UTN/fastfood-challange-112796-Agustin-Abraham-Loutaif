import { Component, OnInit } from '@angular/core';
import { PosComponent } from '../pos/pos.component';
import { ListaPedidosService } from '../services/lista-pedidos.service';
import { Pedido } from '../models/pedido';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { DeliveryComponent } from '../delivery/delivery.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, KitchenComponent, DeliveryComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit{

  pedidos: Pedido[] = []
  pendiente: Pedido[] = [];
  listo: Pedido[] = [];

  constructor (private listaPedidos: ListaPedidosService) {}

  ngOnInit(): void {
    this.consultarPedidos();
  }

  consultarPedidos(){
    this.pedidos = this.listaPedidos.getAll();
    this.pendiente = this.listaPedidos.getAllPendientes();
    this.listo =this.listaPedidos.getAllListos();
  }
}
