import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImagen = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad = '';
  ciudadEncontrada = '';
  clima = '';
  pais = '';
  temperatura = '';
  humedad = 0;
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService: ClimaService) {
  }

  ngOnInit(): void {
  }

  obtenerClima() {
    this.loading = true;
    this.query = false;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.ciudadEncontrada = data.name;
      this.temperatura = (data.main.temp - 273).toFixed(2);
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].description;
      this.pais = data.sys.country;
    }, error => {
      console.log(error);
      this.loading = false;
      this.error();
    });
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }
}
