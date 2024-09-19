import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class ListaPedidosService {

  private pedidos : Pedido[] = []
  private pedidosPendientes : Pedido[] = []
  private pedidosListos : Pedido[] = []
  /*private pedidoCoccion : Pedido = {
    number: 0,
    name: '',
    description: '',
    date: new Date()
  }*/

  constructor() { }
  
  randomNumber() : number{
    return Math.floor( Math.random() * 1000) + 1
  }

  getAll() : Pedido[] {
    return this.pedidos;
  }

  getAllPendientes() : Pedido[] {
    return this.pedidosPendientes;
  }

  getAllListos() : Pedido[] {
    return this.pedidosListos;
  }

  getPendiente(number: number) : Pedido | undefined {
    const pedido = this.pedidosPendientes.find(pedido => pedido.number === number);
    return pedido;
  }

  addPedido(pedido: Pedido){
    this.pedidos.push(pedido);
  }

  addPendiente(pendiente: Pedido){
    this.pedidosPendientes.push(pendiente);
  }

  addListo(listo: Pedido){
    this.pedidosListos.push(listo);
    console.log(this.pedidosListos)
  }

  deletePendiente(pendiente: number){
    this.pedidosPendientes = this.pedidosPendientes.filter(pedidos => pedidos.number !== pendiente)
  }

  deleteListo(listo: number){
    this.pedidosListos = this.pedidosListos.filter(pedidos => pedidos.number !== listo)
    console.log(this.pedidosListos);
  }

}
