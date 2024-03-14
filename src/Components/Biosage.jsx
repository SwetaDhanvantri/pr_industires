import React, { useState } from "react";
import "./assets/style/Product.css";
// import { useParams } from 'react-router-dom';
const Biosage = () => {
  // const { type, productName } = useParams();
  const [products, setProducts] = useState([
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
    
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleProductClick = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };
  const handleTypeClick = (type) => {
    setSelectedType(type);
    setSelectedProduct(null);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <div>
        <section className="my-pr">
          <div className="my-product">
            <div className="container">
              <div className="pr-content row ">
                <div className="col-xl-3 imgBx d-flex flex-column align-items-center text-center">
                  <img
                    src={selectedProduct.pic}
                    alt="Image"
                  />
                  <h2 className="mt-4">{selectedProduct.name}</h2>
                  
                </div>

                <div className="col-xl-9 col-12 details">
                  <div className="content">
                    <div className="">
                      <div className="">
                        <div className="mx-2">
                          <h4>Product Details</h4>
                          <h5>Color:{selectedProduct.color} </h5>
                          <h5>Size: {selectedProduct.size}</h5>
                          <h5>Material:{selectedProduct.material} </h5>
                          <h5>
                            Usage/Application: {selectedProduct.application}
                          </h5>
                          <h5>Country of Origin: {selectedProduct.country}</h5>
                        </div>
                       
                      </div>

                     
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="container">
                    <h4>Product Description</h4>
                    <p>{selectedProduct.details}</p>
                    <div>
                      <button onClick={handleBackClick}>Back</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div >
     <div className="about-us text-center">
        <div className="about-intro ">
          <div className="overlay d-flex align-items-center justify-content-center">
            <h3 >BIOSAGE</h3>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {products.map((product) => (
            <div
              className="col-xl-3 col-md-4 col-sm-6 col-12 product1"
              key={product.id}
            >
              <div className="container">
                <div className="card my-2">
                  <div className="pr-img">
                    <img
                      className="card-img-top"
                      src={product.pic}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="view-product">
                      <button /* onClick={() => handleProductClick(product.id)}*/>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biosage;
