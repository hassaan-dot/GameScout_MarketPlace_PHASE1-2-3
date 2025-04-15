import React, { useRef, useState } from "react";

const Imagepicker = ({
  onImageChange,
  previewStyle = "",
  wrapperStyle = "",
  children,
}) => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  return (
    <div className={`flex-1 flex-row items-center ${wrapperStyle}`}>
      <div
        className="cursor-pointer border-gray-400 rounded-xl p-4 text-center hover:border-blue-400"
        onClick={() => fileInputRef.current.click()}
      >
        {" "}
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
          className="hidden"
          ref={fileInputRef}
          onChange={onImageChange}
        />
        {children}
      </div>
    </div>
  );
};

export default Imagepicker;
