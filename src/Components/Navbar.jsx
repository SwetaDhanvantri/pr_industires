import React from 'react';
import { Link } from 'react-router-dom';

const Navbar= ()=> {
const rubberProducts =[
  {
      
    id: 1,
    name: "Grometts Mini Vx Round",
    pic: "/assets/img/IMGNONBG/Gromett_MB-removebg-preview.png",
    
  },
  {
    
    id: 2,
    name: "Grometts Mini Vx Long",
    pic: "/assets/img/IMGNONBG/Gromett_Mini_Vx_long-removebg-preview.png",
    
  },
  {
    
    id: 3,
    name: "Shell Gromett",
    pic: "/assets/img/IMGNONBG/Shell_Gromett-removebg-preview.png",
    
  },
  {
    
    id: 4,
    name: "Jet Khaitan",
    pic: "/assets/img/IMGNONBG/Jet_khaitan-removebg-preview.png",
    
  },
  {
    
    id: 5,
    name: "Gromett High Flow",
    pic: "/assets/img/IMGNONBG/Gromett_hiflo-removebg-preview.png",
    
  },
  {
    
    id: 6,
    name: "Gromett Mb",
    pic: "/assets/img/IMGNONBG/Gromett_MB-removebg-preview.png",
    
  },
  {
    
    id: 7,
    name: "Rubber O Rings",
    pic: "/assets/img/IMGNONBG/Rubber_O_rings-removebg-preview.png",
    
  },
  {
    
    id: 8,
    name: "Priming Plug Washer Big",
    pic: "/assets/img/IMGNONBG/Priming_plug_washer_BIG-removebg-preview.png",
    
  },
  {
    
    id: 9,
    name: "Priming Plug Washer Small",
    pic: "/assets/img/IMGNONBG/Priming_plug_washer_small-removebg-preview.png",
    
  },
  {
    
    id: 10,
    name: "Ring Big S/W",
    pic: "/assets/img/IMGNONBG/Ring_big_s_by_w-removebg-preview.png",
    
  },
  {
    
    id: 11,
    name: "Ring Big X 4",
    pic: "/assets/img/IMGNONBG/Ring_big_x_4-removebg-preview.png",
    
  },
  {
    
    id: 12,
    name: "Flange Gasket",
    pic: "/assets/img/IMGNONBG/Flange_gasket-removebg-preview.png",
    
  },
  {
    
    id: 13,
    name: "Gdf Alex",
    pic: "/assets/img/IMGNONBG/GDF_ALEX-removebg-preview.png",
    
  },
  {
    
    id: 14,
    name: "Gdf 60 Crs",
    pic: "/assets/img/IMGNONBG/GDF_60_CRS-removebg-preview.png",
    
  },
  {
    
    id: 15,
    name: "Gdf 1 Hp",
    pic: "/assets/img/IMGNONBG/GDF_1_HP-removebg-preview.png",
    
  },
  {
    
    id: 16,
    name: "Gdf Activa",
    pic: "/assets/img/IMGNONBG/GDF_ACTIVA-removebg-preview.png",
    
  },
  {
    
    id: 17,
    name: "Water Deflectors 13.8mm",
    pic: "/assets/img/IMGNONBG/Water_the_13.8-removebg-preview.png",
    
  },
  {
    
    id: 18,
    name: "Water Deflectors 15.8mm",
    pic: "/assets/img/IMGNONBG/Water_thrower_16mm-removebg-preview.png",
    
  },
  {
    
    id: 19,
    name: "Water Deflectors 12mm",
    pic: "/assets/img/IMGNONBG/Water_thrower_12mm-removebg-preview.png",
    
  },
  {
    
    id: 20,
    name: "Water Deflectors 16mm",
    pic: "/assets/img/IMGNONBG/Water_thrower_16mm-removebg-preview.png",
    
  },
  {
    
    id: 21,
    name: "Water Deflectors 1hp",
    pic: "/assets/img/IMGNONBG/Water_thrower_1_HP-removebg-preview.png",
    
  },
  {
    
    id: 22,
    name: "Water Deflectors 19mm",
    pic: "/assets/img/IMGNONBG/Water_thrower_19mm-removebg-preview.png",
    
  },
  {
    
    id: 23,
    name: "Silicone Gasket For Led",
    pic: "/assets/img/IMGNONBG/Silicone_gaskets_for_LED_LIGHTS-removebg-preview.png",
    
  },
  {
    
    id: 24,
    name: "Mechanical Seal 12mm",
    pic: "/assets/img/IMGNONBG/Seal_12mm-removebg-preview.png",
    
  },
]
const plasticProducts =[
  {
      
    id: 1,
    name: " Terminal box uajala type",
    pic: "/assets/img/IMGNONBG/ujala_box-removebg-preview.png",
    
  },
  {
    
      id: 2,
      name: " Terminal box mini fisher type",
      pic: "/assets/img/IMGNONBG/t_box_mini_fisher-removebg-preview.png",
      
    },
    {
    
      id: 3,
      name: " Terminal box Tullu with handle",
      pic: "/assets/img/IMGNONBG/Tullu_with_handle_-removebg-preview.png",
      
    },
    {
    
      id: 4,
      name: "Terminal box tullu small with handle",
      pic: "/assets/img/IMGNONBG/tullu_small_with_handle-removebg-preview.png",
      
    },
    {
    
      id: 5,
      name: "Terminal box Oswal Type",
      pic: "/assets/img/IMGNONBG/T_box_oswal_type-removebg-preview.png",
      
    },
    {
    
      id: 6,
      name: "Terminal box Fisher Type",
      pic: "/assets/img/IMGNONBG/box_fisher_type-removebg-preview.png",
      
    },
    {
    
      id: 7,
      name: "Fan Cover 3 Cut (K)",
      pic: "/assets/img/IMGNONBG/fan_cover_3_cut_k-removebg-preview.png",
      
    },
    {
    
      id: 8,
      name: " Fan Cover 3 Cut Usha Big",
      pic: "/assets/img/IMGNONBG/fan_cover_3_cut_usha_big-removebg-preview.png",
      
    },
    {
    
      id: 9,
      name: " Fan Cover 3 Cut Usha Small  ",
      pic: "/assets/img/IMGNONBG/fan_cover_3_cut_usha_small-removebg-preview.png",
      
    },
    {
    
      id: 9,
      name: "Fan Cover 4 Cut ",
      pic: "/assets/img/IMGNONBG/fan_cover_4_cut-removebg-preview.png",
      
    },
    {
    
      id: 10,
      name: "Cooling Fan 1 Hp Black",
      pic: "/assets/img/IMGNONBG/cooling_fan_1_hp_black-removebg-preview.png",
      
    },
    {
    
      id: 11,
      name: " Cooling Fan Fisher Black",
      pic: "/assets/img/IMGNONBG/cooling_fan_fisher_black-removebg-preview.png",
      
    },
    {
    
      id: 12,
      name: "Cooling Fan Hiflo 12mm",
      pic: "/assets/img/IMGNONBG/cooling_fan_hi_flow_12mm-removebg-preview.png",
      
    },
    {
    
      id: 13,
      name: "Cooling Fan Sheet Metal 10mm",
      pic: "/assets/img/IMGNONBG/cooling_fan_sheet_metal_10mm-removebg-preview.png",
      
    },
    {
    
      id: 14,
      name: "Cooling Fan Sheet Metal 14mm",
      pic: "/assets/img/IMGNONBG/cooling_fan_sheet_metal_14mm-removebg-preview.png",
      
    },
    
    {
    
      id: 15,
      name: "Non-Return Valve 60 Crs",
      pic: "/assets/img/IMGNONBG/Non_return_valve_60_crs-removebg-preview.png",
      
    },
    {
    
      id: 16,
      name: "Non-Return Valve 70 Crs",
      pic: "/assets/img/IMGNONBG/non_return_valve_70_crs-removebg-preview.png",
      
    },
    {
    
      id: 17,
      name: "Non-Return Valve Activa",
      pic: "/assets/img/IMGNONBG/non_return_valve_activa-removebg-preview.png",
      
    },
    {
    
      id: 18,
      name: "Capacitor Cap Cap 35mm",
      pic: "/assets/img/IMGNONBG/Cap_35-removebg-preview.png",
      
    },
    {
    
      id: 19,
      name: "Capacitor Cap Cap 40mm",
      pic: "/assets/img/IMGNONBG/Cap_40mm-removebg-preview.png",
      
    },
    {
    
      id: 20,
      name: "Capacitor Cap Cap 45mm",
      pic: "/assets/img/IMGNONBG/Cap_45_mm-removebg-preview.png",
      
    },
    {
    
      id: 21,
      name: "Handle Attachi Small",
      pic: "/assets/img/IMGNONBG/Handle_attachi_small-removebg-preview.png",
      
    },
    {
    
      id: 22,
      name: "Handle Attachi Big",
      pic: "/assets/img/IMGNONBG/Handle_attachi_big-removebg-preview.png",
      
    },
    {
    
      id: 23,
      name: "Handle Perfect Type",
      pic: "/assets/img/IMGNONBG/Handle_perfect-removebg-preview.png",
      
    },
    {
    
      id: 24,
      name: "Handle Usha Small",
      pic: "/assets/img/IMGNONBG/Handle_USHA_small-removebg-preview.png",
      
    },
    {
    
      id: 25,
      name: "Handle Usha Big ",
      pic: "/assets/img/IMGNONBG/Handle_USHA_BIG-removebg-preview.png",
      
    },
    {
    
      id: 26,
      name: " Handle Classic ",
      pic: "/assets/img/IMGNONBG/Handle_classic-removebg-preview.png",
      
    },
    {
    
      id: 27,
      name: " Handle Strip",
      pic: "/assets/img/IMGNONBG/Handle_strip-removebg-preview.png",
      
    },
    {
    
      id: 28,
      name: "Handle Extuded BodY",
      pic: "/assets/img/IMGNONBG/Handle_ext_body-removebg-preview.png",
      
    },
    {
    
      id: 29,
      name: " Handle Toshi Type",
      pic: "/assets/img/IMGNONBG/Handle_TOSHI_type-removebg-preview.png",
      
    },
    {
    
      id: 30,
      name: "Ventury 1 Hp",
      pic: "/assets/img/IMGNONBG/Ventury_1_HP-removebg-preview.png",
      
    },
    {
    
      id: 30,
      name: " Ventury 1/2 Hp",
      pic: "/assets/img/IMGNONBG/Ventury_1by2_HP-removebg-preview.png",
      
    },
    {
    
      id: 31,
      name: " Flange 1 Hp",
      pic: "/assets/img/IMGNONBG/Flange_1_HP-removebg-preview.png",
      
    },
    {
    
      id: 32,
      name: "Flange 1/2 Hp",
      pic: "/assets/img/IMGNONBG/Flange_1by2_HP-removebg-preview.png",
      
    },
    {
    
      id: 33,
      name: " Dummy Threaded",
      pic: "/assets/img/IMGNONBG/Dummy_threaded-removebg-preview.png",
      
    },
    {
    
      id: 34,
      name: "Dummy Plain ",
      pic: "/assets/img/IMGNONBG/Dummy_without_thread-removebg-preview.png",
      
    },
    {
    
      id: 35,
      name: "Cable Glands",
      pic: "/assets/img/IMGNONBG/Cable_glands-removebg-preview.png",
      
    },
    {
    
      id: 36,
      name: " Thimbles",
      pic: "/assets/img/IMGNONBG/Thimble-removebg-preview.png",
      
    },
    
]

  return (
    <header className="main">

    <div className="main-head  fixed-top">
    <div className="container">
<nav className="navbar navbar-expand-lg m-0 p-0 ">
    <div className="container-fluid ">
      <div className="pr-logo"><Link to="/"><img src="./assets/img/logos/logoPR-removebg-preview.png" title="logo" /></Link> </div>
      <Link className="navbar-brand text-white" to="/">Navbar scroll</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">

        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Company">Company</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/PlasticProducts">Plastic</Link>
          </li>
         

          {/* <li className="nav-item dropdown position-static pr-drop">
            
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
            Plastic
            </a>
             <ul class="dropdown-menu " >{plasticProducts.map((plasticProducts) =>
            
            <ul>
              <li><a class="dropdown-item" href='./ProductDetails.jsx' >{plasticProducts.name}</a> </li>
              </ul>
            )}
            <Link className='nav-link' to='/PlasticProducts' >See All </Link>
              
            </ul>
           
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/RubberProducts">Rubber</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Biosage">Biosage</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fabletechnology">Fable Technology</Link>
          </li>
          {/* <li>
                <Link className="nav-link " to="/ProductList">Products</Link>
                </li> */}

         
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu">
              
              <li><a className="dropdown-item" href="./r&P.html">Rubber & Plastic Component</a></li>
              <li><a className="dropdown-item" href="./biosage.html">Bio Sage</a></li>

              <li><a className="dropdown-item" href="./fabletech.html">Fable Technology</a></li>
            </ul>
          </li> */}
          
{/*           

         <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false"  id="navbarDropdownMenuLink">
             Products
            </a>
            <ul className="dropdown-menu">
            <li  class="dropdown-submenu" ><a className="dropdown-item dropdown-toggle" >Rubber</a>
            <ul  class="dropdown-menu">{rubberProducts.map((rubberProduct) =>
            
            <ul>
              <li><Link class="dropdown-item"  to={`/ProductDetails/${rubberProducts.name}`} >{rubberProduct.name}</Link> </li>
              </ul>
            )}
              
            </ul>
           </li>
           <li class="dropdown-submenu" ><a className="dropdown-item dropdown-toggle" >Plastic</a>
           <ul class="dropdown-menu">{plasticProducts.map((plasticProducts) =>
            
            <ul>
              <li><a class="dropdown-item" href='./ProductDetails.jsx' >{plasticProducts.name}</a> </li>
              </ul>
            )}
              
            </ul>
           </li>
              <li><a className="dropdown-item" href="./biosage.html">Bio Sage</a></li>
              <li><a className="dropdown-item " href='./ProductList.jsx'>See All</a></li>
            </ul>
            
          </li> 
                 */}
          
          
           
         
        </ul>
        <div className="nav-item ">
          <Link className="nav-link btn-contact" to="/Contact">Contact Us</Link>
        </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>   */}
      </div>
    </div>
  </nav>
    </div>
    
    </div>
    </header>
   
  )
}

export default Navbar