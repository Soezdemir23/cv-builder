import { useState } from "react";

export default function Test(){
    const [image, setImage] = useState(null)

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}

return (
  <div>
    <input type="file" onChange={onImageChange} className="filetype" />
    <img src={image} alt="preview image" />
  </div>
)
}