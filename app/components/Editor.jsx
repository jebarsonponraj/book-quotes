"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import ImageGrid from "./ImageGrid";
import Input from "./Input";
import book1 from "@/public/book1.jpeg";
import book2 from "@/public/book2.jpg";
import book3 from "@/public/book3.jpg";
import book4 from "@/public/book4.jpg";
import book5 from "@/public/book5.jpg";
import book6 from "@/public/book6.jpg";
import paper1 from "@/public/paper1.jpg";
import html2canvas from "html2canvas"; // Import html2canvas library

const images = [book1, book5, book3, paper1, book2, book6, book4];

const initialInputTextArr = [
  {
    input1: "Jesus",
    fontSize: 16,
    xAxis: 50,
    yAxis: 75,
    color: "#000000",
  },
  {
    input1: "Jesus Christ",
    fontSize: 14,
    xAxis: 70,
    yAxis: 100,
    color: "#000000",
  },
  {
    input1: "Lord is Good",
    input2: "His mercy endures forever",
    fontSize: 16,
    xAxis: 50,
    yAxis: 75,
    color: "#000000",
  },
  {
    input1: "Day 50",
    input2: "Pentecostal Day",
    fontSize: 16,
    xAxis: 50,
    yAxis: 75,
    color: "#000000",
  },
  {
    input1: "Jesus Loves You",
    fontSize: 16,
    xAxis: 50,
    yAxis: 75,
    color: "#000000",
  },
  {
    input1: "Jesus the name above all names.",
    fontSize: 16,
    xAxis: 50,
    yAxis: 75,
    color: "#000000",
  },
  {
    input1: "Holy Holy Holy is The Lord of Hosts",
    fontSize: 16,
    xAxis: 50,
    yAxis: 75,
    color: "#000000",
  },
];

const Editor = () => {
  const [selectedImage, setSelectedImage] = useState(book1);
  const [inputTextArr, setInputTextArr] = useState(initialInputTextArr);
  const [inputData, setInputData] = useState(inputTextArr[0]);
  const previewRef = useRef(null);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setInputData(inputTextArr[index]);
  };

  const handleInputChange = (updatedData) => {
    const updatedInputData = { ...inputData, ...updatedData };
    setInputData(updatedInputData);

    const updatedInputTextArr = inputTextArr.map((item, idx) =>
      idx === images.indexOf(selectedImage) ? updatedInputData : item
    );
    setInputTextArr(updatedInputTextArr);
  };

  const handleDownload = () => {
    // Use html2canvas to capture the preview div
    html2canvas(previewRef.current, {scale: 4}).then((canvas) => {
      // Convert canvas to data URL
      const dataUrl = canvas.toDataURL("image/png");

      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "image_with_text.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div>
      {inputData.input1 && (
        <Input
        key={`input1-${images.indexOf(selectedImage)}`}
          input={inputData.input1}
          line="1"
          initialFontSize={inputData.fontSize}
          initialXAxis={inputData.xAxis}
          initialYAxis={inputData.yAxis}
          initialColor={inputData.color}
          onChange={handleInputChange}
        />
      )}
      {inputData.input2 && (
        <Input
        key={`input2-${images.indexOf(selectedImage)}`}
          input={inputData.input2}
          line="2"
          initialFontSize={inputData.fontSize}
          initialXAxis={inputData.xAxis}
          initialYAxis={inputData.yAxis}
          initialColor={inputData.color}
          onChange={handleInputChange}
        />
      )}
      <ImageGrid onImageClick={handleImageClick} />
      <div
        
        className="flex flex-col gap-7 items-center inset-0 -z-10 h-full w-full bg-white p-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-xl">Preview</p>
          <button
            onClick={handleDownload}
            className="rounded-md bg-black text-white font-medium p-3"
          >
            Download
          </button>
        </div>
        <div className="relative" ref={previewRef}>
          <Image
          
            src={selectedImage}
            width={300}
            height={300}
            alt="selected book"
          />
          {inputData.input1 && (
            <p
              style={{
                position: "absolute",
                top: `${inputData.yAxis}px`,
                left: `${inputData.xAxis}px`,
                fontSize: `${inputData.fontSize}px`,
                color: inputData.color,
              }}
            >
              {inputData.input1}
            </p>
          )}
          {inputData.input2 && (
            <p
              style={{
                position: "absolute",
                top: `${parseInt(inputData.yAxis) + 20}px`, // Adjust spacing as needed
                left: `${inputData.xAxis}px`,
                fontSize: `${inputData.fontSize}px`,
                color: inputData.color,
              }}
            >
              {inputData.input2}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;