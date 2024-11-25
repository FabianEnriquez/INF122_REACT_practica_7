import React from "react";
import { Link } from "react-router-dom";
import "./Impresoras.css";

export default function Impresoras() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://th.bing.com/th/id/R.df6e6710aa7fac308a490f2dee80b29b?rik=ToSOWW0S%2b%2f5WyA&pid=ImgRaw&r=0"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora Matricial </h5>
                <p class="card-text">Modelo: LQ-590II EPSON</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2 ">
            <div class="card">
              <img
                src="https://http2.mlstatic.com/impresora-epson-l575-multifuncional-sistema-tinta-continua-D_NQ_NP_747011-MCO20457565015_102015-F.jpg"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora LaserJet Enterprise</h5>
                <p class="card-text">Modelo: M612dn HP</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://www.tecnocraft.com/thumb/000000000041568413311415684--1-_800x800.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora matricial </h5>
                <p class="card-text">Modelo:Epson LQ590II</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://plazavea.vteximg.com.br/arquivos/ids/2422744-1000-1000/image-c931bdfa3a3a41a8a2452f7efcb0f8c7.jpg?v=637674025266070000"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora matricial </h5>
                <p class="card-text">Modelo:Epson AB00123</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://walmarthn.vtexassets.com/arquivos/ids/187946/Multifuncional-Epson-L5190-Wifi-1-16025.jpg?v=637709273432600000"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora matricial </h5>
                <p class="card-text">Modelo:Epson LU98526</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://th.bing.com/th/id/OIP.jDkjD1mNuMxINHA49eAi0gHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora matricial </h5>
                <p class="card-text">Modelo:Epson LQ590II</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/">
        <a href="#!" data-mdb-ripple-init class="btn btn-warning">
          Volver a la pagina Principal
        </a>
      </Link>
    </div>
  );
}
