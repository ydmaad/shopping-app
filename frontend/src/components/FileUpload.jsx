import React from "react";
import Dropzone from "react-dropzone";
import axiosInstance from "../utils/axios";

const FileUpload = ({ images, onImageChange }) => {
  const handleDrop = async (files) => {
    let formData = new FormData();

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    formData.append("file", files[0]);
    try {
      const response = await axiosInstance.post(
        "/products/image",
        formData,
        config
      );
      console.log("서버 응답:", response.data);
      onImageChange([...images, response.data.fileName]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (image) => {
    const currentIndex = images.indexOf(image);
    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    onImageChange(newImages);
  };

  return (
    <div className="flex gap-4">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="min-w-[300px] h-[300px] border flex items-center justify-center">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="text-3xl">+</p>
            </div>
          </section>
        )}
      </Dropzone>
      <div className="flex-grow h-[300px] border flex items-center justify-center overflow-x-scroll overflow-y-hidden">
        {images.map((image, index) => (
          <div key={`${image}-${index}`} onClick={() => handleDelete(image)}>
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/uploads/${image}`}
              alt="upload-images"
              className="min-w-[300px] h-[300px] cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
