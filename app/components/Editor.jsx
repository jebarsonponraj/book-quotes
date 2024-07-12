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
      text: `"I can do all things through Christ who strengthens me."`,
      fontSize: 17,
      xAxis: 77,
      yAxis: 198,
      color: "#403a31",
      rotation: 0,
    },
    input2: {
      text: "- Philippians 4:13",
      fontSize: 14,
      xAxis: 186,
      yAxis: 225,
      color: "#403a31",
      rotation: 0,

    },
  },
  {
    input1: {
      text: `"When you can't see God's hand, trust His heart. He's working all things together for your good, shaping your story with purpose and love. Stay faithful, for His blessings are on the way."`,
      fontSize: 13,
      xAxis: 73,
      yAxis: 266,
      color: "#282020",
      rotation: 342,

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
      text: "D A Y  5 0",
      fontSize: 13,
      xAxis: 132,
      yAxis: 110,
      color: "#403832",
      rotation: 0,

    },
    input2: {
      text: `Life knows things you don't. It's heard
conversations you haven't. It's realized 
the truth about some people you have not
yet completely come to know. Trust life
when it seems like the very things you 
want most suddenly no longer want
you back. You have to believe that life is 
protecting your heart from any further
damage. It is ensuring you will not
waste another hour of your precious time 
on what's not in your best interest.
Life is not turning its back on you, so you
must learn to not turn your back on it.`,
      fontSize: 10,
      xAxis: 77,
      yAxis: 127,
      color: "#050404",
      rotation: 359,

    },
  },
  {
    input1: {
      text: "I will never leave you",
      fontSize: 16,
      xAxis: 80,
      yAxis: 132,
      color: "#20274b",
      rotation: 0,

    },
    input2: {
      text: "nor forsake you.",
      fontSize: 16,
      xAxis: 99,
      yAxis: 135,
      color: "#20274b",
      rotation: 0,

    },
  },
  {
    input1: {
      text: "Believe in yourself, you are unstoppable.",
      fontSize: 14,
      xAxis: 60,
      yAxis: 256,
      color: "#25211e",
      rotation: 7,

    },
    input2: {
      text: "Keep pushing forward, never give up.",
      fontSize: 14,
      xAxis: 56,
      yAxis: 256,
      color: "#25211e",
      rotation: 7,

    },
  },
  {
    input1: {
      text: "The Seed of Faith",
      fontSize: 14,
      xAxis: 165,
      yAxis: 192,
      color: "#000000",
      rotation: 18,

    },
    input2: {
      text: `In a quiet garden, a young child watched her grandmother plant seeds in the fertile soil. Curious, she asked, "Grandma, why do you plant these tiny seeds?"

The grandmother smiled gently and said, "These seeds may seem small now, but with faith, water, and sunlight, they will grow into beautiful flowers that will brighten our garden."

Years passed, and the child grew into an adult, facing challenges and uncertainties. Remembering her grandmother's wisdom, she planted seeds of hope and trust in her heart, nurturing them with faith.

Just as her grandmother's garden bloomed with vibrant flowers, her life blossomed with resilience and joy, proving that from a tiny seed of faith, miracles can grow.`,
      fontSize: 12,
      xAxis: 104,
      yAxis: 155,
      color: "#000000",
      rotation: 18,

    },
  },
  {
    input1: {
      text: `"The future belongs to those who believe 
in the beauty of their dreams."`,
      fontSize: 14,
      xAxis: 52,
      yAxis: 223,
      color: "#4e5360",
      rotation: 0,

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
      link.download = "book_quote.png";
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
              width={300}
              height={300}
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
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.2",
                }}
                dangerouslySetInnerHTML={{ __html: inputData.input1.text.replace(/\n/g, '<br />') }}
              />
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
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.2",
                }}
                dangerouslySetInnerHTML={{ __html: inputData.input2.text.replace(/\n/g, '<br />') }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
