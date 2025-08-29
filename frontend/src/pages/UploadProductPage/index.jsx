import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

const continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

const UploadProductPage = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    continents: 1,
    images: [],
  });
  const userData = useSelector((state) => state.user?.userData);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImages = (newImages) => {
    setProduct((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      writer: userData._id,
      ...product,
    };

    try {
      await axiosInstance.post("/products", body);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-160">
      <div className="text-center m-7">
        <h1>예상 상품 업로드</h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <FileUpload images={product.images} onImageChange={handleImages} />

        <div className="mt-4">
          <label htmlFor="title">이름</label>
          <input
            name="title"
            id="title"
            value={product.title}
            className="w-full px-4 py-2 bf-white border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description">설명</label>
          <input
            name="description"
            id="description"
            value={product.description}
            className="w-full px-4 py-2 bf-white border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="price">가격</label>
          <input
            name="price"
            id="price"
            value={product.price}
            className="w-full px-4 py-2 bf-white border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="continents">지역</label>
          <select
            name="continents"
            id="continents"
            value={product.continets}
            className="w-full px-4 mt-2 bg-white border rounded-md"
            onChange={handleChange}
          >
            {continents.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-4 text-white bg-black rounded-md hover:bg-gray-700 py-2"
            >
              생성하기
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UploadProductPage;
