import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Pedido } from '../models/pedido';
import { ListaPedidosService } from '../services/lista-pedidos.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  pedido: Pedido = {
    number: 0,
    name: '',
    description: '',
    date: new Date
  }

  private listaPedidos = inject(ListaPedidosService);

  @Output() nuevo = new EventEmitter();

  save(form: NgForm){
    if (form.invalid) { alert("Invalido") } 
    else { 
      const pedido = { ...this.pedido }
      pedido.number = this.listaPedidos.randomNumber();
      pedido.date = new Date(); 

      this.listaPedidos.addPedido(pedido);
      this.listaPedidos.addPendiente(pedido);
      this.nuevo.emit();
      form.reset();
    }
  }
}
