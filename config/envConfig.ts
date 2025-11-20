const envConfig = {
  baseApi: process.env.NEXT_PUBLIC_BASE_API,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  paymentKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  paymentGatewayKey: process.env.STRIPE_SECRET_KEY,
};

export default envConfig;
