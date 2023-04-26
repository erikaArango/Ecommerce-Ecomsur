decreaseCart(state, action) {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );

    if (state.cartItems[itemIndex].cartQuantity > 1) {
      state.cartItems[itemIndex].cartQuantity -= 1;

      toast.info("Decreased product quantity", {
        position: "bottom-left",
      });
    } else if (state.cartItems[itemIndex].cartQuantity === 1) {
      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = nextCartItems;

      toast.error("Product removed from cart", {
        position: "bottom-left",
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  },