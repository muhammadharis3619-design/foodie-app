"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "foodie_cart_v1";

export function CartProvider({ children }) {
	const [items, setItems] = useState([]);
	const [hydrated, setHydrated] = useState(false);

	// Hydrate from localStorage
	useEffect(() => {
		try {
			const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed)) {
					setItems(parsed);
				}
			}
		} catch {}
		setHydrated(true);
	}, []);

	// Persist on changes
	useEffect(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		} catch {}
	}, [items, hydrated]);

	const addItem = useCallback((item) => {
		setItems((prev) => {
			const existingIndex = prev.findIndex((i) => i.id === item.id && i.name === item.name);
			if (existingIndex !== -1) {
				const next = [...prev];
				next[existingIndex] = {
					...next[existingIndex],
					quantity: next[existingIndex].quantity + item.quantity,
				};
				return next;
			}
			return [...prev, item];
		});
	}, []);

	const removeItem = useCallback((id) => {
		setItems((prev) => prev.filter((i) => i.id !== id));
	}, []);

	const clear = useCallback(() => setItems([]), []);

	const subtotal = useMemo(() => {
		return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
	}, [items]);

	const value = useMemo(() => ({ items, addItem, removeItem, clear, subtotal }), [items, addItem, removeItem, clear, subtotal]);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
}
