import React from "react";
import Dropzone from "react-dropzone";
import axiosInstance from "../utils/axios";

const FileUpload = ({ images, onImageChange }) => {
  const handleDrop = async (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    formData.append("file", files[0]);
    try {
      const response = await axiosInstance.post(
        "/products/image",
        formData,
        config
      );
      onImageChange([...images, response.data.fileName]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-4">
      <Dropzone onDrop={(acceptedfiles) => console.log(acceptedfiles)}>
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
        {images.map((image) => (
          <div key={image}>
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
              alt="upload-images"
              className="min-w-[300px] h-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
