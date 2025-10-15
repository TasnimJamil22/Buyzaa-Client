interface PaymentProps {
  params: {
    paymentId: string;
  };
}
export default function PaymentDetailPage({ params }: PaymentProps) {
  return (
    <div>
      <h1>Teka o teka</h1>
      <h1>Payment Details for ID: {params.paymentId}</h1>
    </div>
  );
}
