<template>
<p>{{dasboar}}</p>
  <h1 class="my-5">Inicio</h1>
  <div class="row">
    <div class="col-sm-3">
      <div class="card border-primary mb-2" style="max-width: 18rem">
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card border-success mb-2" style="max-width: 18rem">
        <div class="card-header">Header</div>
        <div class="card-body text-success">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="mt-0 col">
              <h5 class="card-title">TOTAL PRECIOS</h5>
            </div>
            <div class="col-auto col">
              <div class="avatar">
                <div class="avatar-title rounded-circle bg-primary-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather align-middle"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path
                      d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <h1 class="display-5 mt-1 mb-3">$ {{dasboar.precios}}</h1>
          <div class="mb-0">
            <span class="text-success"
              ><i class="mdi mdi-arrow-bottom-right"></i> 8.35%</span
            >
            More earnings than usual
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="mt-0 col">
              <h5 class="card-title">TOTAL STOCK</h5>
            </div>
            <div class="col-auto col">
              <div class="avatar">
                <div class="avatar-title rounded-circle bg-primary-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather align-middle"
                  >
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon
                      points="16 8 20 8 23 11 23 16 16 16 16 8"
                    ></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <h1 class="display-5 mt-1 mb-3">{{dasboar.stocktotal}}</h1>
          <div class="mb-0">
            <span class="text-danger">
              <i class="mdi mdi-arrow-bottom-right"> </i> -2.65%</span
            >
            Less sales than usual
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div class="widget-inline card">
        <div class="p-0 card-body">
          <div class="g-0 row">
            <div class="col-xl-3 col-sm-6">
              <div class="shadow-none m-0 card">
                <div class="text-center card-body">
                  <i
                    class="bi bi-person-check-fill"
                    style="font-size: 2rem; color: cornflowerblue"
                  ></i>
                  <h3><span>29</span></h3>
                  <p class="text-muted font-15 mb-0">Total Projects</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card shadow-none m-0 border-start card">
                <div class="text-center card-body">
                  <i
                    class="bi-alarm"
                    style="font-size: 2rem; color: cornflowerblue"
                  ></i>
                  <h3><span>715</span></h3>
                  <p class="text-muted font-15 mb-0">Total Tasks</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card shadow-none m-0 border-start card">
                <div class="text-center card-body">
                  <i
                    class="bi bi-archive-fill"
                    style="font-size: 2rem; color: cornflowerblue"
                  ></i>
                  <h3><span>31</span></h3>
                  <p class="text-muted font-15 mb-0">Members</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card shadow-none m-0 border-start card">
                <div class="text-center card-body">
                  <i
                    class="bi bi-currency-dollar"
                    style="font-size: 2rem; color: cornflowerblue"
                  ></i>
                  <h3>
                    <span>93%</span>
                    <i class="mdi mdi-arrow-up text-success"></i>
                  </h3>
                  <p class="text-muted font-15 mb-0">Productivity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="row">
    <div class="col-sm-8">
      <div class="col-xxl-9 col-12">
        <div class="card">
          <div class="card-header">
            <div class="card-actions float-right">
              <span class="cursor-pointer mr-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path
                    d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                  ></path></svg
              ></span>
              <div class="d-inline-block dropdown">
                <a aria-haspopup="true" class="" aria-expanded="false"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle></svg
                ></a>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Action</button
                  ><button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Another Action</button
                  ><button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Something else here
                  </button>
                </div>
              </div>
            </div>
            <h5 class="mb-0 card-title">Clients</h5>
          </div>
          <div class="card-body">
            <table class="mb-0 table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/static/media/avatar-2.c9ab07da.jpg"
                      width="32"
                      height="32"
                      class="rounded-circle my-n1"
                      alt="Avatar"
                    />
                  </td>
                  <td>Charde Marshall</td>
                  <td>Price Savers</td>
                  <td>charde@marshall.com</td>
                  <td><span class="badge badge-success">Active</span></td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/static/media/avatar-3.b1b571fd.jpg"
                      width="32"
                      height="32"
                      class="rounded-circle my-n1"
                      alt="Avatar"
                    />
                  </td>
                  <td>Doris Wilder</td>
                  <td>Red Robin Stores</td>
                  <td>doris@wilder.com</td>
                  <td><span class="badge badge-warning">Inactive</span></td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/static/media/avatar-2.c9ab07da.jpg"
                      width="32"
                      height="32"
                      class="rounded-circle my-n1"
                      alt="Avatar"
                    />
                  </td>
                  <td>Haley Kennedy</td>
                  <td>Helping Hand</td>
                  <td>haley@kennedy.com</td>
                  <td><span class="badge badge-danger">Deleted</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="col-xxl-3 col-12">
        <div class="card">
          <div class="card-header">
            <div class="card-actions float-right">
              <span class="cursor-pointer mr-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path
                    d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                  ></path></svg
              ></span>
              <div class="d-inline-block dropdown">
                <a aria-haspopup="true" class="" aria-expanded="false"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle></svg
                ></a>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Action</button
                  ><button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Another Action</button
                  ><button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Something else here
                  </button>
                </div>
              </div>
            </div>
            <h5 class="mb-0 card-title">Charissa Hilt</h5>
          </div>
          <div class="card-body">
            <div class="no-gutters row">
              <div class="col-xxl-4 text-center col-sm-3 col-xl-12">
                <img
                  src="/static/media/avatar-3.b1b571fd.jpg"
                  width="64"
                  height="64"
                  class="rounded-circle mt-2"
                  alt="Charissa Hilt"
                />
              </div>
              <div class="col-xxl-8 col-sm-9 col-xl-12">
                <strong>About me</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
            <table class="my-2 table table-sm">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Charissa Hilt</td>
                </tr>
                <tr>
                  <th>Company</th>
                  <td>Matrix Interior Design</td>
                </tr>
                <tr>
                  <th>Occupation</th>
                  <td>Desktop publisher</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>charissahilt@rhyta.com</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>+1234123123123</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td>hispanomarketer.com</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td><span class="badge badge-success">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
      return{
        prueba:'prueba',
        dasboar:{
            precios:'',
            stocktotal:''
        }
        
      }
    },
    mounted(){
      axios.get('http://localhost/apirest/articulos.php?prueba='+this.prueba)
      .then((respuesta) => {
          this.dasboar = respuesta.data;
          console.log(this.dasboar.precios);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
};
</script>

<style>
</style>