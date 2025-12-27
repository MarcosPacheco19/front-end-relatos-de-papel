import { useState, useCallback } from "react";

export const useBookCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = useCallback(() => {
    setIsFavorite((prev) => !prev);
  }, []);

  const formatPrice = useCallback((price: number) => {
    return `$${price.toFixed(2)}`;
  }, []);

  const calculateDiscount = useCallback(
    (originalPrice: number, currentPrice: number) => {
      const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
      return Math.round(discount);
    },
    []
  );

  const renderStars = useCallback((rating: number) => {
    return Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));
  }, []);

  return {
    isFavorite,
    toggleFavorite,
    formatPrice,
    calculateDiscount,
    renderStars,
  };
};
