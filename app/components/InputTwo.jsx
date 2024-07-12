"use client";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Settings } from "lucide-react";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from "@chakra-ui/react";

const InputTwo = ({ input, line, initialFontSize, initialXAxis, initialYAxis, initialColor, initialRotation, onChange }) => {
    const [color, setColor] = useState(initialColor);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [text, setText] = useState(()  => input);
    const [lineText, setLineText] = useState(() => line);
    const [fontSize, setFontSize] = useState(() => initialFontSize);
    const [xAxis, setXAxis] = useState(() => initialXAxis);
    const [yAxis, setYAxis] = useState(() => initialYAxis);
    const [rotation, setRotation] = useState(initialRotation);

    const handleInputChange = (e) => {
        setText(e.target.value);
        onChange({ text: e.target.value, fontSize, xAxis, yAxis, color, rotation });
    };

    const handleFontSizeChange = (value) => {
        setFontSize(value);
        onChange({ text, fontSize: value, xAxis, yAxis, color, rotation });
    };

    const handleXAxisChange = (value) => {
        setXAxis(value);
        onChange({ text, fontSize, xAxis: value, yAxis, color, rotation });
    };

    const handleYAxisChange = (value) => {
        setYAxis(value);
        onChange({ text, fontSize, xAxis, yAxis: value, color, rotation });
    };

    const handleColorChange = (newColor) => {
        setColor(newColor);
        onChange({ text, fontSize, xAxis, yAxis, rotation, color: newColor });
    };

    const handleRotationChange = (value) => {
        setRotation(value);
        onChange({ text, fontSize, xAxis, yAxis, rotation: value, color });
    };

    return (
        <div className="bg-white rounded shadow-sm">
            <div className="flex flex-col justify-between items-start p-4">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium">Line {lineText}:</span>
                    </div>
                    <textarea
                        value={text}
                        className="bg-white border w-full border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 h-24 rounded-md resize-none px-3 py-2 placeholder-gray-400"
                        placeholder="Enter your text"
                        onChange={handleInputChange}
                    ></textarea>
                </label>
                <div className="flex gap-1 items-center mt-1 hover:bg-slate-200 p-1 rounded-md cursor-pointer" onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
                    <Settings className="w-4 h-4" />
                    <p className="text-sm">{isSettingsOpen ? "Hide" : "Show"} Settings</p>
                </div>
                {isSettingsOpen && 
                    <div className="bg-[#F7FAFC] w-full flex flex-col gap-4 p-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <p className="text-md">Font Size</p>
                                <input
                                    type="text"
                                    className="bg-white border border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 w-28 h-8 pl-2"
                                    value={fontSize}
                                    onChange={(e) => handleFontSizeChange(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <RangeSlider
                                    colorScheme="black,100"
                                    value={[fontSize]}
                                    onChange={(val) => handleFontSizeChange(val[0])}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb index={0} />
                                </RangeSlider>
                                <div className="flex justify-evenly w-full mt-2">
                                    <p className="text-sm">25pt</p>
                                    <p className="text-sm">50pt</p>
                                    <p className="text-sm">75pt</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <p className="text-md">X Axis</p>
                                <input
                                    type="text"
                                    className="bg-white border border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 w-28 h-8 pl-2"
                                    value={xAxis}
                                    onChange={(e) => handleXAxisChange(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <RangeSlider
                                    colorScheme="black,100"
                                    value={[xAxis]}
                                    onChange={(val) => handleXAxisChange(val[0])}
                                    min={0}
                                    max={1000}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb index={0} />
                                </RangeSlider>
                                <div className="flex justify-evenly w-full mt-2">
                                    <p className="text-sm">100px</p>
                                    <p className="text-sm">250px</p>
                                    <p className="text-sm">500px</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <p className="text-md">Y Axis</p>
                                <input
                                    type="text"
                                    className="bg-white border border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 w-28 h-8 pl-2"
                                    value={yAxis}
                                    onChange={(e) => handleYAxisChange(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <RangeSlider
                                    colorScheme="black,100"
                                    value={[yAxis]}
                                    onChange={(val) => handleYAxisChange(val[0])}
                                    min={0}
                                    max={1000}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb index={0} />
                                </RangeSlider>
                                <div className="flex justify-around w-full mt-2">
                                    <p className="text-sm">100px</p>
                                    <p className="text-sm">250px</p>
                                    <p className="text-sm">500px</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <p className="text-md">Text Rotation</p>
                                <input
                                    type="text"
                                    className="bg-white border border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 w-28 h-8 pl-2"
                                    value={rotation}
                                    onChange={(e) => handleRotationChange(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <RangeSlider
                                    colorScheme="black,100"
                                    value={[rotation]}
                                    onChange={(val) => handleRotationChange(val[0])}
                                    min={0}
                                    max={360}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb index={0} />
                                </RangeSlider>
                                <div className="flex justify-around w-full mt-2">
                                    <p className="text-sm">90º</p>
                                    <p className="text-sm">180º</p>
                                    <p className="text-sm">360º</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <p className="text-md">Font Color</p>
                                <input
                                    type="text"
                                    className="bg-white border border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 w-28 h-8 pl-2"
                                    value={color}
                                    onChange={(e) => handleColorChange(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <HexColorPicker className="w-full" color={color} onChange={handleColorChange} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default InputTwo;
