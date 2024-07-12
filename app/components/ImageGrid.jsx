
import Image from "next/image";
import book1 from "@/public/book1.jpeg";
import book2 from "@/public/book2.jpg";
import book3 from "@/public/book3.jpg";
import book4 from "@/public/book4.jpg";
import book5 from "@/public/book5.jpg";
import book6 from "@/public/book6.jpg";
import paper1 from "@/public/paper1.jpg";

const images = [
  [book1, book5, book3, paper1],
  [book2, book6, book4],
];

const ImageGrid = ({ onImageClick }) => {
  return (
    <div className="m-10">
      <p className="font-semibold mb-2">Select a page template:</p>
      <div className="grid grid-cols-2 gap-3">
        {images.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-2">
            {col.map((src, index) => (
              <Image
                key={index}
                className="image-hover-effect rounded-md cursor-pointer"
                src={src}
                width={200}
                height={200}
                alt="image"
                onClick={() => onImageClick(colIndex * 4 + index)} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
