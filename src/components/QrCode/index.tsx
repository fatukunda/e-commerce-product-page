import { useState, useEffect } from "react";
interface IQrcodeProps {
  url: string;
}

const QrCode = ({ url }: IQrcodeProps) => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQrCode = async () => {
      const bodyParameters = {
        colorDark: "rgb(5,64,128)",
        qrCategory: "url",
        text: url,
      };
      try {
        setLoading(true);
        const res = await fetch("https://qrtiger.com/api/qr/static", {
          method: "POST",
          body: JSON.stringify(bodyParameters),
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_QR_CODE_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await res.json();
        setResponse(data.url);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getQrCode();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse flex flex-col items-center justify-center px-10 gap-3">
        <div className="h-32 w-full bg-gray-300"></div>
        <div className="h-8 w-full bg-gray-300"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-gray-500 flex items-center">
        Sorry, Something went wrong
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center">
      {response ? (
        <div>
          <img className="w-48" src={response} alt="qrCode" />
        </div>
      ) : (
        <div className="text-gray-500">Your QrCode will show here...</div>
      )}
    </div>
  );
};

export default QrCode;
