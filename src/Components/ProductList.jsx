import React, { useState } from "react";
import "./assets/style/Product.css";
// import { useParams } from 'react-router-dom';
const ProductList = () => {
  // const { type, productName } = useParams();
  const [products, setProducts] = useState([
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
              <div className="pr-content d-flex justify-content-evenly flex-wrap">
                <div className=" imgBx d-flex flex-column align-items-center text-center">
                  <img
                    src={selectedProduct.pic}
                    alt="Image"
                  />
               
                 
                </div>

                <div className=" details">
                  <div className="content">
                    <div className="">
                      <div className="">
                        <div className="mx-2">
                        
                        <h2 className="">{selectedProduct.name}</h2>
                          <h4> Product Details:</h4>
                          <table>
                            <tbody>
                              <tr>
                                <th><h5> Color: </h5></th>
                                <td><h5>{selectedProduct.color}</h5></td>
                              </tr>
                              <tr>
                                <th><h5>  Size: </h5></th>
                                <td><h5>{selectedProduct.size}</h5></td>
                              </tr>
                              <tr>
                                <th><h5> Material: </h5></th>
                                <td><h5>{selectedProduct.material} </h5></td>
                              </tr>
                              <tr>
                                <th><h5>Usage/Application: </h5></th>
                                <td><h5>  {selectedProduct.application}</h5></td>
                              </tr>
                              <tr>
                                <th><h5>Country of Origin: </h5></th>
                                <td><h5>{selectedProduct.country}</h5></td>
                              </tr>
                            </tbody>
                          </table>
                         
                        
                        </div>
                        
                      </div>
                      <div className="col-12">
                  <div className="mx-2">
                    <h4>Product Description</h4>
                    <p>{selectedProduct.details}</p>
                    <div className="btn-div">
                      <button className="btn-back" onClick={handleBackClick}>Back To Products</button>
                    </div>
                  </div>
                </div>
                      
                    </div>
                  </div>
                </div>
                

              </div>
             
            </div>
           
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
            <h3 >All Products</h3>
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
                <div className="card my-4">
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
                      <button onClick={() => handleProductClick(product.id)}>
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

export default ProductList;
