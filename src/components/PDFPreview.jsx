const PDFPreview = ({fileUrl}) => {
    return (
      <div className="w-full max-w-4xl mx-auto h-[80vh] my-8 border rounded shadow overflow-hidden">
        <iframe
          src={fileUrl}
          className="w-full h-full"
          title="PDF Preview"
        ></iframe>
      </div>
    );
  };
  
  export default PDFPreview;