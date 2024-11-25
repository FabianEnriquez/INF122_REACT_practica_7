import React from "react";
import "./Escaners.css";
import { Link } from "react-router-dom";
//El nombre Escaners puede ser diferente
export default function Escaners() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 formato1">
            <div class="card">
              <img
                src="https://www.shopscan.com.br/wp-content/uploads/2020/07/fi-7700_right_close_tcm72-2971897.jpg"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">Escaner Fujitsu</h5>
                <p class="card-text">Modelo: FI-7260</p>
                <Link
                  to="/ComponenteFuncional"
                  data-mdb-ripple-init
                  class="btn btn-primary"
                >
                  Comprar
                </Link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato1">
            <div class="card">
              <img
                src="https://www.bhphotovideo.com/images/images1000x1000/Fujitsu_PA03540_B505_fi_6240_High_Performance_Color_732631.jpg"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Escaner Fujitsu2</h5>
                <p class="card-text">Modelo: FI-7800</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>{" "}
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato1">
            <div class="card">
              <img
                src="https://media.stockinthechannel.com/pic/2BSF0w50aEmMocV1hH4VnA.r.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Escaner Fujitsu3</h5>
                <p class="card-text">Modelo: FI-7600</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="/" data-mdb-ripple-init class="btn btn-warning">
        Volver a la pagina Principal
      </a>
    </div>
  );
}
