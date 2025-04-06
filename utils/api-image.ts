const apiImage = (name: string) =>
  `${process.env.EXPO_PUBLIC_API_BASE_URL}/static/${name}.png`;

export default apiImage;
