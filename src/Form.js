function Form({type, value, onChange}){
    return (
        <>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={`Type to change ${type} content`}
                style={{ padding: '8px', width: '300px', marginBottom: '20px', border: 'none', borderBottom: '2px solid black' }}
            />
            <br />
        </>
    )
}

function ImageForm({image, onImageChange}){
    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onImageChange(reader.result); // base64 data URL
    };
    reader.readAsDataURL(file);
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
    />
  );
}

export {Form, ImageForm};