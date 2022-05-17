import QRCode from  'qrcode.react'
interface IQrcodeProps {
  url: string;
}

const QrCode = ({ url }: IQrcodeProps) => {
  return (
    <div className="bg-gray-100 rounded-r-md mb-4 flex flex-col items-center justify-center">
      <QRCode 
        value={url}
      />
    </div>
  );
};

export default QrCode;
