import { useMemo, useCallback } from "react";
import type { CartItem } from "../../Home/types/book";

const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 5.99;

interface UseCartProps {
  items: CartItem[];
}

export const useCart = ({ items }: UseCartProps) => {
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const shipping = useMemo(() => {
    return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal + shipping;
  }, [subtotal, shipping]);

  const itemsCount = useMemo(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const amountForFreeShipping = useMemo(() => {
    const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
    return remaining > 0 ? remaining : 0;
  }, [subtotal]);

  const hasFreeShipping = useMemo(() => {
    return subtotal >= FREE_SHIPPING_THRESHOLD;
  }, [subtotal]);

  const isEmpty = items.length === 0;

  const formatCurrency = useCallback((value: number) => {
    return value.toFixed(2);
  }, []);

  return {
    subtotal,
    shipping,
    total,
    itemsCount,
    amountForFreeShipping,
    hasFreeShipping,
    isEmpty,
    formatCurrency,
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    shippingCost: SHIPPING_COST,
  };
};
