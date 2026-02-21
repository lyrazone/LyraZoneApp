import { useState } from "react";
import "../assets/css/form.css";
import Sidebar from "../components/Sidebar";

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    productCode: "",
    productName: "",
    subCategory: "",
    UOM: "",
    productPrice: "",
    productBarcode: "",
    category: "",
    shortDescription: "",
    productCost: "",
    productSpecifications: "",
    productImage: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, productImage: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="page-content d-flex align-items-stretch">
        <Sidebar />
        <div className="content-inner form-cont">
          <div className="row">
            <div className="col-md-12">
              <div className="card form" id="form1">
                <div className="card-header">
                  <h3>Product</h3>
                  <fieldset className="form-group">
                    <legend>Status</legend>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="optionsRadios"
                          id="optionsRadios1"
                          value="option1"
                          checked
                        />{" "}
                        Active
                      </label>
                      {/* </div>
                    <div className="form-check"> */}
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="optionsRadios"
                          id="optionsRadios2"
                          value="option2"
                        />{" "}
                        Inactive
                      </label>
                    </div>
                  </fieldset>
                  <br></br>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="productCode">Code</label>
                          <input
                            type="text"
                            className="form-control"
                            id="productCode"
                            value={formData.productCode}
                            onChange={handleChange}
                            placeholder="Enter product code"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="productName">Product Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="subCategory">Sub Category</label>
                          <select
                            className="form-control"
                            id="subCategory"
                            value={formData.subCategory}
                            onChange={handleChange}
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="UOM">UOM</label>
                          <select
                            className="form-control"
                            id="UOM"
                            value={formData.UOM}
                            onChange={handleChange}
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="productPrice">Price</label>
                          <input
                            type="text"
                            className="form-control"
                            id="productPrice"
                            value={formData.productPrice}
                            onChange={handleChange}
                            placeholder="Enter product price"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="productBarcode">Barcode</label>
                          <input
                            type="text"
                            className="form-control"
                            id="productBarcode"
                            value={formData.productBarcode}
                            onChange={handleChange}
                            placeholder="Scan product barcode"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="category">Category</label>
                          <select
                            className="form-control"
                            id="category"
                            value={formData.category}
                            onChange={handleChange}
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="shortDescription">
                            Short Description
                          </label>
                          <textarea
                            className="form-control"
                            id="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            rows={3}
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <label htmlFor="productCost">Cost</label>
                          <input
                            type="text"
                            className="form-control"
                            id="productCost"
                            value={formData.productCost}
                            onChange={handleChange}
                            placeholder="Enter product cost"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="productImage">Upload Images</label>
                          <input
                            type="file"
                            className="form-control-file"
                            id="productImage"
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 mb-4">
                      <h4
                        style={{
                          borderBottom: "1px solid #ddd",
                          paddingBottom: "10px",
                        }}
                      >
                        Long Description
                      </h4>
                    </div>

                    <div className="form-group has-success">
                      <label htmlFor="productSpecifications">
                        Product Specifications
                      </label>
                      <textarea
                        className="form-control"
                        id="productSpecifications"
                        value={formData.productSpecifications}
                        onChange={handleChange}
                        rows={3}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-general btn-blue mr-2"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-general btn-white"
                      onClick={() =>
                        setFormData({
                          productCode: "",
                          productName: "",
                          subCategory: "",
                          UOM: "",
                          productPrice: "",
                          productBarcode: "",
                          category: "",
                          shortDescription: "",
                          productCost: "",
                          productSpecifications: "",
                          productImage: null,
                        })
                      }
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
