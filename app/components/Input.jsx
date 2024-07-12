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

const Input = ({ input, line, initialFontSize, initialXAxis, initialYAxis, initialColor, onChange }) => {
    const [color, setColor] = useState(initialColor);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [inputText, setInputText] = useState(()  => input);
    const [lineText, setLineText] = useState(() => line);
    const [fontSize, setFontSize] = useState(() => initialFontSize);
    const [xAxis, setXAxis] = useState(() => initialXAxis);
    const [yAxis, setYAxis] = useState(() => initialYAxis);

    const handleInputChange = (e) => {
        console.log("input change", e.target.value)
        setInputText(e.target.value);
        onChange({ inputText: e.target.value, fontSize, xAxis, yAxis, color });
    };

    const handleFontSizeChange = (value) => {
        setFontSize(value);
        onChange({ inputText, fontSize: value, xAxis, yAxis, color });
    };

    const handleXAxisChange = (value) => {
        setXAxis(value);
        onChange({ inputText, fontSize, xAxis: value, yAxis, color });
    };

    const handleYAxisChange = (value) => {
        setYAxis(value);
        onChange({ inputText, fontSize, xAxis, yAxis: value, color });
    };

    const handleColorChange = (newColor) => {
        setColor(newColor);
        onChange({ inputText, fontSize, xAxis, yAxis, color: newColor });
    };

    return (
        <div className="bg-white m-10 rounded shadow-sm">
            <div className="flex flex-col justify-between items-start p-4">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium">Line {lineText}:</span>
                    </div>
                    <textarea
                        value={inputText}
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
                                    className="bg-white border border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 w-28 h-8"
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
                                    className="bg-white border border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 w-28 h-8"
                                    value={xAxis}
                                    onChange={(e) => handleXAxisChange(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <RangeSlider
                                    colorScheme="black,100"
                                    value={[xAxis]}
                                    onChange={(val) => handleXAxisChange(val[0])}
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
                                    className="bg-white border border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 w-28 h-8"
                                    value={yAxis}
                                    onChange={(e) => handleYAxisChange(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <RangeSlider
                                    colorScheme="black,100"
                                    value={[yAxis]}
                                    onChange={(val) => handleYAxisChange(val[0])}
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
                                <p className="text-md">Font Color</p>
                                <input
                                    type="text"
                                    className="bg-white border border-[#CBD5E0] focus:border-black focus:outline-none focus:ring-0 w-28 h-8"
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

export default Input;
