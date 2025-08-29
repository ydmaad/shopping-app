import React from "react";

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
  return (
    <section>
      <div className="text-center m-7">
        <h1>예상 상품 업로드</h1>
      </div>

      <form action="" className="mt-6">
        <div className="mt-4">
          <label htmlFor="title">이름</label>
          <input
            name="title"
            id="title"
            className="w-full px-4 py-2 bf-white border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description">설명</label>
          <input
            name="description"
            id="description"
            className="w-full px-4 py-2 bf-white border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="price">가격</label>
          <input
            name="price"
            id="price"
            className="w-full px-4 py-2 bf-white border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="continents">지역</label>
          <select
            name="continents"
            id="continents"
            className="w-full px-4 mt-2 bg-white border rounded-md"
          >
            {continents.map((item) => (
              <option key={item.key} value="item.key">
                {item.value}
              </option>
            ))}
          </select>

          <div className="mt-4">
            <button className="w-full px-4 text-white bg-black rounded-md hover:bg-gray-700 py-2">
              생성하기
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UploadProductPage;
