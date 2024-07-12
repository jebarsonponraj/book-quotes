"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import ImageGrid from "./ImageGrid";
import Input from "./Input"; // Assuming Input1 component for first input
import InputTwo from "./InputTwo"; // Assuming Input2 component for second input
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
    input1: {
      text: "Jesus",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#0E0D0B",
      rotation: 10,
    },
    input2: {
      text: "",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#000000",
      rotation: 10,

    },
  },
  {
    input1: {
      text: "Jesus Christ",
      fontSize: 14,
      xAxis: 70,
      yAxis: 100,
      color: "#000000",
      rotation: 10,

    },
    input2: {
      text: "",
      fontSize: 14,
      xAxis: 70,
      yAxis: 100,
      color: "#000000",
      rotation: 10,

    },
  },
  {
    input1: {
      text: "Lord is Good",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#4c3e33",
      rotation: 10,

    },
    input2: {
      text: "His mercy endures forever",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#4c3e33",
      rotation: 10,

    },
  },
  {
    input1: {
      text: "Day 50",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#000000",
      rotation: 10,

    },
    input2: {
      text: "Pentecostal Day",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#000000",
      rotation: 10,

    },
  },
  {
    input1: {
      text: "Believe in yourself, you are unstoppable.",
      fontSize: 20,
      xAxis: 100,
      yAxis: 415,
      color: "#25211e",
      rotation: 7,

    },
    input2: {
      text: "Keep pushing forward, never give up.",
      fontSize: 20,
      xAxis: 98,
      yAxis: 417,
      color: "#25211e",
      rotation: 7,

    },
  },
  {
    input1: {
      text: "Jesus the name above all names.",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#000000",
      rotation: 10,

    },
    input2: {
      text: "",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#000000",
      rotation: 10,

    },
  },
  {
    input1: {
      text: "Holy Holy Holy is The Lord of Hosts",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#000000",
      rotation: 10,

    },
    input2: {
      text: "",
      fontSize: 16,
      xAxis: 50,
      yAxis: 75,
      color: "#000000",
      rotation: 10,

    },
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

  const handleInputChange1 = (updatedData) => {
    const updatedInputData = { ...inputData, input1: { ...inputData.input1, ...updatedData } };
    setInputData(updatedInputData);

    const updatedInputTextArr = inputTextArr.map((item, idx) =>
      idx === images.indexOf(selectedImage) ? updatedInputData : item
    );
    setInputTextArr(updatedInputTextArr);
  };

  const handleInputChange2 = (updatedData) => {
    const updatedInputData = { ...inputData, input2: { ...inputData.input2, ...updatedData } };
    setInputData(updatedInputData);

    const updatedInputTextArr = inputTextArr.map((item, idx) =>
      idx === images.indexOf(selectedImage) ? updatedInputData : item
    );
    setInputTextArr(updatedInputTextArr);
  };

  const handleDownload = () => {
    // Use html2canvas to capture the preview div
    html2canvas(previewRef.current, { scale: 4 }).then((canvas) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:p-3">
      <div className="m-8 sm:pr-3 sm:w-full sm:h-screen sm:overflow-auto flex flex-col gap-4">
        <div className=" flex flex-col gap-3">
          {inputData.input1 && (
            <Input
              key={`input1-${images.indexOf(selectedImage)}`}
              input={inputData.input1.text}
              line="1"
              initialFontSize={inputData.input1.fontSize}
              initialXAxis={inputData.input1.xAxis}
              initialYAxis={inputData.input1.yAxis}
              initialColor={inputData.input1.color}
              initialRotation={inputData.input1.rotation}
              onChange={handleInputChange1}
            />
          )}
          {inputData.input2 && inputData.input2.text && (
            <InputTwo
              key={`input2-${images.indexOf(selectedImage)}`}
              input={inputData.input2.text}
              line="2"
              initialFontSize={inputData.input2.fontSize}
              initialXAxis={inputData.input2.xAxis}
              initialYAxis={inputData.input2.yAxis}
              initialColor={inputData.input2.color}
              initialRotation={inputData.input2.rotation}
              onChange={handleInputChange2}
            />
          )}
        </div>
        <ImageGrid onImageClick={handleImageClick} />
      </div>
      <div>
        <div className="flex flex-col gap-7 sm:h-screen sm:overflow-auto items-center inset-0 -z-10 h-full w-full bg-white p-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex justify-between items-center w-full sm:px-3">
            <p className="text-xl">Preview</p>
            <button
              onClick={handleDownload}
              className="rounded-md bg-black text-white font-medium p-3"
            >
              Download
            </button>
          </div>
          <div className="relative font-serif" style={{ overflow: "hidden" }} ref={previewRef}>
            <Image
              src={selectedImage}
              width={500}
              height={500}
              alt="selected book"
            />
            {inputData.input1 && (
              <p
                style={{
                  position: "absolute",
                  top: `${inputData.input1.yAxis}px`,
                  left: `${inputData.input1.xAxis}px`,
                  fontSize: `${inputData.input1.fontSize}px`,
                  color: inputData.input1.color,
                  transform: `rotate(${inputData.input1.rotation}deg)`,
                  transformOrigin: "top left",
                }}
              >
                {inputData.input1.text}
              </p>
            )}
            {inputData.input2 && (
              <p
                style={{
                  position: "absolute",
                  top: `${parseInt(inputData.input2.yAxis) + 20}px`, // Adjust spacing as needed
                  left: `${inputData.input2.xAxis}px`,
                  fontSize: `${inputData.input2.fontSize}px`,
                  color: inputData.input2.color,
                  transform: `rotate(${inputData.input2.rotation}deg)`,
                  transformOrigin: "top left",
                }}
              >
                {inputData.input2.text}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
